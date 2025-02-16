package minio

import (
	"bytes"
	"context"
	"fmt"
	"sync"
	"time"

	"memory-book/internal/lib/helpers"

	"github.com/google/uuid"
	"github.com/minio/minio-go/v7"
)

func (m *MinioClient) CreateOne(userID string, file helpers.FileDataType) (string, string, error) {
	objectID := uuid.New().String()

	ctx := context.Background()

	exists, err := m.mc.BucketExists(ctx, userID)
	if err != nil {
		return "", "", err
	}
	if !exists {
		err := m.mc.MakeBucket(ctx, userID, minio.MakeBucketOptions{})
		if err != nil {
			return "", "", err
		}
	}

	reader := bytes.NewReader(file.Data)

	res, err := m.mc.PutObject(context.Background(), userID, objectID, reader, int64(len(file.Data)), minio.PutObjectOptions{})
	if err != nil {
		return "", "", fmt.Errorf("error creating object %s: %v", file.FileName, err)
	}

	url, err := m.mc.PresignedGetObject(context.Background(), userID, objectID, time.Second*24*60*60, nil)
	if err != nil {
		return "", "", fmt.Errorf("ошибка при получении URL для объекта %s: %v", objectID, err)
	}

	return res.Key, url.String(), nil
}

func (m *MinioClient) CreateMany(data map[string]helpers.FileDataType) ([]string, error) {
	urls := make([]string, 0, len(data))

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	urlCh := make(chan string, len(data))

	var wg sync.WaitGroup

	for objectID, file := range data {
		wg.Add(1)
		go func(objectID string, file helpers.FileDataType) {
			defer wg.Done()
			_, err := m.mc.PutObject(ctx, m.BucketName, objectID, bytes.NewReader(file.Data), int64(len(file.Data)), minio.PutObjectOptions{})
			if err != nil {
				cancel()
				return
			}

			url, err := m.mc.PresignedGetObject(ctx, m.BucketName, objectID, time.Second*24*60*60, nil)
			if err != nil {
				cancel()
				return
			}

			urlCh <- url.String()
		}(objectID, file)
	}

	go func() {
		wg.Wait()
		close(urlCh)
	}()

	for url := range urlCh {
		urls = append(urls, url)
	}

	return urls, nil
}

func (m *MinioClient) GetFileBytes(userID, objectID string) (*minio.Object, error) {
	fileBytes, err := m.mc.GetObject(context.Background(), userID, objectID, minio.GetObjectOptions{})
	if err != nil {
		return nil, fmt.Errorf("error getting object %s: %v", objectID, err)
	}

	return fileBytes, nil
}

func (m *MinioClient) GetFileUrl(userID, objectID string) (string, error) {
	url, err := m.mc.PresignedGetObject(context.Background(), userID, objectID, time.Second*24*60*60, nil)
	if err != nil {
		return "", fmt.Errorf("ошибка при получении URL для объекта %s: %v", objectID, err)
	}

	return url.String(), nil
}

func (m *MinioClient) GetMany(userID string, objectIDs []string) ([]string, error) {
	fileCh := make(chan string, len(objectIDs))
	errCh := make(chan helpers.OperationError, len(objectIDs))

	var wg sync.WaitGroup
	_, cancel := context.WithCancel(context.Background())
	defer cancel()

	for _, objectID := range objectIDs {
		wg.Add(1)
		go func(objectID string) {
			defer wg.Done()
			url, err := m.GetFileUrl(userID, objectID)
			if err != nil {
				errCh <- helpers.OperationError{ObjectID: objectID, Error: fmt.Errorf("error getting object %s: %v", objectID, err)}
				cancel()
				return
			}
			fileCh <- url
		}(objectID)
	}

	go func() {
		wg.Wait()
		close(fileCh)
		close(errCh)
	}()

	var files []string
	var errs []error
	for url := range fileCh {
		files = append(files, url)
	}
	for opErr := range errCh {
		errs = append(errs, opErr.Error)
	}

	if len(errs) > 0 {
		return nil, fmt.Errorf("error getting objects: %v", errs)
	}

	return files, nil
}

func (m *MinioClient) DeleteOne(objectID string) error {
	err := m.mc.RemoveObject(context.Background(), m.BucketName, objectID, minio.RemoveObjectOptions{})
	if err != nil {
		return err // Возвращаем ошибку, если не удалось удалить объект.
	}
	return nil
}

func (m *MinioClient) DeleteMany(objectIDs []string) error {
	errCh := make(chan helpers.OperationError, len(objectIDs))
	var wg sync.WaitGroup

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	for _, objectID := range objectIDs {
		wg.Add(1)
		go func(id string) {
			defer wg.Done()
			err := m.mc.RemoveObject(ctx, m.BucketName, id, minio.RemoveObjectOptions{})
			if err != nil {
				errCh <- helpers.OperationError{ObjectID: id, Error: fmt.Errorf("error deleting objects %s: %v", id, err)}
				cancel()
			}
		}(objectID)
	}

	go func() {
		wg.Wait()
		close(errCh)
	}()

	var errs []error
	for opErr := range errCh {
		errs = append(errs, opErr.Error)
	}

	if len(errs) > 0 {
		return fmt.Errorf("error deleting objects : %v", errs) // Возврат ошибки, если возникли ошибки при удалении объектов
	}

	return nil
}

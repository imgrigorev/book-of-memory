package minio

import (
	"context"

	"memory-book/internal/lib/helpers"

	"github.com/minio/minio-go/v7"
	"github.com/minio/minio-go/v7/pkg/credentials"
)

// Client интерфейс для взаимодействия с Minio
type Client interface {
	CreateOne(file helpers.FileDataType) (string, error)          // Метод для создания одного объекта в бакете Minio
	CreateMany(map[string]helpers.FileDataType) ([]string, error) // Метод для создания нескольких объектов в бакете Minio
	GetOne(objectID *minio.Object) (string, error)                // Метод для получения одного объекта из бакета Minio
	GetMany(objectIDs []*minio.Object) ([]string, error)          // Метод для получения нескольких объектов из бакета Minio
	DeleteOne(objectID string) error                              // Метод для удаления одного объекта из бакета Minio
	DeleteMany(objectIDs []string) error                          // Метод для удаления нескольких объектов из бакета Minio
}

type Minio struct {
	Port              string `yaml:"minio_port"`
	Host              string `yaml:"minio_host"`
	BucketName        string `yaml:"bucket_name"`
	MinioRootUser     string `yaml:"minio_root_user"`
	MinioRootPassword string `yaml:"minio_root_password"`
	MinioUseSSL       bool   `yaml:"minio_use_ssl"`
}

type MinioClient struct {
	mc         *minio.Client // Клиент Minio
	BucketName string
	Endpoint   string
}

func (m *Minio) InitMinio() (*MinioClient, error) {
	ctx := context.Background()

	client, err := minio.New(m.Host, &minio.Options{
		Creds:  credentials.NewStaticV4(m.MinioRootUser, m.MinioRootPassword, ""),
		Secure: m.MinioUseSSL,
	})
	if err != nil {
		return nil, err
	}

	exists, err := client.BucketExists(ctx, m.BucketName)
	if err != nil {
		return nil, err
	}
	if !exists {
		err := client.MakeBucket(ctx, m.BucketName, minio.MakeBucketOptions{})
		if err != nil {
			return nil, err
		}
	}

	return &MinioClient{client, m.BucketName, "localhost:9000"}, nil
}

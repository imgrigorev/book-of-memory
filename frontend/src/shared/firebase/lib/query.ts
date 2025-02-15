import { addDoc, collection, setDoc, doc, updateDoc, deleteDoc, getDoc, getDocs } from 'firebase/firestore';
import { firestoreApp } from './index.ts';

type TFirebaseResponse<T> = Promise<{ docs: T }>;

export const getApi = <T>(url: string) => {
  return getDocs(collection(firestoreApp, url)) as unknown as TFirebaseResponse<T>;
};

export const getByIdApi = (url: string, id: string) => {
  return getDoc(doc(firestoreApp, url, id));
};

export const postApi = (url: string, request: unknown) => {
  return addDoc(collection(firestoreApp, url), request);
};

export const putApi = (url: string, id: string, request: unknown) => {
  return setDoc(doc(firestoreApp, url, id), request);
};

export const patchApi = (url: string, id: string, request: { [x: string]: undefined }) => {
  return updateDoc(doc(firestoreApp, url, id), request);
};

export const deleteApi = (url: string, id: string) => {
  return deleteDoc(doc(firestoreApp, url, id));
};

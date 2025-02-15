import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './config.ts';

export const firebaseApp = initializeApp(firebaseConfig);
export const firestoreApp = getFirestore(firebaseApp);
export const firebaseAuth = getAuth();

export const FIREBASE_APP = import.meta.env.VITE_FIREBASE_APP as string;
export const API_KEY = import.meta.env.VITE_API_KEY as string;
export const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID as string;
export const APP_ID = import.meta.env.VITE_APP_ID as string;
export const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID as string;

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: `${FIREBASE_APP}.firebaseapp.com`,
  projectId: FIREBASE_APP,
  storageBucket: `${FIREBASE_APP}.firebasestorage.app`,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

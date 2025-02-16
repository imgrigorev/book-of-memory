import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { firebaseAuth } from 'shared/firebase';
import { TRegister } from '../ui/FeatureRegisterForm.types.ts';
import axios from 'axios';

export const registerApi = async (request: TRegister) => {
  const { username, password } = request;

  try {
    await axios.post('http://localhost:8083/api/v1/register', { username, password });
  } catch (error) {
    //
  }
};

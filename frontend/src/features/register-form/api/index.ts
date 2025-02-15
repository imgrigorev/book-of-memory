import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { firebaseAuth } from 'shared/firebase';
import { TRegister } from '../ui/FeatureRegisterForm.types.ts';

export const registerApi = async (request: TRegister) => {
  const { email, password, name } = request;

  try {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);

    await updateProfile(userCredential.user, { displayName: name });
  } catch (error) {
    //
  }
};

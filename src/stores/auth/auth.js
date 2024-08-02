import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Foydalanuvchi kirishi:', user);
    return user;
  } catch (error) {
    console.error('Google bilan kirishda xatolik:', error);
    throw error;
  }
};

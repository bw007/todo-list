import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userInfo = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    };
    console.log('Foydalanuvchi kirishi:', userInfo);
    return user;
  } catch (error) {
    console.error('Google bilan kirishda xatolik:', error);
    throw error;
  }
};

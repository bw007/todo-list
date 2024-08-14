// firestore.js
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

// Create: yangi hujjat qo'shish
export const createDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log('Hujjat qo\'shildi: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Hujjat qo\'shishda xatolik: ', error);
    throw error;
  }
};

import { doc, setDoc, DocumentReference } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { ICreateUser } from '../interface/IUser';

export const createUserOnRegister = async (userData: ICreateUser) => {
    const { name, email, uid } = userData;
    try {
        if(uid){
            const userDocRef: DocumentReference<ICreateUser> = doc(db, 'users', uid) as DocumentReference<ICreateUser>;
            await setDoc(userDocRef, {
                name,
                email,
                uid,
            });
        }
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

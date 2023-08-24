import { doc, addDoc, updateDoc, DocumentReference, collection,CollectionReference, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import {IPomodoro, IWritePomodoro} from "../interface/IPomodoro";
import {ICreateUser} from "../interface/IUser";

export const insertPomodoro = async ({uid, length} : IWritePomodoro) => {
    try {
        if(uid){
            const userDocRef: DocumentReference<ICreateUser> = doc(db, 'users', uid) as DocumentReference<ICreateUser>;
            const colref: CollectionReference<Omit<IPomodoro,"uid">> = collection(userDocRef, 'pomodoro_entries') as CollectionReference<Omit<IPomodoro,"uid">>;
            const writeData = await addDoc(colref, {
                length,
                finished: false,
                created_at: Date.now()
            })
            return writeData.id
        }
    } catch (error) {
        console.error('Error creating pomodoro:', error);
    }
};
export const updateStatusEntry = async (uid: string, status: boolean, docID: string) => {
    try {
        if(uid){
            const userDocRef = doc(db, 'users', uid, "pomodoro_entries", docID);
            const updateData: any = {
                finished: status,
            };
            await updateDoc(userDocRef, updateData);
        }
    } catch (error) {
        console.error('Error creating pomodoro:', error);
    }
};

export const getPomodoroEntries = async (uid:string) => {
    try {
        if(uid){
            const userDocRef: DocumentReference<ICreateUser> = doc(db, 'users', uid) as DocumentReference<ICreateUser>;
            const colref: CollectionReference<IPomodoro> = collection(userDocRef, 'pomodoro_entries') as CollectionReference<IPomodoro>;
            const querySnapshot = await getDocs(colref);
            const pomodoroEntries: IPomodoro[] = [];

            querySnapshot.forEach((doc) => {
                pomodoroEntries.push({
                    ...doc.data()
                });
            });

            return pomodoroEntries;
        }
    } catch (error) {
        console.error('Error creating pomodoro:', error);
    }
};

import {User, UserCredential} from "firebase/auth";

export interface AuthStore {
    loading: boolean,
    user: User | null;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    signOut: () => Promise<void>;
    deleteUser: () => Promise<void>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    googleSignIn: () => Promise<UserCredential>;
    facebookSignIn: () => Promise<UserCredential>;
    githubSignIn: () => Promise<UserCredential>;
    resetPassword: (email: string) => Promise<void>;
}

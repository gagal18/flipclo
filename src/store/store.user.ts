import {create} from "zustand";

import {createJSONStorage, persist} from "zustand/middleware";

import {
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    GoogleAuthProvider, signInWithPopup,
    GithubAuthProvider, FacebookAuthProvider
} from 'firebase/auth'

import {auth} from '../firebase/firebase'
import {AuthStore} from "../interface/IUser";


export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            loading: false,
            user: null,
            signUp: async (email: string, password: string): Promise<UserCredential> => {
                set({ loading: true });
                try {
                    let existingUser = null;
                    try {
                        existingUser = await signInWithEmailAndPassword(auth, email, password);
                    } catch (error:any) {
                        // Handle the user not found error
                        if (error.code === 'auth/user-not-found') {
                            // User doesn't exist, create a new account
                            const result = await createUserWithEmailAndPassword(auth, email, password);
                            set({ user: result.user });
                            set({ loading: false });
                            return result;
                        } else {
                            // Other errors, rethrow the error for error boundary or global error handling
                            throw error;
                        }
                    }

                    // If existingUser is not null, the user exists and is logged in
                    set({ user: existingUser.user });
                    set({ loading: false });
                    return existingUser;
                } catch (error:any) {
                    console.log('Error signing up:', error);
                    set({ loading: false });
                    throw error;
                }
            },
            signIn: async (email: string, password: string): Promise<UserCredential> => {
                const result = await signInWithEmailAndPassword(auth, email, password);
                set({user: result.user});
                return result;
            },
            signOut: async (): Promise<void> => {
                await signOut(auth).then(() => {
                    set({user: null});
                }).catch((error:any) => {
                    console.log(error)
                });
            },
            deleteUser: async (): Promise<void> => {
                const user = auth.currentUser;
                await user?.delete().then(() => {
                    set({user: null});
                }).catch((error:any) => {
                    console.log("USER NOT DELETED", error)
                });
            },
            resetPassword: async (email: string): Promise<void> => {
                await sendPasswordResetEmail(auth, email);
            },
            googleSignIn: async (): Promise<UserCredential> => {
                set({ loading: true });
                try {
                    const provider = new GoogleAuthProvider();
                    const result = await signInWithPopup(auth, provider);
                    set({ user: result.user });
                    set({ loading: false });
                    return result;
                } catch (error:any) {
                    console.error('Error signing in with Google:', error);
                    set({ loading: false });
                    // Rethrow the error for error boundary or global error handling
                    throw error;
                }
            },
            facebookSignIn: async (): Promise<UserCredential> => {
                set({ loading: true });
                try {
                    const provider = new FacebookAuthProvider();
                    const result = await signInWithPopup(auth, provider);
                    set({ user: result.user });
                    set({ loading: false });
                    return result;
                } catch (error:any) {
                    console.error('Error signing in with Facebook:', error);
                    set({ loading: false });
                    throw error;
                }
            },
            githubSignIn: async (): Promise<UserCredential> => {
                set({ loading: true });
                try {
                    const provider = new GithubAuthProvider();
                    const result = await signInWithPopup(auth, provider);
                    set({ user: result.user });
                    set({ loading: false });
                    return result;
                } catch (error:any) {
                    console.error('Error signing in with GitHub:', error);
                    set({ loading: false });
                    throw error;
                }
            }
        }),
        {
            name: "user-store",
            storage: createJSONStorage(() => sessionStorage)
        }
    ));

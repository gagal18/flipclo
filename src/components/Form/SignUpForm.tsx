import { FC, useState, FormEvent } from 'react';
import {useAuthStore} from "../../store/store.user";
import {IoLogoFacebook, IoLogoGithub, IoLogoGoogle} from "react-icons/io";

const SignUpForm: FC = () => {
    const {signUp, googleSignIn, facebookSignIn, githubSignIn} = useAuthStore();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signUp(email, password);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
            <div className="max-w-md w-full space-y-8 mx-auto">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
                        Sign up to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                    <div className="rounded-md shadow-sm flex flex-col">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className={"flex justify-center"}>
                        <button
                            type="submit"
                            className="btn btn-accent"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className={"w-2/3 mx-auto flex items-center justify-center gap-[10px]"}>
                    <button className="btn" onClick={googleSignIn}>
                        <IoLogoGoogle size={"24px"} />
                    </button>
                    <button className="btn" onClick={facebookSignIn}>
                        <IoLogoFacebook size={"24px"} />
                    </button>
                    <button className="btn" onClick={githubSignIn}>
                        <IoLogoGithub size={"24px"} />
                    </button>
                </div>
            </div>
    );
};

export default SignUpForm;

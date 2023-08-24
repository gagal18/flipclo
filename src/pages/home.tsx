import {FC} from 'react';
import RealtimeClock from "../components/RealtimeClock/RealtimeClock";

const Home: FC = () => {
    return (
        <div>
            <div className="text-5xl font-bold border-b-4 border-accent w-[80%] lg:w-max text-center justify-center flex items-center mx-auto">
                <h1 className={"inline-flex flex-col lg:flex-row items-center gap-[20px]"}>Welcome to
                    <div className={"flex items-center"}>
                        flipcl<RealtimeClock />
                    </div>
                </h1>
            </div>
            <div className={"w-3/4 mx-auto mt-[50px] flex flex-col gap-[40px]"}>
                <p className={""}>
                    Timer and Pomodoro clock, perfectly designed and customizable for your needs.
                    Lock the screen and focus.
                    Switch to darker theme (made for the real-ones)
                </p>
                <div className={" "}>
                    Upcoming features:
                    <ol className={"list-decimal list-inside mt-[5px] pl-[20px]"}>
                        <li className={"line-through"}>Login/Register</li>
                        <li className={"line-through"}>Log entries</li>
                        <li>Statistics</li>
                    </ol>
                </div>
                <p className={""}>
                    Explore and leave you impressions in <a className={"underline inline-block transform transition-transform hover:scale-125"} href={"/about"}>about</a> section
                </p>
            </div>
        </div>
    );
};
export default Home

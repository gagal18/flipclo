import {FC, useEffect, useState} from 'react';
import {useAuthStore} from "../store/store.user";
import SignUpForm from "../components/Form/SignUpForm";
import {getPomodoroEntries} from "../utils/pomodoro.firebase";
import {IPomodoro} from "../interface/IPomodoro";
import {TimeStringFormat} from "../utils/time-format";

const Dashboard: FC = () => {
    const {loading, user} = useAuthStore();
    const [entries, setEntries] = useState<IPomodoro[] | null>(null)
    useEffect(() => {
        const fetchPomodoroEntries = async () => {
            if (user && user.uid) {
                const pomodoroEntries = await getPomodoroEntries(user.uid);
                setEntries(pomodoroEntries??null)
            }
        };
        fetchPomodoroEntries().catch((e) => console.log(e));
    }, [user]);
    return (
        <>
            {loading ?
                <div
                    className={"absolute w-full h-full top-0 left-0 bg-black/[.6] z-10 flex items-center justify-center"}>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
                : null}
            {!user ?
                <div className={"h-full flex items-center"}><SignUpForm/></div> : <>
                    <h1 className="text-3xl font-bold underline text-center">
                        Dashboard
                    </h1>
                    <div className={"flex justify-center"}>
                        welcome {user.displayName}
                    </div>
                    <div className="mt-[150px] overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Minutes</th>
                                <th>Is Finished</th>
                            </tr>
                            </thead>
                            <tbody>
                            {entries && entries.map((entry, index) => (
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    {/*<td>{new Date(entry.created_at).toLocaleDateString()}</td>*/}
                                    <td>{TimeStringFormat(entry.created_at)}</td>
                                    <td>{entry.length}min</td>
                                    <td>{entry.finished ? "YES" : "No"}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </>}
        </>
    );
};

export default Dashboard;

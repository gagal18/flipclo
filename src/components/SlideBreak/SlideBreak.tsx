import {FC} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {IBreak} from "../../interface/IScreen";
import {usePomodoroStore} from "../../store/store.pomodoro";
import {TimerType} from "../../interface/ITimer";
import {updateStatusEntry} from "../../utils/pomodoro.firebase";
import {useAuthStore} from "../../store/store.user";

const SlideBreak: FC<IBreak>= ({timerHandle}) => {
    const { breakValue, isBreakOpen, setIsBreak, setType, reset, setToBreak, currentFirestorePomodoro } = usePomodoroStore();
    const { user } = useAuthStore();

    const handleBreakStart = async () => {
        timerHandle(breakValue)
        setIsBreak(false)
        setType(TimerType.Break)
        setToBreak(false)
        if(user && user.uid && currentFirestorePomodoro){
            await updateStatusEntry(user.uid,true, currentFirestorePomodoro)
        }
    };

    const handleClose = () => {
        setIsBreak(false)
        setType(TimerType.Rest)
        reset()
    };

    return (
        <div className="relative z-50">
            <div className={`left-0 fixed w-[100vw] h-[100vh] bg-black/[.6] transition-all ease-out duration-1500 block ${isBreakOpen ? "top-[0] opacity-100" : "-top-[100vh] opacity-0"}`}>
                <div className={`left-[50%] -translate-x-[50%] bg-white p-6 rounded-md shadow-lg flex flex-col justify-between min-h-[400px] w-[80%] lg:max-w-[500px] absolute ${isBreakOpen ? " top-[20%]" : " -top-[20%]"}`}>
                    <div className={"flex flex-col items-start justify-between gap-[20px]"}>
                        <div className={"flex items-center justify-between w-full"}>
                            <h2 className="text-lg font-bold text-base">Pomodoro finished</h2>
                            <button className="btn btn-ghost" onClick={handleClose}>
                                <AiOutlineClose size={"24px"}/>
                            </button>
                        </div>
                        <div>
                            <p>Please start the break</p>
                        </div>
                    </div>
                    <div className={"flex justify-between"}>
                        <div className={"flex flex-col items-start justify-between"}>
                            <button className="btn btn-neutral" onClick={handleBreakStart}>
                                Start Break
                            </button>
                        </div>
                        <div className={"flex flex-col items-start justify-between"}>
                            <button className="btn btn-neutral" onClick={handleClose}>
                                Discard
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SlideBreak;

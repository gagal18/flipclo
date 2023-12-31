import { FC, useState, ChangeEvent, FormEvent } from "react";
import {ITimerInput, TimerType} from "../../interface/ITimer";
import sound_src from "../../assets/sound/race-start-beeps-125125.mp3";
import { usePomodoroStore } from "../../store/store.pomodoro";
import SlideInput from "../Input/SlideInput";
import {useAuthStore} from "../../store/store.user";
import {insertPomodoro} from "../../utils/pomodoro.firebase";

const PomodoroInput: FC<ITimerInput> = ({ timerHandle, submitDisabled }) => {
    const { setIsLoading, setToBreak, setBreakValue, setType, setPomodoroID } = usePomodoroStore();
    const { user } = useAuthStore();
    const [workMinutes, setWorkMinutes] = useState<number>(1);
    const [breakMinutes, setBreakMinutes] = useState<number>(1);

    const handleWorkMinutesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setWorkMinutes(parseInt(value, 10));
    };

    const handleBreakSecondsChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setBreakMinutes(parseInt(value, 10));
    };

    const handleStart = (event: FormEvent) => {
        event.preventDefault();
        const sound = new Audio(sound_src);


        sound.play().then(async () => {
            setIsLoading(true);
            setTimeout(() => {
                timerHandle(workMinutes*60);
                setBreakValue(breakMinutes*60);
                setType(TimerType.Pomodoro)
                setIsLoading(false);
                setToBreak(true)
            }, 100);
            if(user && user.uid){
                const id = await insertPomodoro({uid: user.uid, length: workMinutes})
                if(id){
                    setPomodoroID(id)
                }
            }
        }).catch(e => console.log(e));
    };

    const handleClear = () => {
        setWorkMinutes(0);
        setBreakMinutes(0);
    };

    return (
        <div className={"w-full"}>
            <form onSubmit={(e) => e.preventDefault()} className={"flex flex-col gap-[10px] items-center"}>
                <div className={"flex flex-col gap-[5px] w-full"}>
                    <SlideInput
                        title="Work Minutes"
                        value={workMinutes}
                        onChange={handleWorkMinutesChange}
                        max={50}
                        step={5}
                    />
                    <SlideInput
                        title="Break Seconds"
                        value={breakMinutes}
                        onChange={handleBreakSecondsChange}
                        max={15}
                        step={5}
                    />
                </div>
                <button onClick={handleStart} disabled={submitDisabled} className={"btn btn-neutral w-1/4"} type="submit">Start</button>
                <button onClick={handleClear} className={"btn btn-neutral w-1/4"}>Clear</button>
            </form>
        </div>
    );
};

export default PomodoroInput;

import {FC, useState, ChangeEvent, FormEvent} from "react";
import {ITimerInput} from "../../interface/ITimer";
import FormInput from "../FormInput/FormInput";
import sound_src from "../../assets/sound/race-start-beeps-125125.mp3"

const TimeInput: FC<ITimerInput> = ({timerHandle, submitDisabled}) => {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [totalSeconds, setTotalSeconds] = useState<number>(0);

    const handleHoursChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setHours(parseInt(value, 10));
    };

    const handleMinutesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setMinutes(parseInt(value, 10));
    };

    const handleSecondsChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSeconds(parseInt(value, 10));
    };

    const handleStart = (event: FormEvent) => {
        event.preventDefault();
        const sound = new Audio(sound_src); // Replace with the path to your sound file

        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        setTotalSeconds(totalSeconds);
        sound.play().then(() =>
            setTimeout(() => {
                timerHandle(totalSeconds);
            }, 3000)).catch(e => console.log(e))
    };
    const handleClear = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className={"flex gap-[10px]"}>
                <div className={"flex flex-col gap-[5px]"}>
                    <FormInput
                        title="Hours"
                        value={hours}
                        onChange={handleHoursChange}
                    />
                    <FormInput
                        title="Minutes"
                        value={minutes}
                        onChange={handleMinutesChange}
                    />
                    <FormInput
                        title="Seconds"
                        value={seconds}
                        onChange={handleSecondsChange}
                    />
                </div>
                <button onClick={handleStart} disabled={submitDisabled} className={"btn btn-neutral"}
                        type="submit">start
                </button>
                <button onClick={handleClear} className={"btn btn-neutral"}>clear</button>
            </form>
            <p className={"text-center mt-[10px]"}>Total seconds: {totalSeconds}</p>
        </div>
    );
};

export default TimeInput;

import {FC, useEffect, useState} from "react";

const RealtimeClock: FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const hours = ((time.getHours() + 11) % 12 + 1);
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourRotation = hours * 30;
    const minuteRotation = minutes * 6;
    const secondRotation = seconds * 6;

    return (
        <div className="w-28 h-28 rounded-full border-5 border-white bg-white shadow-inner flex items-center justify-center relative">
            <div className="absolute h-full w-[3px] mx-auto top-[0px] left-[0px] right-0 transform-origin-bottom center rotate-0 shadow-md z-1" style={{ transform: `rotate(${hourRotation}deg)` }} >
                <span className={"block h-[10%] bg-transparent"}></span>
                <span className={"block h-[40%] bg-black"}></span>
                <span className={"block h-[50%] bg-transparent"}></span>
            </div>
            <div className="absolute h-full w-[3px] mx-auto top-[0px] left-[0px] right-0 transform-origin-bottom center rotate-0 shadow-md z-1" style={{ transform: `rotate(${minuteRotation}deg)` }} >
                <span className={"block h-[5%]  bg-transparent"}></span>
                <span className={"block h-[45%] bg-black"}></span>
                <span className={"block h-[50%] bg-transparent"}></span>
            </div>
            <div className="absolute h-full w-[1px] mx-auto top-[0px] left-[0px] right-0 transform-origin-bottom center rotate-0 shadow-md z-1" style={{ transform: `rotate(${secondRotation}deg)` }} >
                <span className={"block h-[3%]  bg-transparent"}></span>
                <span className={"block h-[47%] bg-accent"}></span>
                <span className={"block h-[50%] bg-transparent"}></span>
            </div>
            <div className="w-2 h-2 rounded-full bg-white border-2 border-black mx-auto z-10" />
        </div>
    )
}

export default RealtimeClock

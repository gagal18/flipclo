import {FC, useEffect, useRef, useState,MutableRefObject} from 'react';
import Card from "../components/Cardv2/Card";

const Pomodoro: FC = () => {
    const [value, setValue] = useState<number>(0)
    const flipRef= useRef() as MutableRefObject<HTMLDivElement>
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [isFlipped1, setIsFlipped1] = useState<boolean>(false);

    const increaseValue = () => {
        setValue((prevValue) => prevValue + 1);
    };
    const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
    };
    const handleClick1 = () => {
        setIsFlipped1((prevState) => !prevState);
    };
    const elementsArray = Array.from({ length: 10 }, (_, index) => index);


    return (
        <div className={"flex"}>
        <div className={"h-[200px] relative flex flex-col gap-[1px]"}>
            <div className={`relative w-[70px] h-[100px] bg-black flex items-bottom justify-center`}>
                <span className={"text-white text-[80px] -bottom-[40px] relative"}>{value}</span>
            </div>
            <div className={"relative h-[100px] -top-[100px]"}>
                {elementsArray.map((element, index) => (
                    <Card value={value} index={index} />
                ))}
            </div>
        </div>
        <button onClick={increaseValue}>Increase</button>
        </div>

);
};

export default Pomodoro

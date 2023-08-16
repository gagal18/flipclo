import {FC} from "react";
import {timeFormat} from "../../utils/time-format";
import {ICardGroup} from "../../interface/ICard";
import CardStack from "./CardStack";

const PomodoroCards: FC<ICardGroup> = ({value, toCount}) => {
    const time =  toCount ? timeFormat(value) : timeFormat(0)
    return (
        <>
            <div className={"flex"}>
                <div className={"h-[200px] relative flex flex-col gap-[1px]"}>
                    <div className={`relative w-[70px] h-[100px] bg-black flex items-bottom justify-center`}>
                        <span className={"text-white text-[80px] -bottom-[40px] relative"}>{time.minutes[0]}</span>
                    </div>
                    <CardStack value={time.minutes[0]} cardsCount={6} />
                </div>
                <div className={"h-[200px] relative flex flex-col gap-[1px]"}>
                    <div className={`relative w-[70px] h-[100px] bg-black flex items-bottom justify-center`}>
                        <span className={"text-white text-[80px] -bottom-[40px] relative"}>{time.minutes[1]}</span>
                    </div>
                    <CardStack value={time.minutes[1]} cardsCount={10} />
                </div>
            </div>
            <span className={"hidden lg:inline text-primary text-[28px] px-[10px]"}>
                :
            </span>
            <div className={"flex"}>
                <div className={"h-[200px] relative flex flex-col gap-[1px]"}>
                    <div className={`relative w-[70px] h-[100px] bg-black flex items-bottom justify-center`}>
                        <span className={"text-white text-[80px] -bottom-[40px] relative"}>{time.seconds[0]}</span>
                    </div>
                    <CardStack value={time.seconds[0]} cardsCount={6} />
                </div>
                <div className={"h-[200px] relative flex flex-col gap-[1px]"}>
                    <div className={`relative w-[70px] h-[100px] bg-black flex items-bottom justify-center`}>
                        <span className={"text-white text-[80px] -bottom-[40px] relative"}>{time.seconds[1]}</span>
                    </div>
                    <CardStack value={time.seconds[1]} cardsCount={10} />
                </div>
            </div>
        </>
    )
}


export default PomodoroCards


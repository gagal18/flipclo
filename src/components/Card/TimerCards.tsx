import {FC} from "react";
import Card from "./Card";
import {timeFormat} from "../../utils/time-format";
import {ICardGroup} from "../../interface/ICard";

const TimerCards: FC<ICardGroup> = ({value, nextValue, toCount}) => {
    const time =  toCount ? timeFormat(value) : timeFormat(0)
    const next =  toCount ? timeFormat(nextValue) : timeFormat(0)

    return (
        <>
            <div className={"flex"}>
                <Card value={next.hours[0] == 9 ? 9 : time.hours[0]} nextValue={next.hours[0]} />
                <Card value={next.hours[1] == 9 ? 9 : time.hours[1]} nextValue={next.hours[1]} />
            </div>
            <span className={"hidden lg:inline text-primary text-[28px] px-[10px]"}>
                :
            </span>
            <div className={"flex"}>
                <Card value={next.minutes[0] == 9 ? 9 : time.minutes[0]} nextValue={next.minutes[0]} />
                <Card value={next.minutes[1] == 9 ? 9 : time.minutes[1]} nextValue={next.minutes[1]} />
            </div>
            <span className={"hidden lg:inline text-primary text-[28px] px-[10px]"}>
                :
            </span>
            <div className={"flex"}>
                <Card value={next.seconds[0] == 9 ? 9 : time.seconds[0]} nextValue={next.seconds[0]} />
                <Card value={next.seconds[1] == 9 ? 9 : time.seconds[1]} nextValue={next.seconds[1]} />
            </div>
        </>
    )
}


export default TimerCards


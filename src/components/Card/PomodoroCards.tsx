import {FC} from "react";
import Card from "./Card";
import {timeFormat} from "../../utils/time-format";
import {ICardGroup} from "../../interface/ICard";

const PomodoroCards: FC<ICardGroup> = ({value, nextValue, toCount}) => {
    const time =  timeFormat(value)
    const next =  timeFormat(nextValue)

    return (
        <>
            {toCount ? (
                <>
                    <Card value={next.hours[0] == 9 ? 9 : time.hours[0]} nextValue={next.hours[0]} />
                    <Card value={next.hours[1] == 9 ? 9 : time.hours[1]} nextValue={next.hours[1]} />
                    <Card value={next.minutes[0] == 9 ? 9 : time.minutes[0]} nextValue={next.minutes[0]} />
                    <Card value={next.minutes[1] == 9 ? 9 : time.minutes[1]} nextValue={next.minutes[1]} />
                    <Card value={next.seconds[0] == 9 ? 9 : time.seconds[0]} nextValue={next.seconds[0]} />
                    <Card value={next.seconds[1] == 9 ? 9 : time.seconds[1]} nextValue={next.seconds[1]} />
                </>
            ):(
                <>
                    <Card value={0} nextValue={0} />
                    <Card value={0} nextValue={0} />
                    <Card value={0} nextValue={0} />
                    <Card value={0} nextValue={0} />
                    <Card value={0} nextValue={0} />
                    <Card value={0} nextValue={0} />
                </>
            )
            }
        </>
    )
}


export default PomodoroCards


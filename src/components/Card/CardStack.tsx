import {FC} from "react";
import {ICardBulk} from "../../interface/ICard";
import Card from "./Card";

const CardStack: FC<ICardBulk> = ({value, cardsCount}) => {
    const elementsArray = Array.from({ length: cardsCount}, (_, index) => index);
    return (
        <div className={"relative h-[100px] -top-[100px]"}>
            {elementsArray.map((element) => (
                <Card value={value} index={element} length={cardsCount} />
            ))}
        </div>
    )
}

export default CardStack


import {FC} from "react";
import {ICard} from "../../interface/ICard";

const Card: FC<ICard> = ({value, nextValue}) => {
    return (
        <>
        <div className={"relative"}>
            <div className={`${value == nextValue+1 ? "opacity-1 z-10" : "opacity-0"} transition-all duration-1000 relative flex flex-col h-[200px] w-max perspective-10`}>
                <div
                    className={"bg-black shadow-xl w-[70px] h-[100px] bg-black flex items-bottom justify-center overflow-hidden "}>
                    <span className={"text-white text-[80px] -bottom-[35px] relative"}>{nextValue}</span>
                </div>
                <div
                    className={`bg-black shadow-xl w-[70px] h-[100px] bg-black flex items-start justify-center overflow-hidden absolute transition-all origin-bottom duration-1000 transform-style-3d ${value == nextValue+1 ? "rotate-x-180 mt-[2px]" : ""}`}>
                    <span
                        className={`text-white text-[80px] top-[45px] relative ${value == nextValue+1 ? "rotate-x-180" : ""}`}>{nextValue}</span>
                </div>
            </div>
            <div className={"top-0 absolute flex flex-col gap-[1px] h-[200px] w-max perspective-10"}>
                <div className={"shadow-xl w-[70px] h-[100px] bg-gradient-to-b from-black from-65% to-[#555555] flex items-bottom justify-center overflow-hidden "}>
                    <span className={"text-white text-[80px] -bottom-[35px] relative"}>{value}</span>
                </div>
                <div
                    className={`shadow-xl w-[70px] h-[100px] bg-gradient-to-t from-black from-65% to-[#555555] flex items-start justify-center overflow-hidden `}>
                    <span className={`text-white text-[80px] -top-[65px] relative`}>{value}</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card


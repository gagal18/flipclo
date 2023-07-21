import {FC, useState} from "react";
import {ICardv2} from "../../interface/ICard";

const Card: FC<ICardv2> = ({value, index}) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
    };
    return (
            <div className={`absolute flex flex-col justify-end h-[200px] ${value == index ? 'z-50 opacity-100' : 'z-10 opacity-0'}`} data-index={index} onClick={handleClick}>
                    <div className={`top-0 bg-red opacity-100 transition-all  relative perspective-10 ${value == index ? 'z-50 opacity-100' : 'opacity-20'}`}>
                    <div className={`h-[100px] relative transition-all duration-1000  transform-style-3d origin-bottom ${value == index ? 'rotate-x-180 z-50' : 'rotate-x-0'}`}>
                        <div className={`absolute bg-black w-[70px] h-[100px] bg-black flex items-bottom justify-center overflow-hidden backface-hidden`}>
                            <span className={"text-white text-[80px] -bottom-[40px] relative"}>{index-1}</span>
                        </div>
                        <div className={`absolute bg-black w-[70px] h-[100px] bg-black flex items-bottom justify-center overflow-hidden backface-hidden rotate-x-180`}>
                            <span className={"text-white text-[80px] -top-[60px] relative"}>{index}</span>
                        </div>
                    </div>
                </div>
                    <div className={`bottom-0 relative flex flex-col gap-[1px] w-max ${value == index ? "z-20" : "z-1"}`}>
                    <div
                        className={`w-[70px] h-[100px] bg-black flex items-start justify-center overflow-hidden `}>
                        <span className={`text-white text-[80px] -top-[60px] relative`}>{index-1}</span>
                    </div>
                </div>
            </div>
    )
}

export default Card


import {FC} from 'react';
import TimerCards from "../components/Card/TimerCards";
import TimeInput from "../components/TimeInput/TimeInput";
import {
    AiOutlineReload,
    AiOutlineClose,
    AiOutlinePause,
    AiOutlinePlayCircle,
    AiOutlineUnlock,
    AiOutlineLock, AiOutlineLoading3Quarters
} from 'react-icons/ai';
import {useTimerStore} from "../store/store.timer";
import FullScreen from 'react-fullscreen-crossbrowser';
import {useFullscreenStore} from "../store/store.fullscreen";

const Timer: FC = () => {
    const {
        initValueSeconds,
        countValue,
        setCountValue,
        nextValue,
        isPaused,
        setInitValueSeconds,
        setNextValue,
        setIsPaused,
        isLoading
    } = useTimerStore();

    const {setIsFullscreen, IsFullScreen} = useFullscreenStore()

    const startTimerHandler = (seconds: number) => {
        setInitValueSeconds(seconds)
        setNextValue(seconds);
        setCountValue(seconds)
        setIsPaused(false)
    }

    const handleRestart = () => {
        setCountValue(initValueSeconds);
        setNextValue(initValueSeconds);
    };

    const handleClear = () => {
        setInitValueSeconds(0);
        setNextValue(0);
        setCountValue(0);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold underline text-center">
                Timer
            </h1>
            <FullScreen
                enabled={IsFullScreen}
                onChange={(isFullscreenEnabled: boolean) => setIsFullscreen(isFullscreenEnabled)}
            >
                <div className={IsFullScreen ? "transition-all ease-in-out flex flex-col items-center justify-center h-[100vh] scale-125 " : ""}>
                    {isLoading?
                        <div className={"absolute w-full h-full top-0 left-0 bg-black/[.6] z-10 flex items-center justify-center"}>
                            <span className="loading loading-dots loading-lg"></span>

                        </div>
                        : null}
                    <div className={"flex flex-col lg:flex-row gap-[10px] justify-center items-center mt-[50px] relative"}>
                        <TimerCards toCount={countValue > 0} value={countValue} nextValue={nextValue}/>
                    </div>
                    <div className={"flex items-center gap-[10px] justify-center mt-[50px]"}>
                        <div
                            className={`flex-row gap-[10px] justify-center items-center  ${countValue > 0 ? "opacity-100 flex" : "opacity-0 hidden"}`}>
                            <button className="btn btn-square" onClick={handleRestart}>
                                <AiOutlineReload size={"24px"}/>
                            </button>
                            <button className="btn btn-square" onClick={handlePauseResume}>
                                {isPaused ? <AiOutlinePlayCircle size={"24px"}/> : <AiOutlinePause size={"24px"}/>}
                            </button>
                            <button className="btn btn-square" onClick={handleClear}>
                                <AiOutlineClose size={"24px"}/>
                            </button>

                        </div>
                        <button className="btn btn-square" onClick={() => setIsFullscreen(!IsFullScreen)}>
                            {IsFullScreen ? <AiOutlineUnlock size={"24px"}/> : <AiOutlineLock size={"24px"}/>}
                        </button>
                    </div>
                    {!IsFullScreen ?
                        <div className={"flex gap-[10px] justify-center items-center mt-[150px] pb-[100px] "}>
                            <TimeInput timerHandle={startTimerHandler} submitDisabled={countValue > 0}/>
                        </div>
                        : null}
                </div>
            </FullScreen>


        </div>

    )
};


export default Timer

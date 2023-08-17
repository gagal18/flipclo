import {FC, useEffect,} from 'react';
import {useFullscreenStore} from "../store/store.fullscreen";
import {usePomodoroStore} from "../store/store.pomodoro";
import FullScreen from "react-fullscreen-crossbrowser";
import {
    AiOutlineClose,
    AiOutlineLock,
    AiOutlinePause,
    AiOutlinePlayCircle,
    AiOutlineReload,
    AiOutlineUnlock
} from "react-icons/ai";
import PomodoroCards from "../components/Card/PomodoroCards";
import PomodoroInput from "../components/PomodoroInput/PomodoroInput";
import SlideBreak from "../components/SlideBreak/SlideBreak";
import {TimerType} from "../interface/ITimer";

const Pomodoro: FC = () => {
    const {
        initValueSeconds,
        countValue,
        setCountValue,
        isPaused,
        setInitValueSeconds,
        setIsPaused,
        isLoading,
        toBreak,
        setIsBreak,
        type
    } = usePomodoroStore();

    const {setIsFullscreen, IsFullScreen} = useFullscreenStore()

    const startTimerHandler = (seconds: number) => {
        setInitValueSeconds(seconds)
        setCountValue(seconds)
        setIsPaused(false)
    }

    const handleRestart = () => {
        setCountValue(initValueSeconds);
        setIsPaused(false)
    };

    const handleClear = () => {
        setInitValueSeconds(0);
        setCountValue(0);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };
    useEffect(() => {
        if(countValue === 0 && toBreak){
            setIsBreak(true)
        }
    }, [countValue, toBreak])
    return (
        <>
        <div>
            <h1 className="text-3xl font-bold underline text-center">
                Pomodoro
            </h1>
            {type !== TimerType.Rest && <p className="mt-[20px] text-xl font-semibold underline text-center">
                {type == TimerType.Pomodoro ? "Time to work!!!" : "Enjoy your rest"}
            </p>}

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
                        <PomodoroCards toCount={countValue > 0} value={countValue} />
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
                            <PomodoroInput timerHandle={startTimerHandler} submitDisabled={countValue > 0}/>
                        </div>
                        : null}
                </div>
            </FullScreen>
        </div>
            <SlideBreak timerHandle={startTimerHandler} />
    </>

    );
};

export default Pomodoro

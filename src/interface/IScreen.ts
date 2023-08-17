export interface IScreen{
    setIsFullscreen: (isFs: boolean) => void,
    IsFullScreen: boolean;
}

export interface IBreak{
    timerHandle: (seconds:number) => void,
}

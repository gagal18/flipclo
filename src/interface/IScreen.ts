export interface IScreen{
    setIsFullscreen: (isFs: boolean) => void,
    IsFullScreen: boolean;
}

export interface IBreak{
    isOpen: boolean,
    timerHandle: (seconds:number) => void,
}

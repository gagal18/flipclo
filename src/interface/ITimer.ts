export interface ITimerInput{
    timerHandle: (seconds:number) => void,
    submitDisabled: boolean;
}



export interface TimeState {
    initValueSeconds: number;
    countValue: number;
    isPaused: boolean;
    isLoading: boolean;
    setInitValueSeconds: (seconds: number) => void;
    setCountValue: (value: number) => void;
    setIsPaused: (paused: boolean) => void;
    setIsLoading: (loading: boolean) => void;
}


export interface PomodoroState extends TimeState{
    breakValue: number;
    toBreak: boolean;
    isBreakOpen: boolean;
    setBreakValue: (value: number) => void;
    setToBreak: (value: boolean) => void;
}

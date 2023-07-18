export interface ITimerInput{
    timerHandle: (seconds:number) => void,
    submitDisabled: boolean;
}



export interface TimerState {
    initValueSeconds: number;
    nextValue: number;
    countValue: number;
    isPaused: boolean;
    isLoading: boolean;
    setInitValueSeconds: (seconds: number) => void;
    setNextValue: (value: number) => void;
    setCountValue: (value: number) => void;
    setIsPaused: (paused: boolean) => void;
    setIsLoading: (loading: boolean) => void;
}

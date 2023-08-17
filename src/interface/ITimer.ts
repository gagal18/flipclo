export interface ITimerInput{
    timerHandle: (seconds:number) => void,
    submitDisabled: boolean;
}

export enum TimerType {
    Pomodoro,
    Break,
    Rest
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
    type: TimerType;
    breakValue: number;
    toBreak: boolean;
    isBreakOpen: boolean;
    setBreakValue: (value: number) => void;
    setToBreak: (value: boolean) => void;
    setIsBreak: (value: boolean) => void;
    setType: (value: TimerType) => void;
    reset: () => void;
}

export type PomodoroStateInit = Omit<PomodoroState, "setType" | "setToBreak" | "setIsPaused" | "setIsLoading" | "setIsBreak" | "setInitValueSeconds" | "setCountValue" | "setBreakValue" | 'reset'>


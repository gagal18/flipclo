import { create } from "zustand";
import {PomodoroState, PomodoroStateInit, TimerType} from "../interface/ITimer";
import {createJSONStorage, persist} from "zustand/middleware";
const initialState: PomodoroStateInit  = {
    initValueSeconds: 0,
    countValue: 0,
    breakValue: 0,
    isPaused: false,
    isLoading: false,
    toBreak:false,
    isBreakOpen:false,
    type: TimerType.Rest,
}

export const usePomodoroStore = create<PomodoroState>()(
    persist(
        (set) => ({
            ...initialState,
            setInitValueSeconds: (seconds:number) => set(() => ({ initValueSeconds: seconds })),
            setBreakValue: (seconds:number) => set(() => ({ breakValue: seconds })),
            setToBreak: (val:boolean) => set(() => ({ toBreak: val })),
            setIsBreak: (val:boolean) => set(() => ({ isBreakOpen: val })),
            setCountValue: (value: number) => set(() => ({countValue: value })),
            setIsPaused: (paused:boolean) => set(() => ({isPaused: paused })),
            setIsLoading: (loading:boolean) => set(() => ({isLoading: loading })),
            setType: (type:TimerType) => set(() => ({type: type })),
            reset: () => {
                set(initialState)
            },
        }),
        {
            name: "pomodoro-store",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);

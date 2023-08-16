import { create } from "zustand";
import {PomodoroState} from "../interface/ITimer";
import {createJSONStorage, persist} from "zustand/middleware";


export const usePomodoroStore = create<PomodoroState>()(
    persist(
        (set) => ({
            initValueSeconds: 0,
            countValue: 0,
            breakValue: 0,
            isPaused: false,
            isLoading: false,
            toBreak:false,
            isBreakOpen:false,
            setInitValueSeconds: (seconds:number) => set(() => ({ initValueSeconds: seconds })),
            setBreakValue: (seconds:number) => set(() => ({ breakValue: seconds })),
            setToBreak: (val:boolean) => set(() => ({ toBreak: val })),
            setCountValue: (value: number) => set(() => ({countValue: value })),
            setIsPaused: (paused:boolean) => set(() => ({isPaused: paused })),
            setIsLoading: (loading:boolean) => set(() => ({isLoading: loading })),
        }),
        {
            name: "pomodoro-store",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);

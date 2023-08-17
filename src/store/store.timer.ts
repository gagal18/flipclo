import { create } from "zustand";
import {TimeState} from "../interface/ITimer";
import {createJSONStorage, persist} from "zustand/middleware";


export const useTimerStore = create<TimeState>()(
    persist(
        (set) => ({
            initValueSeconds: 0,
            countValue: 0,
            isPaused: false,
            isLoading: false,
            setInitValueSeconds: (seconds:number) => set(() => ({ initValueSeconds: seconds })),
            setCountValue: (value: number) => set(() => ({countValue: value })),
            setIsPaused: (paused:boolean) => set(() => ({isPaused: paused })),
            setIsLoading: (loading:boolean) => set(() => ({isLoading: loading })),
        }),
        {
            name: "timer-store",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);

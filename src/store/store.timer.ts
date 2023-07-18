import { create } from "zustand";
import {TimerState} from "../interface/ITimer";
import {createJSONStorage, persist} from "zustand/middleware";


export const useTimerStore = create<TimerState>()(
    persist(
        (set) => ({
            initValueSeconds: 0,
            countValue: 0,
            nextValue: 0,
            isPaused: false,
            isLoading: false,
            setInitValueSeconds: (seconds:number) => set(() => ({ initValueSeconds: seconds })),
            setNextValue: (value: number) => set(() => ({nextValue: value })),
            setCountValue: (value: number) => set(() => ({countValue: value })),
            setIsPaused: (paused:boolean) => set(() => ({isPaused: paused })),
            setIsLoading: (loading:boolean) => set(() => ({isLoading: loading })),
        }),
        {
            name: "timer-store", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage)// (optional) by default, 'localStorage' is used
        }

    )
);

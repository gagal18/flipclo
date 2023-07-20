import { create } from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {IScreen} from "../interface/IScreen";


export const useFullscreenStore = create<IScreen>()(
    persist(
        (set) => ({
            IsFullScreen: false,
            setIsFullscreen: (isFs:boolean) => set(() => ({IsFullScreen: isFs })),
        }),
        {
            name: "fullscreen-store",
            storage: createJSONStorage(() => sessionStorage)
        }

    )
);

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
            name: "fullscreen-store", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage)// (optional) by default, 'localStorage' is used
        }

    )
);

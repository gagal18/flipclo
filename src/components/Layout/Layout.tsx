import {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {AiOutlineClockCircle, AiOutlineHome, AiOutlineInfoCircle, AiOutlineLock, AiOutlineUnlock} from "react-icons/ai";
import {RxCountdownTimer, RxTimer} from "react-icons/rx";
import SlideSettings from "../SlideSettings/SlideSettings";
import {useFullscreenStore} from "../../store/store.fullscreen";

const Layout: FC = () => {
    const {setIsFullscreen, IsFullScreen} = useFullscreenStore()

    return (
        <>
            <div className={"h-[100vh]"}>
                <div className="navbar bg-base-100 max-w-[1360px] mx-auto ">
                    <div className="flex-1">
                        <a href={'/'} className="btn btn-ghost normal-case text-xl justify-start gap-0 text-[24px]">flipcl<AiOutlineClockCircle size={"22px"}/></a>
                    </div>
                    <div className="flex-none">
                        <NavLink to={"/about"}>
                            <button className="btn btn-square btn-ghost">
                                <AiOutlineInfoCircle size={"24px"}/>
                            </button>
                        </NavLink>
                        <SlideSettings/>
                        <label className="swap swap-flip mr-1" onClick={() => setIsFullscreen(!IsFullScreen)}>
                            <input type="checkbox"/>
                            <span className={`btn btn-square btn-ghost ${IsFullScreen ? "swap-on" : "swap-off"}`}>
                            <AiOutlineUnlock size={"24px"}/>
                        </span>
                            <span className={`btn btn-square btn-ghost ${IsFullScreen ? "swap-off" : "swap-on"}`}>
                            <AiOutlineLock size={"24px"}/>
                        </span>
                        </label>

                    </div>
                </div>
                <div className={"max-w-[1360px] mx-auto"}>
                    <Outlet/>
                </div>
                <div className="btm-nav btm-nav-xs max-w-[1360px] mx-auto ">
                    <NavLink to={"/pomodoro"}>
                        <button>
                            <RxCountdownTimer size={"24px"}/>
                        </button>
                    </NavLink>
                    <NavLink to={"/"}>
                        <button>
                            <AiOutlineHome size={"24px"}/>
                        </button>
                    </NavLink>
                    <NavLink to={"/timer"}>
                        <button>
                            <RxTimer size={"24px"}/>
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
};

export default Layout

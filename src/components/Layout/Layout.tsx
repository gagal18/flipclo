import {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {
    AiOutlineClockCircle,
    AiOutlineHome,
    AiOutlineInfoCircle,
    AiOutlineUser
} from "react-icons/ai";
import {RxCountdownTimer, RxTimer} from "react-icons/rx";
import SlideSettings from "../SlideSettings/SlideSettings";
import {useAuthStore} from "../../store/store.user";

const Layout: FC = () => {
    const {user, signOut,deleteUser} = useAuthStore();

    return (
        <>
            <div className={"h-[100vh] flex flex-col"}>
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
                        <div className="dropdown dropdown-hover dropdown-end">
                            <NavLink to={"/dashboard"}>
                            <label tabIndex={0} className="btn btn-square btn-ghost">
                                    <AiOutlineUser size={"24px"}/>
                            </label>
                            </NavLink>

                            {user ?
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <NavLink to={"/dashboard"}>
                                            dashboard
                                        </NavLink>
                                    </li>
                                    <li><span onClick={signOut}>sign out</span></li>
                                    <li><span onClick={deleteUser}>delete</span></li>
                                </ul>
                                :null}

                        </div>

                    </div>
                </div>
                <div className={"max-w-[1360px] mx-auto h-full"}>
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

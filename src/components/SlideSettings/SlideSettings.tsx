import {FC, useEffect, useState} from 'react';
import {AiOutlineClose, AiOutlineSetting, AiOutlineUser} from "react-icons/ai";
import {IoMoonOutline, IoSunnyOutline} from "react-icons/io5";
import {themeChange} from "theme-change";
import {NavLink} from "react-router-dom";

const SlideSettings: FC = () => {
    useEffect(() => {
        themeChange(false)
    }, [])
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative z-50">
            <button className={"btn btn-square btn-ghost"} onClick={handleOpen}>
                <AiOutlineSetting size={"24px"}/>
            </button>
            <div className={`left-0 fixed w-[100vw] h-[100vh] bg-black/[.6] transition-all ease-out duration-1500 block ${isOpen ? "top-[0] opacity-100" : "-top-[100vh] opacity-0"}`}>
                <div className={`left-[50%] -translate-x-[50%] bg-white p-6 rounded-md shadow-lg flex flex-col justify-between min-h-[400px] w-[80%] lg:max-w-[500px] absolute ${isOpen ? " top-[20%]" : " -top-[20%]"}`}>
                    <div className={"flex flex-col items-start justify-between gap-[20px]"}>
                        <div className={"flex items-center justify-between w-full"}>
                            <h2 className="text-lg font-bold text-base">Settings</h2>
                            <button className="btn btn-ghost" onClick={handleClose}>
                                <AiOutlineClose size={"24px"}/>
                            </button>
                        </div>
                        <div>
                            <p>Currently you can toggle the theme, more features coming</p>
                        </div>
                        <div className={"flex"}>
                        <label className="swap swap-rotate mr-1 btn btn-ghost p-0">
                            <input type="checkbox"/>
                            <span className="btn btn-square btn-ghost swap-on" data-key="theme" data-set-theme="luxury"
                                  data-act-class="active">
                            <IoMoonOutline size={"24px"}/>
                        </span>
                            <span className="btn btn-square btn-ghost swap-off" data-key="theme" data-set-theme="wireframe"
                                  data-act-class="active">
                            <IoSunnyOutline size={"24px"}/>
                        </span>

                        </label>
                        <NavLink to={"/dashboard"} onClick={handleClose}>
                            <button className="btn btn-ghost">
                                <AiOutlineUser size={"24px"}/>
                            </button>
                        </NavLink>
                        </div>
                    </div>
                    <div className={"flex flex-col items-start justify-between"}>
                        <button className="btn btn-neutral" onClick={handleClose}>
                            Close Slide
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SlideSettings;

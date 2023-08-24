import { FC } from 'react';
import {AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";

const About: FC = () => {
    return (
        <div className={"flex flex-col gap-[40px]"}>
            <h1 className="text-3xl font-bold underline text-center">
                About
            </h1>
            <p>
                Hello! I'm Bojan Gagaleski, a passionate developer and creator. I'm enthusiastic about building amazing web and mobile applications that make a difference. When I'm not coding, I enjoy exploring new technologies and enhancing my skills to deliver top-notch solutions.
            </p>
            <p>
                Connect with me on social media and explore my portfolio to see some of the exciting projects I've worked on!
            </p>
            <div>
                <h2 className={"text-lg font-bold underline"}>Social Links</h2>
                <div className={"flex gap-[10px]"}>
                    <a href={"https://github.com/gagal18"} className="btn btn-square btn-ghost">
                        <AiOutlineGithub size={"24px"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/bojan-gagaleski/"} className="btn btn-square btn-ghost">
                        <AiOutlineLinkedin size={"24px"}/>
                    </a>
                    <a href={"https://www.facebook.com/bojan.gagaleski"} className="btn btn-square btn-ghost">
                        <AiOutlineFacebook size={"24px"}/>
                    </a>
                </div>
            </div>
            <div>
                <a href={"https://gagal18.github.io/portfolio/"}><h2 className={"text-lg font-bold underline"}>Portfolio</h2></a>
            </div>
            <div>
                <h2 className={"text-lg font-bold underline"}>Pomodoro Technique</h2>
                <p>
                    The Pomodoro Technique is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. It's a fantastic way to improve productivity and maintain focus. I've found it to be a game-changer in managing my work efficiently.
                </p>
            </div>
        </div>
    );
};

export default About;

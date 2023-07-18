import './styles/index.css'
import type {RouteObject} from "react-router-dom";
import {useRoutes} from "react-router-dom";
import NoMatch from "./pages/404";
import Home from "./pages/home";
import Timer from "./pages/timer";
import Layout from "./components/Layout/Layout";
import Pomodoro from "./pages/pomodoro";
import About from "./pages/about";
import {useEffect} from "react";
import {useTimerStore} from "./store/store.timer";

function App() {
    const {
        countValue,
        isPaused,
        setCountValue,
        setNextValue,
    } = useTimerStore();
    useEffect(() => {
        if(countValue > 0 && !isPaused){
            const interval = setInterval(() => {
                setCountValue( countValue - 1);
            }, 2000);
            const timeout = setTimeout(() => {
                setNextValue(countValue - 1);
            }, 1000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [countValue, setNextValue, isPaused]);

    const routes: RouteObject[] = [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},
                {path: "/timer", element: <Timer/>},
                {path: "/pomodoro", element: <Pomodoro/>},
                {path: "/about", element: <About/>},
                {path: "*", element: <NoMatch/>},
            ],
        },
    ];
    const element = useRoutes(routes);
    return (
        <>
            {element}
        </>
    )
}

export default App

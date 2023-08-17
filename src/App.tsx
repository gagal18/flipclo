import './styles/index.css'
import type {RouteObject} from "react-router-dom";
import {useRoutes} from "react-router-dom";
import NoMatch from "./pages/404";
import Home from "./pages/home";
import Timer from "./pages/timer";
import Layout from "./components/Layout/Layout";
import Pomodoro from "./pages/pomodoro";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import {useEffect} from "react";
import {useTimerStore} from "./store/store.timer";
import {usePomodoroStore} from "./store/store.pomodoro";

function App() {
    const {
        countValue: timerCountValue,
        isPaused: isTimerPaused,
        setCountValue: setTimerCountValue,
    } = useTimerStore();

    const {
        countValue: pomodoroCountValue,
        isPaused: isPomodoroPaused,
        setCountValue: setPomodoroCountValue,
    } = usePomodoroStore();

    useEffect(() => {
        if (timerCountValue > 0 && !isTimerPaused) {
            const timerInterval = setInterval(() => {
                setTimerCountValue(timerCountValue - 1);
            }, 1000);
            return () => {
                clearInterval(timerInterval);
            };
        }

        if (pomodoroCountValue > 0 && !isPomodoroPaused) {
            const pomodoroInterval = setInterval(() => {
                setPomodoroCountValue(pomodoroCountValue - 1);
            }, 1000);
            return () => {
                clearInterval(pomodoroInterval);
            };
        }
    }, [timerCountValue, isTimerPaused, pomodoroCountValue, isPomodoroPaused]);

    const routes: RouteObject[] = [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {index: true, element: <Home/>},
                {path: "/timer", element: <Timer/>},
                {path: "/pomodoro", element: <Pomodoro/>},
                {path: "/dashboard", element: <Dashboard/>},
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

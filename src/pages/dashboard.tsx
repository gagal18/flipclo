import {FC} from 'react';
import {useAuthStore} from "../store/store.user";
import SignUpForm from "../components/Form/SignUpForm";

const Dashboard: FC = () => {
    const {loading, user} = useAuthStore();
    return (
<>
            {loading ?
                <div
                    className={"absolute w-full h-full top-0 left-0 bg-black/[.6] z-10 flex items-center justify-center"}>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
                : null}
            {!user ?
                <div className={"h-full flex items-center"}><SignUpForm/></div>: <>
                    <h1 className="text-3xl font-bold underline text-center">
                        Dashboard
                    </h1>
                    <div>
                        welcome {user.displayName}
                    </div>
                </>}
</>
    );
};

export default Dashboard;

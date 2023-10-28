import React from 'react'
// import { useAuth } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import {

    UserButton,
} from "@clerk/clerk-react";


const Login = () => {
    return (
        <div>

            <a href="/sign-in/* ">  <span className=" inline-flex w-28 justify-center  gap-x-1.5 rounded-md px-3 py-2 text-sm  text-white   ring-inset ring-gray-300 hover:bg-yellow-500 ">  LOGIN </span> </a>

        </div>
    )
}







const UserButtons = () => {
    return (
        <div>

            <UserButton />
        </div>
    )
}




const LoginButton = () => {
    const { isLoaded, isSignedIn, userId } = useUser();
    // const { isLoaded, userId, sessionId, getToken } = useAuth();

    if (!isLoaded || !userId) {
        //   return null;
        console.log("Not login");
    }


    const renderComponent = () => {
        if ( isSignedIn) {
            return <UserButtons />;
        } else {
            return <Login/>;
        }
    };

    return renderComponent();
};

export default LoginButton
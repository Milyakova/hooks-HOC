import React, { useState, useEffect } from "react";
const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        setIsAuth(localStorage.getItem("user"));
    }, []);

    const handleClick = () => {
        setIsAuth(!isAuth);
        //     console.log(isAuth);
        //     if (isAuth) {
        //         localStorage.removeItem("user");
        //         setIsAuth(null);
        //     } else {
        //         localStorage.setItem("user", "vera");
        //     }
    };
    const onLogin = () => {
        console.log("log in");
    };
    const onLogOut = () => {
        console.log("log out");
        localStorage.removeItem("user");
    };
    return (
        <Component
            isAuth={isAuth}
            onLogin={onLogin}
            onLogOut={onLogOut}
            handleClick={handleClick}
            {...props}
        />
    );
};
export default withAuth;
// , { useState, useEffect }

import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth, handleClick }) => {
    return (
        <>
            <button
                className="btn btn-danger m-2 md-ms-2"
                onClick={handleClick}
            >
                {" "}
                Авторизован/не авторизован
            </button>
            <button
                className="btn btn-primary md-ms-2"
                onClick={isAuth ? onLogOut : onLogin}
            >
                {isAuth ? "Выйти из системы" : "Войти"}
            </button>
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    handleClick: PropTypes.func
};
export default SimpleComponent;

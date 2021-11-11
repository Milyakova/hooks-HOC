import React, { useEffect, useState, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const [otherState, setOtherState] = useState("false");
    const prState = useRef("");
    const toggleOtherState = () => {
        setOtherState(otherState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>Prev State {prState.current}</p>
            <p>Current State{otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;

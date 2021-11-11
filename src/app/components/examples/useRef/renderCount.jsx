import React, { useState, useRef, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const [otherState, setOtherState] = useState(false);
    const count = useRef(0);
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        count.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <p>{count.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;

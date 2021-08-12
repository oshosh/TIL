import React, { useEffect } from "react";

function Detail({ location, history }) {
    useEffect(() => {
        if (location.state === undefined) {
            history.push("/");
        }
    }, [history, location.state])

    if (location.state) {
        return <span>{location.state.title}</span>;
    } else {
        return null;
    }

}

export default Detail;
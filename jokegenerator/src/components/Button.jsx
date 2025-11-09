import React from "react";
function Button(props) {
    return (
        <button onClick={props.CallApi}
        >click to generate Joke</button>
    )
}

export default Button;
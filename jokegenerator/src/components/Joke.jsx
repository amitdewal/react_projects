import React from "react";
import Button from "./Button";
import { useState } from "react";

function Joke() {

    const [joke, setJoke] = useState("");

    async function fetchApi() {
        try {
            const response = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
            console.log("hey");

            // Convert response to JSON
            const data = await response.json();

            console.log(data);

            console.log(data.joke);


            // Update state
            setJoke(data.joke);

        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    };

    return (
        <div className="joke">
            <Button CallApi={fetchApi} />
            <p>{joke}</p>
        </div>
    )

}

export default Joke;
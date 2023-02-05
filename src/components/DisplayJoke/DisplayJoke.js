import React from "react";
import { useRef } from "react";
import "./DisplayJoke.css";
export default function DisplayJoke() {
    const JokeSetupRef = useRef();
    const JokeDeliverRef = useRef();
    function FetchJoke() {
        JokeSetupRef.current.innerHTML = "";
        JokeDeliverRef.current.innerHTML = "";
        const joke = fetch("https://v2.jokeapi.dev/joke/Programming");
        joke.then((res) => res.json()).then((data) => {
            if (data.type === "twopart") {
                JokeSetupRef.current.innerHTML = data.setup;
                window.setTimeout(() => {
                    JokeDeliverRef.current.innerHTML = data.delivery;
                }, 2000);
            } else {
                JokeSetupRef.current.innerHTML = data.joke;
            }
        });
    }
    return (
        <section className="JokeMain">
            <div className="JokePlace">
                <p className="JokePlaceFirstPart" ref={JokeSetupRef}></p>
                <p className="JokePlaceSecondPart" ref={JokeDeliverRef}></p>
                <input
                    className="JokePlaceInput"
                    type="button"
                    value="Joke"
                    onClick={FetchJoke}
                />
            </div>
        </section>
    );
}

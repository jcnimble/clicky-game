import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span class="navbar-text">
                Click an image to begin!
            </span>
            <span class="navbar-text">
            Score: {props.score} | High Score: {props.highscore}
            </span>
        </nav>
    );
}

export default NavBar;
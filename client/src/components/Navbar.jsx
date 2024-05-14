import React, { useEffect } from "react";
import college from "./college.jpeg";
import './Navbar.css';

let heading = "";
let length = 0;
const h = ['S', 't', 'u', 'd', 'e', 'n', 't', ' ', 'S', 'p', 'h', 'e', 'r', 'e'];

function Navbar() {
    useEffect(() => {
        const interval = setInterval(() => {
            if (length < h.length) {
                heading += h[length];
                length++;
                document.querySelector('.heading').textContent = heading;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => {
            clearInterval(interval); // Cleanup the interval on component unmount
        };
    }, []);

    return (
        <div loggedIn="false" className="con nav-container">
            <nav className="m-auto navbar navbar-expand-lg bg-dark">
                <a className="navbar-brand nav" href="#Home">
                    <img className="icon" src={college} alt="College Logo" />
                </a>
                <h1 className="heading">{heading}</h1>
                <button className="login-button btn btn-primary" type="button">Login</button>
            </nav>
        </div>
    );
}

export default Navbar;

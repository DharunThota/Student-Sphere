import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import college from "./college.jpeg";
import "./Navbar.css"

// let heading = "";
// let length = 0;
// const h = ['S', 't', 'u', 'd', 'e', 'n', 't', ' ', 'S', 'p', 'h', 'e', 'r', 'e'];

function Navbar() {
	let navigate = useNavigate();

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (length < h.length) {
    //             heading += h[length];
    //             length++;
    //             document.querySelector('.heading').textContent = heading;
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 100);

    //     return () => {
    //         clearInterval(interval); // Cleanup the interval on component unmount
    //     };
    // }, []);

	function handleLogin() {
		navigate("/login");
	}

    return (
        <>
            {/* <nav class="navbar navbar-expand-lg sticky top" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-lg-center" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" >Clubs</a>
                            <a class="nav-link" >Events</a>
                            <a class="nav-link" >Announcements</a>
                        </div>
                    </div>
                    <button className="login-button btn btn-primary" type="button" onClick={handleLogin} style={{float: "right"}}>Login</button>
                </div>
            </nav> */}

            <nav className="navbar sticky-top navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <div className="container-fluid">
                    <img src="./college.jpeg" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">

                        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page">HOME</a>
                            </li>
                            <li><a className="nav-link active" aria-current="page">Clubs</a></li>
                            <li><a className="nav-link active" aria-current="page">Events</a></li>
                            <li><a className="nav-link active" aria-current="page">Announcements</a></li>
                        </ul>

                        <div className="d-lg-flex col-lg-3 justify-content-lg-end">
                            <button className="btn btn-outline-danger">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        </>

        
    );
}

export default Navbar;

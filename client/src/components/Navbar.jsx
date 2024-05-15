import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css"
import logo from "./logo.png"
import { UserContext } from "../context/UserContext";

// let heading = "";
// let length = 0;
// const h = ['S', 't', 'u', 'd', 'e', 'n', 't', ' ', 'S', 'p', 'h', 'e', 'r', 'e'];

function Navbar() {
    const {setCurrentUser, isLoggedIn, setLoggedIn} = useContext(UserContext)
	let navigate = useNavigate();
    const h = ['S', 't', 'u', 'd', 'e', 'n', 't', ' ', 'S', 'p', 'h', 'e', 'r', 'e'];

    let length = 0;
    let heading="";
    const interval = setInterval(() => {
        if (length < h.length) {
            heading+= h[length];
            document.querySelector(".heading").textContent = heading;
            length++;
        } else {
            clearInterval(interval);
        }
    }, 100);

	function handleLogin() {
		navigate("/login");
	}

    function handleLogout(){
        setLoggedIn(false)
        setCurrentUser({})
        navigate("/")
    }

    // return (
    //     <>
    //         <nav className="navbar sticky-top navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
    //         <div className="container">
    //             <img src="./college.jpeg" />
                    
    //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //                 </button>

    //                 <div className="links">
    //                     <ul className="navbar-nav col-lg-6 justify-content-lg-center">
    //                         <li className="nav-item" onClick={() => navigate("/")}>
    //                         <a className="nav-link active" aria-current="page">HOME</a>
    //                         </li>
    //                         <li className="nav-item" onClick={() => navigate("/clubs")}><a className="nav-link active" aria-current="page">Clubs</a></li>
    //                         <li className="nav-item" onClick={() => navigate("/events")}><a className="nav-link active" aria-current="page">Events</a></li>
    //                         <li className="nav-item" onClick={() => navigate("/announcements")}><a className="nav-link active" aria-current="page">Announcements</a></li>
    //                         {isLoggedIn && <li className="nav-item" onClick={() => navigate("/dashboard")}><a className="nav-link active" aria-current="page">Dashboard</a></li>}
    //                     </ul>
    //                 </div>
    //             <div className="d-lg-flex col-lg-3 justify-content-lg-end" style={{float:"right"}}>
    //                 {!isLoggedIn ? <button className="btn btn-success" onClick={handleLogin}>Log In</button> : <button className="btn btn-outline-danger" onClick={handleLogout}>Log Out</button>}
    //             </div>
    //         </div>
    //     </nav>

    //     </>

        
    // );
    return (
        <header className="navbar-expand-lg bg-dark">
          <div className="navbar">
            <Link to="/" className="navbar-brand nav">
              <img className="icon" src={logo} alt="College Logo" />
            </Link>
            <h1 className="heading">{heading}</h1>
            <button className="login-button btn btn-primary" type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="contain">
            <span className="element text-center">Events</span>
            <span className="element text-center">Announcements</span>
            <span className="element text-center">Clubs</span>
          </div>
        </header>
      );
}

export default Navbar;

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

    useEffect(() => {
      
      const interval = setInterval(() => {
            if (length < h.length) {
                heading+= h[length];
                document.querySelector(".heading").textContent = heading;
                length++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }, [])

	function handleLogin() {
		navigate("/login");
	}

    function handleLogout(){
        setLoggedIn(false)
        setCurrentUser({})
        navigate("/")
    }

    return (
        <header className="navbar-expand-lg bg-dark">
          <div className="navbar">
            <Link to="/" className="navbar-brand nav">
              <img className="icon" src={logo} alt="College Logo" />
            </Link>
            <h1 className="heading">{heading}</h1>
            {!isLoggedIn ? 
              <button className="login-button btn btn-success" type="button" onClick={handleLogin}>Login</button> 
              : 
              <button className="login-button btn btn-outline-danger" type="button" onClick={handleLogout}>Logout</button> 
            }
          </div>
          <div className="contain">
            <span className="element text-center" onClick={() => navigate("/events")}>Events</span> 
            <span className="element text-center" onClick={() => navigate("/announcements")}>Announcements</span>
            <span className="element text-center" onClick={() => navigate("/clubs")}>Clubs</span>
            {isLoggedIn && <span className="element text-center" onClick={() => navigate("/dashboard")}>Dashboard</span>}
          </div>
        </header>
      );
}

export default Navbar;

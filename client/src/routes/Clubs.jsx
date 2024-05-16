import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import '../styles/Clubs.css';
import ClubCard from "../components/ClubCard";
import Heading from '../components/Heading'
import SubHeading from "../components/SubHeading";
import Navbar from "../components/Navbar";

function Clubs(){
    const [tech, setTech] = useState([]);
    const [cult, setCult] = useState([]);
    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);
    const [temp1, setTemp1] = useState([]);
    const [temp2, setTemp2] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res1 = await axios.get("http://localhost:3000/clubs/Technical");
            setTech(res1.data)
            setTemp1(res1.data);
            const res2 = await axios.get("http://localhost:3000/clubs/Cultural");
            setCult(res2.data)
            setTemp2(res2.data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        if(searchTerm === '') {
            setTech(temp1);
            setCult(temp2);
            return;
        }
        const filterTech = temp1.filter(club =>
            club.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setTech(filterTech);

        const filterCult = temp2.filter(club =>
            club.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setCult(filterCult);
    }, [searchTerm]);

    const handleSearchClick = () => {
        setSearchActive(!searchActive);
        if (!searchActive) {
            inputRef.current.focus();
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return(
        <>
            <Navbar />
            <div className="club-container">
                <div className="clubCard">
                <div className="Header">
                    <div><Heading name="Clubs" /></div>
                    <div className={`search-container ${searchActive ? 'active' : ''}`}>
                        <div className={`search-icon ${searchActive ? 'd-none' : ''}`} onClick={handleSearchClick}>
                            <i className="fa fa-search"></i>
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onBlur={handleSearchClick}
                        />
                    </div>
                </div>

                <hr className='hori'/>


                    <SubHeading name="Technical Clubs" />
                    <div className="container">
                        {tech.map((club) => (
                            <ClubCard
                                key={club.club_id}
                                id={club.club_id}
                                club={club.name}
                            />
                        ))}
                    </div>
                    <SubHeading name="Cultural Clubs" />
                    <div className="container">
                        {cult.map((club) => (
                            <ClubCard
                                key={club.club_id}
                                id={club.club_id}
                                club={club.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
        </>
        
    );
}

export default Clubs;
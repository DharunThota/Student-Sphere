import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Clubs.css';
import ClubCard from "../components/ClubCard";
import Clublist from "../components/Clublist"
import Heading from '../components/Heading'
import SubHeading from "../components/SubHeading";
import Navbar from "../components/Navbar";

function Clubs(){
    const [tech, setTech] = useState([]);
    const [cult, setCult] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res1 = await axios.get("http://localhost:3000/clubs/Technical");
            //console.log(res1.data);
            setTech(res1.data)
            const res2 = await axios.get("http://localhost:3000/clubs/Cultural");
            //console.log(res2.data);
            setCult(res2.data)
        }
        fetchData();
    }, [])

    return(
        <>
            <Navbar />
            <div className="clubCard">
                <Heading name="Clubs" />
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
        </>
        
    );
}

export default Clubs;
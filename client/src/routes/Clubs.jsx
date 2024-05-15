import React from "react";
import '../styles/Clubs.css';
import ClubCard from "../components/ClubCard";
import Clublist from "../components/Clublist"
import Heading from '../components/Heading'

function Clubs(){
    return(
        <div className="clubCard">
        <Heading name="Clubs" />
            <div className="container">
                {Clublist.map((event) => (
                    <ClubCard
                        key={event.id}
                        img={event.imgURL}
                        club={event.club}
                        des={event.des}
                    />
                ))}
            </div>
        </div>
    );
}

export default Clubs;
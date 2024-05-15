import React from "react";
import '../styles/Clubs.css';
import ClubCard from "../components/ClubCard";
import Clublist from "../components/Clublist"
import Heading from '../components/Heading'
import SubHeading from "../components/SubHeading";

function Clubs(){

    const technicalClubs = Clublist.filter(club => club.type === "Technical");
    const culturalClubs = Clublist.filter(club => club.type === "Cultural");

    return(
        <div className="clubCard">
        <Heading name="Clubs" />
        <SubHeading name="Technical Clubs" />
            <div className="container">
                {technicalClubs.map((event) => (
                    <ClubCard
                        key={event.id}
                        img={event.imgURL}
                        club={event.club}
                        des={event.des}
                    />
                ))}
            </div>
        <SubHeading name="Cultural Clubs" />
            <div className="container">
                {culturalClubs.map((event) => (
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
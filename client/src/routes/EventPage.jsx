import React from "react";
import SubHeading from "../components/SubHeading";
import '../styles/EventPage.css';

function EventPage(props) {
    return (
    
        <div className="eventPage">
        <SubHeading name="Title: Hosting another LeetCodesque Competition" />

        <div className="byWho"> 
                <p>by Nerd #102{props.op} | CS Club{props.clubName}</p>
        </div>
        
        <img src={props.img} alt="event_img" />
        
        <div className="eventDetails">
            <p>{props.date} Day 3 Vashihst | {props.time} Lunch Break so no one comes | {props.venue}H05 without AC</p>
        </div>

        <div className="eventDescription">
            <p>{props.description}
            lorum shitum epusm spstein list 
            iewnfineof 
            qwdiqnidnqid qwdjndnqd
            qdnqidniqndqnd
            qwdiunqdnqwnd</p>
        </div>
    </div>

    );
}

export default EventPage;
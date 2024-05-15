import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SubHeading from "../components/SubHeading";
import '../styles/EventPage.css';
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function EventPage() {
    const {id} = useParams();
    const [event, setEvent] = useState({
        name: "",
        date: "",
        time: "",
        venue: "",
        about: "",
        title: ""
    });

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/events/${id}`);
                console.log(response.data);
                setEvent(response.data[0]);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <Navbar />
            <div className="eventPage">
                <SubHeading name={event.title} />
                <div className="byWho"> 
                    <p>{event.name}</p>
                </div>
                <img src="https://picsum.photos/220" alt="event_img" />
                <div className="eventDetails">
                    <p>{event.date} | {event.time} | {event.venue}</p>
                </div>
                <div className="eventDescription">
                    <p>{event.about}</p>
                </div>
            </div>
        </>
        
    );
}

export default EventPage;
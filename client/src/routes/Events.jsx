import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Events.css';
import EventCard from "../components/EventCard";
import Eventlist from "../components/Eventlist";
import ButtonGroup from "../components/ButtonGroup";
import Heading from '../components/Heading'
import SubHeading from "../components/SubHeading";
import Navbar from "../components/Navbar";

function Events(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3000/events/Upcoming");
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);


    return(
        <>
            {/* <Navbar /> */}
            <div className="eventCard">
            <Heading name="Events" />
            <SubHeading name="Upcoming Events" />
            <ButtonGroup />
                <div className="container">
                    {events.map((event) => (
                        <EventCard
                            id = {event.event_id}
                            key={event.event_id}
                            name={event.name}
                            date={event.date}
                            time={event.time}
                            venue={event.venue}
                            title={event.title}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}
export default Events;
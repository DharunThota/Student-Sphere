import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Events.css';
import EventCard from "../components/EventCard";
import ButtonGroup from "../components/ButtonGroup";
import Heading from '../components/Heading'
import SubHeading from "../components/SubHeading";
import Navbar from "../components/Navbar";

function Events(){
    const [upcoming, setUpcoming] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const r1 = await axios.get("http://localhost:3000/events/Upcoming");
                setUpcoming(r1.data);
                const r2 = await axios.get("http://localhost:3000/events/Ongoing");
                setOngoing(r2.data);
                const r3 = await axios.get("http://localhost:3000/events/Completed");
                setCompleted(r3.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);


    return(
        <>
            <Navbar />
            <div className="club-container">
            <Heading name="Events" />
            <SubHeading name="Upcoming Events" />
                <div className="container-fluid">
                    {upcoming.map((event) => (
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

                <SubHeading name="Ongoing Events" />
                <div className="container-fluid">
                    {ongoing.map((event) => (
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

                <SubHeading name="Completed Events" />
                <div className="container-fluid">
                    {completed.map((event) => (
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
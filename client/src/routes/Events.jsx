import React from "react";
import './Events.css';
import EventCard from "../components/EventCard";
import Eventlist from "../components/Eventlist";

function Events(){
    return(
        <div className="eventsPage">
            {Eventlist.map((event) => (
                <EventCard
                    key={event.id}
                    name={event.name}
                    speaker={event.speaker}
                    img={event.imgURL}
                    date={event.date}
                    time={event.time}
                    venue={event.venue}
                />
            ))}
        </div>
    );
}

export default Events;
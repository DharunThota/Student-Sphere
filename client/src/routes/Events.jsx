import React from "react";
import './Events.css';
import EventCard from "../components/EventCard";
import Eventlist from "../components/Eventlist";
import ButtonGroup from "../components/ButtonGroup";

function Events(){
    return(//heading
    //subheading  -- buttons right side
    //event cards

        <div className="container">
        <ButtonGroup/>

            {Eventlist.map((event) => (
                <EventCard
                    key={event.id}
                    name={event.name}
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
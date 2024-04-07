import React from "react";
import './Events.css';
import EventCard from "../components/EventCard";
import Eventlist from "../components/Eventlist";
import ButtonGroup from "../components/ButtonGroup";
import Heading from '../components/Heading'
import SubHeading from "../components/SubHeading";

function Events(){
    return(//heading
    //subheading  -- buttons right side
    //event cards

        <div className="eventsPage">
        <Heading name="Events" />
        <SubHeading name="Upcoming Events" />
        <ButtonGroup/>

            {Eventlist.map((event) => (
                <EventCard
                    key={event.id}
                    name={event.name}
                    img={event.imgURL}
                    date={event.date}
                    time={event.time}
                    venue={event.venue}
                    des={event.des}
                />
            ))}
        </div>
    );
}

export default Events;
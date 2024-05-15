import React from "react";
import '../styles/Events.css';
import EventCard from "../components/EventCard";
import Eventlist from "../components/Eventlist";
import ButtonGroup from "../components/ButtonGroup";
import Heading from '../components/Heading'
import SubHeading from "../components/SubHeading";
import Navbar from "../components/Navbar";

function Events(){
    


    return(//heading
    //subheading  -- buttons right side
    //event cards
        <>
            {/* <Navbar /> */}
            <div className="eventCard">
            <Heading name="Events" />
            <SubHeading name="Upcoming Events" />
            <ButtonGroup />
                <div className="container">
                    {Eventlist.map((event) => (
                        <EventCard
                            id = "1"
                            key={event.id}
                            name={event.name}
                            img={event.imgURL}
                            date={event.date}
                            time={event.time}
                            venue={event.venue}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
export default Events;
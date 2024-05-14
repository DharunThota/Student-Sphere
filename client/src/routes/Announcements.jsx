import React from "react";
import AnnouncementCard from "../components/AnnouncementCard";
import Announcementlist from "../components/Announcementlist";
import ButtonGroup from "../components/ButtonGroup";
import Heading from '../components/Heading'

function Events(){
    return(//heading
    //subheading  -- buttons right side
    //event cards

        <div>
        <Heading name="Announcements" />
        <ButtonGroup/>
            <div>
                {Announcementlist.map((event) => (
                    <AnnouncementCard
                        key={event.id}
                        heading={event.heading}
                        desc={event.desc}
                        club={event.club}
                    />
                ))}
            </div>
        </div>
    );
}

export default Events;
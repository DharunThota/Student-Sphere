import React, { useState, useEffect } from "react";
import axios from "axios";
import AnnouncementCard from "../components/AnnouncementCard";
import Heading from '../components/Heading'
import Navbar from "../components/Navbar";

function Events(){
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:3000/announcements");
                console.log(response.data);
                setAnnouncements(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, [])

    return(

        <div>
            <Navbar />
            <Heading name="Announcements" />
            <div>
                {announcements.map((ann) => (
                    <AnnouncementCard
                        key={ann.id}
                        heading={ann.about}
                        desc={ann.about}
                        club={ann.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Events;
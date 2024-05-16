import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import '../styles/Events.css';
import EventCard from "../components/EventCard";
import Heading from '../components/Heading'
import SubHeading from "../components/SubHeading";
import Navbar from "../components/Navbar";

function Events(){
    const [upcoming, setUpcoming] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);
    const [temp1, setTemp1] = useState([]);
    const [temp2, setTemp2] = useState([]);
    const [temp3, setTemp3] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const r1 = await axios.get("http://localhost:3000/events/Upcoming");
                setUpcoming(r1.data);
                setTemp1(r1.data);
                const r2 = await axios.get("http://localhost:3000/events/Ongoing");
                setOngoing(r2.data);
                setTemp2(r2.data);
                const r3 = await axios.get("http://localhost:3000/events/Completed");
                setCompleted(r3.data);
                setTemp3(r3.data);
                
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if(searchTerm === '') {
            setUpcoming(temp1);
            setOngoing(temp2);
            setCompleted(temp3);
            return;
        }
        const filterUpcoming = temp1.filter(event =>
            event.title.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setUpcoming(filterUpcoming);

        const filterOngoing = temp2.filter(event =>
            event.title.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setOngoing(filterOngoing);

        const filterCompleted = temp3.filter(event =>
            event.title.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setCompleted(filterCompleted);
    }, [searchTerm]);

    const handleSearchClick = () => {
        setSearchActive(!searchActive);
        if (!searchActive) {
            inputRef.current.focus();
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return(
        <>
            <Navbar />
            <div className='club-container'>
                <div className="Header">
                    <div><Heading name="Events" /></div>
                    <div className={`search-container ${searchActive ? 'active' : ''}`}>
                        <div className={`search-icon ${searchActive ? 'd-none' : ''}`} onClick={handleSearchClick}>
                            <i className="fa fa-search"></i>
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onBlur={handleSearchClick}
                        />
                    </div>
                </div>

                <hr className='hori'/>
                <SubHeading name="Upcoming Events" />
                <div className="container-fluid">
                    {upcoming.map((event) => (
                        <EventCard
                            id={event.event_id}
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
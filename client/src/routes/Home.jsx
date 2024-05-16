
import React, { useEffect, useState } from "react";
import '../styles/Home.css';
import Navbar from "../components/Navbar";
import Carouselcomp from "../components/carousel";
import Section from "../components/Section";
import axios from "axios";

function Home() {
    const mediaList=[{url:"https://www.iiitdm.ac.in/_app/immutable/assets/Stud_Achi1.b802a2f2.webp",type:"jpg"},{url:"https://www.iiitdm.ac.in/_app/immutable/assets/SIXTH_INTER_IIIT_SPORTS_MEET_2024.00fffeb6.webp",type:"jpg"}]
    const [clubs, setClubs] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [events, setEvents] = useState([]);
   
    useEffect(() => {
        async function fetchData(){
            const r1 = await axios.get("http://localhost:3000/clubs");
            setClubs(r1.data)
            const r2 = await axios.get("http://localhost:3000/announcements");
            setAnnouncements(r2.data)
            const r3 = await axios.get("http://localhost:3000/events");
            setEvents(r3.data)
        }
        fetchData();
    }, []);

    return (
        <div className="homePage">
            <Navbar/>
            <Carouselcomp mediaList={mediaList}/>
            <Section bcolor="white" hcolor="black" title="Clubs" card={clubs} />
            <Section bcolor="#3F4042" hcolor="white" title="Announcements" card={announcements}/>
            <Section bcolor="white" hcolor="black" title="Events" card={events} />
        </div>
    );
}

export default Home;

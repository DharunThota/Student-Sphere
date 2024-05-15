import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "../components/Heading";
import '../styles/ClubPage.css';
import { useParams } from "react-router-dom"

function ClubPage() {
    const {id} = useParams();
    const [club, setClub] = useState({
        name: "",
        lead_fname: "",
        lead_lname: "",
        pic_fname: "",
        pic_lname: "",
        room_no: "",
        description: "",
    });

    useEffect(() => {
        console.log(id);
        async function fetchData(){
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/clubs/${id}`)
                console.log(response.data);
                setClub(response.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (    
        <div className="clubPage">
        <Heading name={club.name} />
        <div className="info">
            <img src={"https://picsum.photos/220"} alt="club_img" />
                    <p>Lead: {club.lead_fname} {club.lead_lname}</p>
                    <p>PIC: {club.pic_fname} {club.pic_lname}</p>
                    <p>Room No:{club.room_no}</p>
        </div>
         
        <div className="description">
            <p> {club.description} </p>
        </div>
    </div>

    );
}

export default ClubPage;
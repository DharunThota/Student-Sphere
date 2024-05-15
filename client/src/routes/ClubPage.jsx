import React from "react";
import Heading from "../components/Heading";
import '../styles/ClubPage.css';

function ClubPage() {
    return (    
        <div className="clubPage">
        <Heading name="CS Club" />
        <div className="info">
            <img src={"https://picsum.photos/220"} alt="club_img" />
                    <p>Lead</p>
                    <p>PIC</p>
                    <p>Room no</p>
        </div>
         
        <div className="description">
            <p>
            lorum shitum epusm spstein list 
            iewnfineof 
            qwdiqnidnqid qwdjndnqd
            qdnqidniqndqnd
            qwdiunqdnqwnd</p>
        </div>
    </div>

    );
}

export default ClubPage;
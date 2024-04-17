import React from "react";
import "../styles/Announcements.css";
import popup from "./AnnouncementPopup";

function AnnouncementCard(props) {
  return (
    <div className="container" onClick={popup}>
      <div className="acard">
        <p>{props.heading}</p>
        <h>{props.club}</h>
      </div>
    </div>
  );
}

export default AnnouncementCard;

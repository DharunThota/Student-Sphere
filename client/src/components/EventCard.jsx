import React from "react";

function EventCard(props) {
  return (
    <div className="card">
      <div>
        <h2>{props.name}</h2>
        <img src={props.img} alt="avatar_img" />
      </div>
      <div className="body">
        <p>{props.date}</p>
        <p>{props.time}</p>
        <p>{props.venue}</p>
      </div>
    </div>
  );
}

export default EventCard;

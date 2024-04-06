import React from "react";

function EventCard(props) {
  return (
    <div className="card">
      <div>
        <img src={props.img} alt="avatar_img" />
        <h1>{props.name}</h1>
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

import React from "react";

function EventCard(props) {
  return (
    <div className="ecard">
      <div>
        <img src={props.img} alt="avatar_img" />
        <h5>{props.name}</h5>
      </div>
      <hr />
      <div className="body">     
        <p>{props.date}, {props.time}</p>
        <p>{props.venue}</p>    
      </div>
      <div className="info">
        <p>{props.des}</p>
      </div>
    </div>
  );
}

export default EventCard;

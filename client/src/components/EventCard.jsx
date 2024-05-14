import React from "react";

function EventCard(props) {
  return (
    <div className="ecard">
      <div>
        <img src={props.img} alt="avatar_img" />
      </div>
      <h1>{props.name}</h1>
      <div className="body">   
        <p>{props.date}</p>  
        <break />
        <p>{props.time}</p>
        <break />
        <p>{props.venue}</p>
      </div>
    </div>
  );
}

export default EventCard;

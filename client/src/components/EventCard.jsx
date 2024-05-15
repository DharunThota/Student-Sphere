import React from "react";
import { useNavigate } from "react-router-dom";

function EventCard(props) {
  let navigate = useNavigate();

    function handleCLick(event){
        navigate(`/events/${props.id}`);
    }

  return (
    <div className="ecard" onClick={handleCLick}>
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

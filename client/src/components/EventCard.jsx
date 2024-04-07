import React from "react";

function EventCard(props) {
  return (
    <div className="ecard">
      <div>
        <img src={props.img} alt="avatar_img" />
        <h5>{props.name}</h5>
      </div>
<<<<<<< HEAD
      <div className="body">        
        <p>{props.date}</p>
        <break />
        <p>{props.time}</p>
        <break />
        <p>{props.venue}</p>        
=======
      <hr />
      <div className="body">     
        <p>{props.date}, {props.time}</p>
        <p>{props.venue}</p>    
>>>>>>> 13d6c505742c92b5a8497174cb91734ae4a71080
      </div>
      <div className="info">
        <p>{props.des}</p>
      </div>
    </div>
  );
}

export default EventCard;

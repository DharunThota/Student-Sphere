import React from "react";
import { useNavigate } from "react-router-dom";

function ClubCard(props) {
  let navigate = useNavigate()

  function handleClick(){
    navigate(`/clubs/${props.id}`)
  }

  return (
    <div className="ccard" onClick={handleClick}>
      <div>
        <img src="https://picsum.photos/220" alt="avatar_img" />
      </div>
      <h1>{props.club}</h1>
    </div>
  );
}

export default ClubCard;

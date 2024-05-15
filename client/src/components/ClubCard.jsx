import React from "react";

function ClubCard(props) {
  return (
    <div className="ccard">
      <div>
        <img src={props.img} alt="avatar_img" />
      </div>
      <h1>{props.club}</h1>
    </div>
  );
}

export default ClubCard;

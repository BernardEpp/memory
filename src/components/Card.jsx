import React from "react";

const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img alt="" src={image} className="card-face"></img>
        <img
          alt=""
          src={"/assets/Question.png"}
          className="card-back"
          onClick={onClick}
        ></img>
      </div>
    </div>
  );
};

export default Card;

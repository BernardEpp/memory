const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img alt="" src={image} className="card-face"></img>
        <img
          alt=""
          src={"/assets/fireship.png"}
          className="card-back"
          onClick={onClick}
        ></img>
      </div>
    </div>
  );
};

export default Card;

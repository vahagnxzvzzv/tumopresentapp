import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div>
      <div className={classes.card}>
          <img className={props.cardImage} src={props.image} />
        <h3 className={props.planetClassName}>{props.planetName}</h3>
      </div>
    </div>
  );
}

export default Card;

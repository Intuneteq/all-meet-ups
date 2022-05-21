import React from "react";
import Card from "../ui/Card";
import classes from "./Meetupitem.module.css";

const Meetupitems = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.tittle} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default Meetupitems;

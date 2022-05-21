import React from "react";
import classes from "./Meetuplist.module.css";
import Meetupitems from "./Meetupitems";

const Meetuplist = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <Meetupitems
          key={meetup.id}
          id={meetup.id}
          image={meetup.Image}
          title={meetup.Title}
          address={meetup.Address}
          description={meetup.Description}
           />
      ))}
    </ul>
  );
};

export default Meetuplist;

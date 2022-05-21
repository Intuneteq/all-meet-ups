import { useState, useEffect } from "react";

import React from "react";
import Meetuplist from "../components/meetups/Meetuplist";


const Allmeetup = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, SetloadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://meetups-7f3aa-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        SetloadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>...Loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All meet ups</h1>
      <Meetuplist meetups={loadedMeetups} />
    </section>
  );
};

export default Allmeetup;

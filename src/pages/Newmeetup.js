import React from "react";
import {useNavigate} from 'react-router-dom'
import Newmeetupform from "../components/meetups/NewMeetupform";

const Newmeetup = () => {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://meetups-7f3aa-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'content-Type': 'application/json'
        }
      }
      ). then(() => {
        navigate('/', { replace: true });
      }) ;
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <Newmeetupform onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default Newmeetup;

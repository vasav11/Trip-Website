import React from 'react';
import "./TripStyles.css";
import TripData from './TripData';
import Trip1 from "../assests/5.jpg"
import Trip2 from "../assests/8.jpg"
import Trip3 from "../assests/6.jpg"
 function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique
        destination using Google Maps.
      </p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Trip in Indonesia"
        text="Indonesia,officially the Republic of Indonesia,is
        a country in Southeast Asia and Ocenia between the indian and
        Pacific oceans, It consists of over 17,000 islands, including sumatra,
        Java,Sulawesi,and parts of Borneo and new Guinea"/>

 <TripData
        image={Trip2}
        heading="Trip in Malaysia"
        text="Malaysia is a Southeast Asia country occupying
        parts of the Malay Peninsula and the island of Borneo.It's
        know for its beaches,rainforest and mix of malay, Chinese,Indian
        and European cultural influences"
        />
         <TripData
        image={Trip3}
        heading="Trip in France"
        text="France,in Western Europe,encompasses medieval cities,
        alpine villages and Mediterranean beaches.Paris,its capital
        is famed for its fashion houses classical art museums including
        the louvre and monuments like the Eiffel Tower"
        />

      </div>
    </div>
  );
}
export default Trip;
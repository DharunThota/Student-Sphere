import React from "react";
import EventCard from "./EventCard"
import Events from "./Events";

function App(){
    return(
        <div>
            <h1>Event Card</h1>
            {Events.map(Event => {
                return <EventCard
                    key={Event.id}
                    name={Event.name}
                    img={Event.imgURL}
                    date={Event.date}
                    time={Event.time}
                    venue={Event.venue}
                    />})
            }
        </div>
    );
}

export default App;
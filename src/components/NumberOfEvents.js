import React, { useState } from "react";
const NumberOfEvents = ({ setCurrentNOE }) => {
    const [numberOfEvents, setNumberOfEvents] = useState(32);
    const handleInputChange = (event) => {
        const value = event.target.value;
        setNumberOfEvents(value);
        setCurrentNOE(value);
    };
    return (
        <div id="number-of-events">
            <label htmlFor="numberOfEventsInput">Number of Events: </label>
            <input
                id="numberOfEventsInput"
                type="number"
                min="1"
                role="textbox"
                value={numberOfEvents}
                onChange={handleInputChange}
            />
        </div>
    );
};
export default NumberOfEvents;

import React, { useState } from "react";
const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [numberOfEvents, setNumberOfEvents] = useState(32);
    const handleInputChange = (event) => {
        const value = event.target.value;
        setNumberOfEvents(value);

        if (isNaN(value) || parseInt(value) <= 0) {
            setErrorAlert("Please enter a valid number of events.");
            setCurrentNOE("");

        } else {
            setErrorAlert("");
            setCurrentNOE(value);
        }

        setNumberOfEvents(value);
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

import { useState } from "react";
const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <li>
      <div className="event">
        <h3>{event.summary}</h3>
        <div className="location">{event.location} </div>
        <div className="dateTime">{event.start.dateTime}</div>
        {showDetails && <div className="description">{event.description}</div>}
        <button className="details-btn" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </li>
  );
};
export default Event;

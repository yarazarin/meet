import "./App.css";
import EventList from "./components/EventList";

const App = () => {
  return (
    <div className="App">
      <div id="event-list"></div>
      <EventList />
    </div>
  );
};
export default App;

import { useState } from "react";
import "./styles.css";

/*
  1. Select day, Turn it bold (default "M")
  2. Create a state for each day's tomatoes 🍅 
  3. Increment / decrement should work based
     which day is selected 
*/

const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];

export default function App() {
  const [selectedDay, setSelectedDay] = useState("M");
  const [allTomatoes, setAllTomatoes] = useState({});

  function addTomato() {
    const newAllTomatoes = { ...allTomatoes };
    const currentDayTomatoes = newAllTomatoes[selectedDay];
    if (currentDayTomatoes) {
      newAllTomatoes[selectedDay] = currentDayTomatoes + "🍅";
    } else {
      newAllTomatoes[selectedDay] = "🍅";
    }
    setAllTomatoes(newAllTomatoes);
  }

  function subtractTomato() {
    const newAllTomatoes = { ...allTomatoes };
    const currentDayTomatoes = newAllTomatoes[selectedDay];
    if (currentDayTomatoes) {
      newAllTomatoes[selectedDay] = currentDayTomatoes.slice(0, -2);
    }
    setAllTomatoes(newAllTomatoes);
  }

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day) => (
          <div
            onClick={() => setSelectedDay(day)}
            style={selectedDay === day ? { color: "black" } : {}}
            key={day}
            className="tomato-box"
          >
            <h3>{day}</h3>
            <div className="tomato-day-box">{allTomatoes[day]}</div>
          </div>
        ))}
        <div className="buttons-container">
          <div onClick={subtractTomato} className="button">
            -
          </div>
          <div onClick={addTomato} className="button">
            +
          </div>
        </div>
      </div>
    </div>
  );
}

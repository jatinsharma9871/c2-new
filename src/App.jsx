import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [show, setShow] = useState(true);
  const [houseData, setHouseData] = useState([]);

  const changeSetShow = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <button
        className="toggleForm"
        onClick={() => {
          changeSetShow();
        }}
      >
        {/* Show text Add House or Show Rentals based on state */}
        {show ? "Add House" : "Show Rentals"}
      </button>

      {/* Show component based on state */}
      {show ? <Rentals /> : <AddHouse changeSetShow={changeSetShow} />}
      <br />
    </div>
  );
}

export default App;
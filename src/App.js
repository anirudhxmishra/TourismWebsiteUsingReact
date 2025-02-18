import React, { useState } from "react";
import data from "./data.js";
import Tours from "./Component/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left!</h2>
        <button className="btn-white" onClick={() => setTours(shuffleArray([...data]))}>
            Refresh
        </button>
      </div>
    );
  }
  

  return (
    <div className="homepage">
      <div className="image-container">
        <img
          className="homepage-img"
          src="https://images.unsplash.com/photo-1505977003557-c907eece08e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hawa Mahal"
        />
        <h1 className="overlay-text">Mystic Bharat</h1>
      </div>
      <div>
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    </div>
  );
  
};

export default App;

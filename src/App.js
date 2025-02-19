import React, { useState, useEffect } from "react";
import data from "./data.js";
import Tours from "./Component/Tours";
import Spinner from "./Component/Spinner";  
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const App = () => {
  const [tours, setTours] = useState(data);
  const [loading, setLoading] = useState(true);
  const [flaggedTours, setFlaggedTours] = useState([]);

  // Function to remove a tour and show toast
  function removeTour(id, name) {
    setTours(tours.filter((tour) => tour.id !== id));
    toast.info(`${name} Tour Removed.`, { position: "top-right" });
  }

  // Function to shuffle array randomly
  function shuffleArray(array) {
    let shuffled = [...array]; // Create a copy
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  }

  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="homepage">
      <ToastContainer />  {/* Toast notifications enabled */}

      <div className="image-container">
        <img
          className="homepage-img"
          src="https://images.unsplash.com/photo-1505977003557-c907eece08e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D"
          alt="Hawa Mahal"
        />
        <h1 className="overlay-text">Mystic Bharat</h1>
      </div>

      <div>
        {loading ? (
          <Spinner />
        ) : tours.length === 0 ? (
          <div className="refresh">
            <h2>No Tours Left!</h2>
            <button className="btn-white" onClick={() => setTours(shuffleArray(data))}>
              Refresh
            </button>
          </div>
        ) : (
          <Tours 
            tours={tours} 
            removeTour={removeTour} 
            flaggedTours={flaggedTours} 
            setFlaggedTours={setFlaggedTours} 
          />
        )}
      </div>
    </div>
  );
};

export default App;

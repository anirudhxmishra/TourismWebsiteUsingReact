import React, { useState, useEffect } from "react";
import data from "./data.js";
import Tours from "./Component/Tours.jsx";
import Spinner from "./Component/Spinner.jsx";  
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Component/register.jsx";
import Login from "./Component/login.jsx";
import './App.css';

const App = () => {
  const [tours, setTours] = useState(data);
  const [loading, setLoading] = useState(true);
  const [flaggedTours, setFlaggedTours] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login status

  function removeTour(id, name) {
    setTours(tours.filter((tour) => tour.id !== id));
    toast.info(`${name} Tour Removed.`, { position: "top-right", autoClose: 3000 });
  }

  function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Show only 6 tours if not logged in
  const visibleTours = isLoggedIn ? tours : shuffleArray(tours).slice(0, 6);

  return (
    <div className="homepage">
      <ToastContainer />

      <div className="image-container">
        <img
          className="homepage-img"
          src="https://images.unsplash.com/photo-1505977003557-c907eece08e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D"
          alt="Hawa Mahal"
        />
        <h1 className="overlay-text">Mystic Bharat</h1>
      </div>

      <button className="reg-btn" onClick={() => setShowRegister(true)}>Register</button>
      <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>

      {showRegister && (
        <div className="modal-overlay" onClick={() => setShowRegister(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Register onClose={() => setShowRegister(false)} />
            <button className="close-btn" onClick={() => setShowRegister(false)}>✖</button>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Login onLoginSuccess={() => { setIsLoggedIn(true); setShowLogin(false); }} />
            <button className="close-btn" onClick={() => setShowLogin(false)}>✖</button>
          </div>
        </div>
      )}

      <div>
        {loading ? (
          <div className="spinner"><Spinner /></div>
        ) : tours.length === 0 ? (
          <div className="refresh">
            <h2>No Tours Left!</h2>
            <button className="btn-white" onClick={() => setTours(shuffleArray(data))}>
              Refresh
            </button>
          </div>
        ) : (
          <>
            <Tours 
              tours={visibleTours} 
              removeTour={removeTour} 
              flaggedTours={flaggedTours} 
              setFlaggedTours={setFlaggedTours} 
            />
            {!isLoggedIn && tours.length > 6 && (
              <div className="login-prompt">
                <p>Login to see more tours</p>
                <button onClick={() => setShowLogin(true)}>Login</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

function Login({ onClose, onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(""); // Error message for invalid login

  function changeHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function validateForm() {
    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function submitHandler(event) {
    event.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:8080/login", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();
        
        if (response.ok) {
          onLoginSuccess(); // ✅ Successfully logged in
          onClose(); // ✅ Close modal
        } else {
          setLoginError(data.error || "Invalid email or password."); // ❌ Show backend error
        }
      } catch (error) {
        setLoginError("Server error. Please try again later."); // ❌ Handle network errors
      }
    }
  }

  return (
    <div className="register-container">
      <h2>Login</h2>
      {loginError && <p className="error">{loginError}</p>} {/* Display login error */}
      
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          onChange={changeHandler}
          name="password"
          value={formData.password}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" className="register-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;

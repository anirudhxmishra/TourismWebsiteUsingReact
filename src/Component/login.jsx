import React, { useState } from "react";

function Login({ onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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

  function submitHandler(event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Welcome!");
      onClose(); // ✅ Close modal after success
    }
  }

  return (
    <>

      <div className="register-container">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>

          <input
            type="email"
            placeholder="Email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            onChange={changeHandler}
            name="password"
            value={formData.password}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit" className="register-btn">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;

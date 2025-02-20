import React, { useState } from "react";

function Register({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function submitHandler(event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Registration Successful!");
      onClose(); // ✅ Close modal after success
    }
  }

  return (

    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

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

        <button type="submit" className="register-btn">Sign Up</button>
      </form>
    </div>

  );
}

export default Register;

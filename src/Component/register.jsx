import React, { useState } from "react";

function Register({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state

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

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Validate before API call

    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong!");

      console.log(data);
      alert("Registration Successful!");
      onClose(); 
    } catch (error) {
      alert(error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="First Name" onChange={changeHandler} name="firstName" value={formData.firstName} />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input type="text" placeholder="Last Name" onChange={changeHandler} name="lastName" value={formData.lastName} />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input type="email" placeholder="Email" onChange={changeHandler} name="email" value={formData.email} />
        {errors.email && <p className="error">{errors.email}</p>}

        <input type="password" placeholder="Password" onChange={changeHandler} name="password" value={formData.password} />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit" className="register-btn" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Register;

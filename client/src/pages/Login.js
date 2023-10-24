import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    collegeUsername: "", // Add collegeUsername to the state
    collegePassword: ""  // Add collegePassword to the state
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStudentLogin = async () => {
    try {
      const response = await fetch("api/auth/login/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        window.alert("Student logged in successfully!");
        window.location.replace("/");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCollegeLogin = async () => {
    try {
      const response = await fetch("api/auth/login/college", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.collegeUsername,
          password: formData.collegePassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        window.alert("College logged in successfully!");
        window.location.replace("/");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <center>
        <h3>Login</h3>
      </center>
      <div className="mainLogin">
        <div>
          <h3>Student Login</h3>
          <input
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="icon-paper-plane" onClick={handleStudentLogin}>
            Log In
          </button>
        </div>
        <div>
          <h3>College Login</h3>
          <input
            placeholder="college-username"
            name="collegeUsername"
            value={formData.collegeUsername}
            onChange={handleChange}
          />
          <input
            placeholder="college-password"
            type="password"
            name="collegePassword"
            value={formData.collegePassword}
            onChange={handleChange}
          />
          <button className="icon-paper-plane" onClick={handleCollegeLogin}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
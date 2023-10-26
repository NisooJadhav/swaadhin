import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [studentFormData, setStudentFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    mobile: "",
    email: "",
    dateOfBirth: "",
    aadharNumber: "",
    udidNumber: "",
    state: "",
    city: "",
    gender: "",
  });

  const [collegeFormData, setCollegeFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    mobile: "",
    email: "",
    aicteNumber: "",
    strength: "",
    state: "",
    city: "",
  });

  const handleStudentChange = (e) => {
    setStudentFormData({
      ...studentFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCollegeChange = (e) => {
    setCollegeFormData({
      ...collegeFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/auth/signup/student",
        studentFormData
      );
      alert("Student registered successfully!");
      window.location.replace("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCollegeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/auth/signup/college",
        collegeFormData
      );
      alert("College registered successfully!");
      window.location.replace("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <center>
        <h3>Register</h3>
      </center>
      <div className="mainLogin">
        <div>
          <h3>Student Registration</h3>
          <input
            placeholder="Username"
            name="username"
            value={studentFormData.username}
            onChange={handleStudentChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={studentFormData.password}
            onChange={handleStudentChange}
          />
          <input
            placeholder="Full Name"
            name="fullName"
            value={studentFormData.fullName}
            onChange={handleStudentChange}
          />
          <input
            placeholder="Mobile"
            type="mobile"
            name="mobile"
            value={studentFormData.mobile}
            onChange={handleStudentChange}
          />
          <input
            placeholder="Email"
            type="mail"
            name="email"
            value={studentFormData.email}
            onChange={handleStudentChange}
          />
          <input
            placeholder="Date of birth"
            type="date"
            name="dateOfBirth"
            value={studentFormData.dateOfBirth}
            onChange={handleStudentChange}
          />
          <input
            placeholder="Aadhar number"
            type="e.g. 2653 8564 4663"
            name="aadharNumber"
            value={studentFormData.aadharNumber}
            onChange={handleStudentChange}
          />
          <input
            placeholder="UDID number"
            type="e.g. MH234567890123456"
            name="udidNumber"
            value={studentFormData.udidNumber}
            onChange={handleStudentChange}
          />
          <div className="form-group">
            <select
              id="state"
              name="state"
              value={studentFormData.state}
              onChange={handleStudentChange}
            >
              <option value="select">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Delhi">Delhi</option>
              <option value="Puducherry">Puducherry</option>
            </select>
          </div>
          <input
            placeholder="City"
            name="city"
            value={studentFormData.city}
            onChange={handleStudentChange}
          />
          <div>
            <select
              id="disability"
              name="disability"
              value={studentFormData.disability}
              onChange={handleStudentChange}
            >
              <option value="select">Select Disability</option>
              <option value="seeing">Seeing Disability</option>
              <option value="hearing">Hearing Disability</option>
              <option value="speech">Speech Disability</option>
              <option value="mental_retardation">Mental Retardation</option>
              <option value="mental_illness">Mental Illness</option>
              <option value="any_other">Any Other Disability</option>
              <option value="multiple">Multiple Disability</option>
            </select>
          </div>
          <div className="form-group">
            <select
              id="gender"
              name="gender"
              value={studentFormData.gender}
              onChange={handleStudentChange}
            >
              <option value="select">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <br />
          <button className="icon-paper-plane" onClick={handleStudentSubmit}>
            Register
          </button>
        </div>

        <div>
          <h3>College Registration</h3>
          <input
            placeholder="Username"
            name="username"
            value={collegeFormData.username}
            onChange={handleCollegeChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={collegeFormData.password}
            onChange={handleCollegeChange}
          />
          <input
            placeholder="Full Name"
            name="fullName"
            value={collegeFormData.fullName}
            onChange={handleCollegeChange}
          />
          <input
            placeholder="Mobile"
            type="mobile"
            name="mobile"
            value={collegeFormData.mobile}
            onChange={handleCollegeChange}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={collegeFormData.email}
            onChange={handleCollegeChange}
          />
          <input
            placeholder="AICTE Number"
            type="number"
            name="aicteNumber"
            value={collegeFormData.aicteNumber}
            onChange={handleCollegeChange}
          />
          <input
            placeholder="Strength"
            type="number"
            name="strength"
            value={collegeFormData.strength}
            onChange={handleCollegeChange}
          />
          <select
            name="state"
            value={collegeFormData.state}
            onChange={handleCollegeChange}
          >
            <option value="select">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Delhi">Delhi</option>
            <option value="Puducherry">Puducherry</option>
          </select>
          <input
            placeholder="City"
            name="city"
            value={collegeFormData.city}
            onChange={handleCollegeChange}
          />
          <button className="icon-paper-plane" onClick={handleCollegeSubmit}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;

import React from "react";

const Dashboard = () => {
  return (
    <>
      <center>
        <h3>User Dashboard</h3>
      </center>
      <div className="dashboard">
        <div className="sidebar">
          <img
            src="https://nisootech.vercel.app/images/logo.webp"
            style={{ width: "10vw", borderRadius: "50%" }}
          />
          <h5 style={{ color: "royalblue" }}>@nisoojadhav</h5>
          
          <div
            style={{ width: "20vw", height: "1px", background: "#444" }}
          ></div>
          <button className="error">logout</button>
        </div>
        <div className="content">
          <div
            style={{
              background: "#88D9E6",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <b>
              <u>User Details:</u>
            </b>
            <hr />
            <h5>
              First Name: <b>Nishant</b>
            </h5>
            <h5>
              Last Name: <b>Jadhav</b>
            </h5>
            <h5>
              Username: <b>@nisoojadhav</b>
            </h5>
            <h5>
              Mobile: <b>7698525682</b>
            </h5>
            <h5>
              Email: <b>nisoojadhav@gmail.com</b>
            </h5>
            <br />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <button className="primary">Edit Profile</button>
              <button className="error">Delete Profile</button>
            </div>
          </div>
          <br />
          <div
            style={{
              background: "#F28482",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <b>
              <u>Enrolled Courses: 1</u>
            </b>
            <hr />
            <h5>MCA</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

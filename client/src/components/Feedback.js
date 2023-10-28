import React from "react";

const Feedback = () => {
  return (
    <>
      <center>
        <h3>Feedback</h3>
        <br />
        <form
          style={{
            background: "#66666615",
            width: "50vw",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <fieldset>
            <label>Enter Name:</label>
            <label>
              <input type="text" placeholder="your name" />
            </label>
            <br />
            <br />
            <label>Enter Mobile:</label>
            <label>
              <input type="tel" placeholder="123456789" />
            </label>
            <br />
            <br />
            <label>Enter Email:</label>
            <label>
              <input type="email" placeholder="name@gmail.com" />
            </label>
            <br />
            <br />
            <label>Enter Feedback/Complaint:</label>
            <textarea placeholder="feedback/complaint content"></textarea>
          </fieldset>
          <fieldset>
            <input type="file" />
          </fieldset>
            <br />
          <button>Submit ✈️</button>
        </form>
      </center>
    </>
  );
};

export default Feedback;

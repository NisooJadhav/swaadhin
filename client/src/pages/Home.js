import ChartComponent from "../components/ChartComponent";

export default function Home({ isLoggedIn }) {
  return (
    <>
      <h3>Home</h3>
      {isLoggedIn ? (
        <></>
      ) : (
        <h4 style={{ color: "red" }}>Welcome! Please log in.</h4>
      )}
      <center>
        <h4>
          <a
            href="https://thenationaltrust.gov.in/auth/donation.php"
            target="_blank"
          >
            Donate to National Trust for Empowerment of Divyangjan
          </a>
        </h4>
      </center>
      <br />
      <div align="center">
        <h2>Digital Appliances</h2>
      </div>
      <center className="appliances">
        <div>
          <h4>Hearing Aid</h4>
          <img
            src="https://cdn.pixabay.com/photo/2021/11/15/08/20/hearing-aid-6797470_960_720.jpg"
            className="hearing-aid"
          />
        </div>
        <div>
          <h4>Prosthetic Appliances</h4>
          <img
            src="https://cdn.pixabay.com/photo/2020/03/05/16/56/engineer-4904909_1280.jpg"
            className="hearing-aid"
          />
        </div>
        <div>
          <h4>Electric Wheelchair</h4>
          <img
            src="https://cdn.pixabay.com/photo/2015/09/22/18/05/motorized-wheelchair-952190_640.jpg"
            className="hearing-aid"
          />
        </div>
      </center>
    </>
  );
}

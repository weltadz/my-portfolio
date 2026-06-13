import "./Hero.css";
import Profile from "../../assets/profile.JPG";

function Hero() {
  return (
    <div className="main">
      <div className="hero">
        <img src={Profile} alt="profile" id="profile" />
        <h1 id="name">Lemuel Tadeo</h1>
        <h4 id="role">Aspiring Full-Stack Developer</h4>
        <p id="description">
          I build web applications using React, ASP.NET Core, and SQL.
        </p>
        <div id="btnContainer">
          <button className="btn">View Projects</button>
          <button className="btn">Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

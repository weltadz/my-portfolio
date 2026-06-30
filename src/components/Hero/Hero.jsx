import "./Hero.css";
import Profile from "../../assets/profile.JPG";

function Hero() {
  return (
    <div className="heroBody">
      <div className="hero">
        <div id="heroDetails">
          <img src={Profile} alt="profile" id="profile" />
          <h1 id="name">Lemuel Tadeo</h1>
          <h4 id="role">Aspiring Full-Stack Developer</h4>
          <p id="description">
            I build web applications using React, ASP.NET Core, and SQL.
          </p>
        </div>

        <div id="btnContainer">
          <a href="#projects">
            <button className="btn">View Projects</button>
          </a>
          <a href="#contact">
            <button className="btn">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

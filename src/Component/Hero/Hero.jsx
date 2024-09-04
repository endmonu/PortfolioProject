import React from "react";
import "./Hero.css";
import profile_img from "../../assets/MonuSharmap.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll"; 

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Monu Sharma,</span> M.E.R.N Stack Developer based in Haryana
      </h1>
      <p>
        With a passion for building dynamic and responsive web applications, I
        specialize in MongoDB, Express.js, React, and Node.js. I enjoy solving
        complex problems and creating seamless user experiences.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="./MonuFDR.pdf" download="Monu_Sharma_Resume.pdf">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

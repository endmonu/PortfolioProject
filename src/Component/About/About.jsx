import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/MonuSharmap.jpeg";

// Skills array moved outside to keep the structure clean
const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML & CSS",
  "Git",
];

// Skills component to render skills dynamically
// Skills component to render skills dynamically
// Final Skills component structure for clarity
const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="about-skill">
            <p>{skill}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};



// Main About component
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Monu Sharma, a passionate M.E.R.N Stack Developer based in
              Haryana. I specialize in building dynamic and responsive web
              applications using MongoDB, Express.js, React, and Node.js. With a
              knack for solving complex problems, I aim to create seamless user
              experiences and efficient solutions.
            </p>
            <p>
              Over the past few years, I've honed my skills in full-stack
              development, working on various projects that range from small
              business websites to large-scale enterprise applications. My
              expertise lies in creating clean, maintainable code and
              implementing best practices in software development.
            </p>
            <p>
              I am constantly learning and keeping up with the latest trends and
              technologies in the web development world. This continuous
              learning helps me to deliver cutting-edge solutions that meet the
              evolving needs of my clients.
            </p>
            <p>
              If you have a project in mind or just want to chat about
              technology, feel free to reach out. I'm always open to new
              opportunities and collaborations.
            </p>
          </div>
        </div>
      </div>

      {/* Skills component added here */}
      <Skills />

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

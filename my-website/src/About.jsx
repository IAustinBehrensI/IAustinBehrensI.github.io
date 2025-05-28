import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
    return (
      <div className="fullscreen-about">
        <div className="about-me">
          <h1>About Me</h1>
        </div>
        <div className="about-me-block">
          <p>I'm a project-driven and solutions-oriented full-stack developer with strong skills in React, JavaScript, Python, and SQL. My work leans toward full-stack and data-focused development. I hold a Bachelors of science in Computer Information Technology, where I learned Python, SQL, and Java, and expanded into front-end technologies like JavaScript, React, and CSS through self-study.
  
  This portfolio website you're viewing is one of my personal projects—built from the ground up with React and custom CSS. It reflects not only my technical abilities but also my eye for design, responsiveness, and user experience. I used modern practices such as routing with React Router, component reuse, and mobile responsiveness to create a seamless, polished site.
  
  <p>Professionally, I work as a Level 1 & 2 Help Desk Analyst at KWI, where I troubleshoot mobile POS systems, write custom MySQL queries for diagnostics, and collaborate with development teams using tools like JIRA and Confluence. I also leverage Python-based PowerShell scripts to automate mobile device configurations and streamline support processes.</p>
  
 <p> Another key project I built was a regression analysis tool for U.S. highway car accident data. It involved a Visual Basic GUI connected to a live SQL database, allowing users to view, input, and analyze data interactively.</p>
  
  <p>My goal is to grow into a full-stack developer or data engineer role where I can solve real-world problems, building useful systems, and continue to hone and sharpen my skillset.</p></p>
          <p><Link to="/" className= "link-style" >[Back to Home]</Link></p>
        </div>
      </div>
    );
  }
  export default About;

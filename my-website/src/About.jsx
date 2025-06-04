import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();
    return (
      <div className="fullscreen-about">
        <div className="grid-pattern-about"></div>
        <div className="about-me">
          <h1>About Me</h1>
        </div>
        <div className="about-me-block">
          <p>I'm a project-driven and solutions-oriented full-stack developer with strong skills in React, JavaScript, Python, and SQL. I hold a Bachelors of science in Computer Information Technology, where I learned Python, SQL, and Java, and expanded into front-end technologies like JavaScript, React, and CSS through self-study. My degree also taught me much about networks and cyber security skills in which I look forward in expanding on.</p>

  <p>This portfolio website you're viewing is one of my personal projects—built from the ground up with React and custom CSS. It reflects not only my technical abilities but also my eye for design, responsiveness, and user experience. I used modern practices such as routing with React Router, component reuse, and mobile responsiveness to create a seamless, polished site.</p>
  
  <p>Professionally, I work as a Level 1 & 2 Help Desk Analyst at KWI, where I troubleshoot mobile POS systems, write custom MySQL queries for diagnostics, and collaborate with development teams using tools like JIRA and Confluence. I also leverage Python-based PowerShell scripts to automate mobile device configurations and streamline support processes. This has taught me real-world problemsolving skills. Additionally this job has progressed 
    my skills in troubleshooting store networks via configuring the store network, printers, ipads, cash drawers, and pos devices onto store wifi. Simillarly ive had much experince in cyber security practices at this job. Such as working through phising scams and impersonator situations with stores coming to a root cause and prevention methods for the stores in the future. as well as understanding and troubleshooting network security on store networks. </p>
  
  <p> Another key project I built was a regression analysis tool for U.S. highway car accident data. It involved a Visual Basic GUI connected to a live SQL database, allowing users to view, input, and analyze data interactively.</p>
  
  <p>My goal is to progress further in the tech field where I can solve real-world problems, build useful systems, and continue to hone and sharpen my skillset.</p>
          <p><Link to="/" className= "link-style" >[Back to Home]</Link></p>
          <div className="corner-tag"><p>AB.Abt</p></div>
        <p><Link to="/" className="corner-home">⌂</Link></p>
        <div className="corner-back" onClick={() => navigate(-1)}>←</div>
        </div>
      </div>
    );
  }
  export default About;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Project.css';

function Project() {
      const navigate = useNavigate();
  return (
    <div className="fullscreen-project">
      <div className="grid-pattern-project"></div>

      <div className="my-project-block">
        <p>My Projects</p>
      </div>

      <div className="project-img-block">
        <div className="project-left">
        <Link to="/projectdetail">
            <img src="Mywebsite_project_ss.png" alt="Project 1 preview" />
            </Link>
            <p className="Pname">[Clickable Image]</p>
          <p className="Pname">Front-end development: </p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">
            This Portfolio Website is a responsive single-page application builtfrom the ground up with React.js html and css to showcase my professional profile, development projects, resume, and contact information. 
            Designed with a minimalist aesthetic with clean navigation and subtle design elements like a grid background and page-specific corner tags for added aesthetics. 
            The homepage presents links to key sections including an “About Me” page, project page, resume download, and contact info. Each individual project has its own dedicated page, offering detailed descriptions, and technologies used. The resume is a downloadable PDF, and all external links open in new tabs for convenience. 
            This website is fully responsive, accessible, and optimized for both desktop and mobile users. 
            This will be a constant work in progress to add improvements such as a adding future projects, dark mode toggle, animations, and expanded modularity. This project highlights my ability to design, build, and deploy clean, user-friendly interfaces with attention to detail and technical depth.</p>
        </div>
      </div>

      <div className="project-img-block">
        <div className="project-left">
        <Link to="/projectdetail2">
            <img src="Ingame_narrarator_py.png" alt="Project 2 preview" />
            </Link>
            <p className="Pname">[Clickable Image]</p>
          <p className="Pname">Back-end development:</p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">Built a real-time AI assistant for users who are speach iumpaired or do not have acces to a microphone that monitors visual events in a live environment using Python, OpenCV, and Tesseract OCR to detect screen patterns and extract textual information. When a trigger event
            is detected, the system captures specific screen regions, processes the text using GPT-3.5 to generate natural language callouts, and vocalizes the output using ElevenLabs text-to-speech 
            API routed through a virtual audio device. Designed with asynchronous execution for real-time responsiveness, this project demonstrates expertise in computer vision, natural language processing, and audio synthesis integration.
            Tech stack: Python, OpenCV, PyAutoGUI, pytesseract, asyncio, OpenAI API, ElevenLabs API, pygame, virtual audio routing.</p>
        </div>
      </div>

      <div className="project-img-block">
        <div className="project-left">
        <Link to="/projectdetail3">
            <img src="SQL_SS.png" alt="Project 3 preview" />
            </Link>
            <p className="Pname">[Clickable Image]</p>
          <p className="Pname">Back-End/Data development:</p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">This Visual Basic/SQL application performs regression analysis using data from Real world data centers on amount of interstates, maximum speed in each state and motorvehicle deaths 
            that gets stored in a SQL Server database. It calculates regression coefficients a, b1, b2 based on inputs x1 and x2, 
            and stores them in a separate table. The program consists of three forms: one for loading data and computing coefficients, another for making predictions using the stored coefficients, and a third for inputting 
            new data into the dataset. A stored procedure is used to save the regression results to the database, enabling accurate prediction of new values based on the entire data set.
            The goal of this is to be able to manipulate/insert and calculate data based on previous results to create accurate predictions</p>
        </div>
      </div>

      <div className="project-block">
        <p>More projects to be added</p>
        <p> Additional projects on my Github</p>
        <div className="corner-tag"><p>AB.Prjct</p></div>
        <p><Link to="/" className="corner-home">⌂</Link></p>
        <div className="corner-back" onClick={() => navigate(-1)}>←</div>
        <p><Link to="/" className="link-style">[Back to Home]</Link></p>
      </div>
    </div>
  );
}

export default Project;

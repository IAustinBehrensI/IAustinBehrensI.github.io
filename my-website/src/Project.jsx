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
            The homepage presents links to key sections including an “About Me” page, project page, resume download, and contact info. Each individual project has its own dedicated page, offering detailed descriptions, and technologies used. The resume is a downloadable PDF, and all external links (e.g., LinkedIn, GitHub) open in new tabs for convenience. 
            This website is fully responsive, accessible, and optimized for both desktop and mobile users. 
            This will be a constant work in progress to add improvements such as a adding future projects, dark mode toggle, animations, and expanded modularity. This project highlights my ability to design, build, and deploy clean, user-friendly interfaces with attention to detail and technical depth.</p>
        </div>
      </div>

      <div className="project-img-block">
        <div className="project-left">
        <Link to="/projectdetail2">
            <img src="Placeholder.jpg" alt="Project 1 preview" />
            </Link>
          <p className="Pname">Project 2</p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">Description 2</p>
        </div>
      </div>

      <div className="project-img-block">
        <div className="project-left">
        <Link to="/projectdetail3">
            <img src="SQL_SS.png" alt="Project 1 preview" />
            </Link>
          <p className="Pname">Data development</p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">This Visual Basic/SQL application performs regression analysis using data from Real world data centers on amount of interstates, maximum speed in each state and motorvehicle deaths 
            that gets stored in a SQL Server database. It calculates regression coefficients a, b1, b2 based on inputs x1 and x2, 
            and stores them in a separate table. The program consists of three forms: one for loading data and computing coefficients, another for making predictions using the stored coefficients, and a third for inputting 
            new data into the dataset. A stored procedure is used to save the regression results to the database, enabling accurate prediction of new values based on the entire data set.
            The goal of this is to be able to manipulate / insert and calculate data based on previous results to create accurate predictions</p>
        </div>
      </div>

      <div className="project-block">
        <p>This is the Project page. it is a Work in progress</p>
        <div className="corner-tag"><p>AB.Prjct</p></div>
        <p><Link to="/" className="corner-home">⌂</Link></p>
        <div className="corner-back" onClick={() => navigate(-1)}>←</div>
        <p><Link to="/" className="link-style">[Back to Home]</Link></p>
      </div>
    </div>
  );
}

export default Project;

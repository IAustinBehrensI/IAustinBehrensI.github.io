import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function Project() {
  return (
    <div className="fullscreen-project">
      <div className="grid-pattern-project"></div>

      <div className="my-project-block">
        <p>My Projects</p>
      </div>

      <div className="project-img-block">
        <div className="project-left">
          <a target="_blank" href="Placeholder.jpg" rel="noopener noreferrer">
            <img src="Placeholder.jpg" alt="Project 1 preview" />
          </a>
          <p className="Pname">Project 1</p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">Description 1</p>
        </div>
      </div>

      <div className="project-img-block">
        <div className="project-left">
          <a target="_blank" href="Placeholder.jpg" rel="noopener noreferrer">
            <img src="Placeholder.jpg" alt="Project 2 preview" />
          </a>
          <p className="Pname">Project 2</p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">Description 2</p>
        </div>
      </div>

      <div className="project-img-block">
        <div className="project-left">
          <a target="_blank" href="Placeholder.jpg" rel="noopener noreferrer">
            <img src="Placeholder.jpg" alt="Project 3 preview" />
          </a>
          <p className="Pname">Project 3</p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">Description 3</p>
        </div>
      </div>

      <div className="project-block">
        <p>This is the Project page. it is a Work in progress</p>
        <div className="corner-tag"><p>AB.Prjct</p></div>
        <p><Link to="/" className="link-style">[Back to Home]</Link></p>
      </div>
    </div>
  );
}

export default Project;

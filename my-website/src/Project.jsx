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
            <img src="Placeholder.jpg" alt="Project 1 preview" />
            </Link>
          <p className="Pname">Project 1</p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">Description 1</p>
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
            <img src="Placeholder.jpg" alt="Project 1 preview" />
            </Link>
          <p className="Pname">Project 3</p>
        </div>
        <div className="project-description-block">
          <p className="Pdesc">Description 3</p>
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

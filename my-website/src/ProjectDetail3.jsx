import React from 'react';
import {Link } from 'react-router-dom';
import './ProjectDetail.css';

function ProjectDetail3() {

  return (
    <div className="fullscreen-project">
      <div className="grid-pattern-project"></div>
      <div className="my-projectDetail-block">
      </div>

      <div className="projectDetail-img-block">
        <img src="Placeholder.jpg" alt= "Screenshot 1 of Project" />
        <p className="PDdesc">Screenshot 1</p>
      </div>
      <div className="projectDetail-img-block">
        <img src="Placeholder.jpg" alt= "Screenshot 2 of Project" />
        <p className="PDdesc">Screenshot 2</p>
      </div>
      <div className="projectDetail-img-block">
        <img src="Placeholder.jpg" alt= "Screenshot 2 of Project" />
        <p className="PDdesc">Screenshot 3</p>
      </div>
      <div className="corner-tag"><p>AB.Prjct.3</p></div>
      <p><Link to="/" className="corner-home">⌂</Link></p>
      <div className="projectDetail-block">
        <p>More about Project coming soon!</p>
        <p><Link to="/project" className="link-style">[Back to Projects]</Link></p>
        <p><Link to="/" className="link-style">[Back to Home]</Link></p>
      </div>
    </div>
  );
}


export default ProjectDetail3;
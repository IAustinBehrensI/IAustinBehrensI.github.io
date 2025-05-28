import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function Project(){
    return(
      <div className="fullscreen">
        <div className="center-name">
          <h1>My Projects</h1>
        </div>
        <div className="about-block">
          <p>This is Project page. Work in progress</p>
          <p><Link to="/" className= "link-style" >[Back to Home ]</Link></p>
        </div>
      </div>
    );
}
export default Project;
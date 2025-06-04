import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './ProjectDetail.css';

function ProjectDetail() {
    const navigate = useNavigate();
    return (
      <div className="fullscreen-project">
        <div className="grid-pattern-project"></div>
        <div className="my-projectDetail-block">
        </div>
  
        <div className="projectDetail-img-block">
          <img src="AppJsx_ss.png" alt= "Screenshot 1 of Project" />
          <p className="PDdesc">This is the App.jsx file. Built in react it serves as the main entry point for routing. It uses react-router-dom to define and manage navigation between different components, including the Home page, About page, Projects page, and individual project detail pages. 
            The Home component acts as a landing page that introduces myself and provides links to key sections such as About, Projects, LinkedIn, GitHub, Resume, and contact information. On the left you can see the structure of this project via the folders. Each react file has a css file to format the page. 
            The remainder of the files assist on getting this page hosted globally to git hub pages</p>
        </div>
        <div className="projectDetail-img-block">
          <img src="IndexCss.png" alt= "Screenshot 2 of Project" />
          <p className="PDdesc">This CSS file styles the home page of the website. I used Google Fonts Geo and Orbitron for a modern and distinctive typographic look. ive included a fullscreen grid-patterned banner, 
            structured sections for my name, title, about link, and external links. This has been optimized forlarge screens and can reflow into a mobile-friendly with vertical layout for smaller screens using media queries. Consistent design is maintained through font sizing, spacing, and color consistency,
             while interactive elements like links are styled with hover and pointer behaviors.</p>
        </div>
        <div className="projectDetail-img-block">
          <img src="Indexhtml.png" alt= "Screenshot 2 of Project" />
          <p className="PDdesc">The index.html file serves as the root structure for a React-based portfolio application. It includes responsive meta tags for mobile optimization, sets the page title, and links a custom favicon.
             The div id="root" element provides the mounting point for the React DOM rendered through main.jsx.</p>
        </div>
        <div className="corner-tag"><p>AB.Prjct.1</p></div>
        <p><Link to="/" className="corner-home">⌂</Link></p>
        <div className="corner-back" onClick={() => navigate(-1)}>←</div>
        <div className="projectDetail-block">
          <p>The goal of this project was to challenge myself by building a cohesive and interactive web portfolio that showcases my skills in real time. It served as both a personal learning experience and a professional presentation tool, allowing me to push my development abilities while creating an engaging way for users to explore my work.</p>
          <p><Link to="/project" className="link-style">[Back to Projects]</Link></p>
          <p><Link to="/" className="link-style">[Back to Home]</Link></p>
        </div>
      </div>
    ); 
}
export default ProjectDetail;

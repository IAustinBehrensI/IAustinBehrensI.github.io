import { Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
import About from './About';
import Project from './Project';

function Home() {
  return (
    <div className="fullscreen">
      <div className="grid-pattern"></div>
      <div className="center-name">
        <h1>Austin Behrens</h1>
      </div>
      <div className="center-Welcome">
        <h2>Portfolio</h2>
      </div>
        <div className="title-block">
          <p>Software & data developer</p>
          <p>Versatile</p>
          <p>Project-driven</p>
          <p>Solutions-oriented</p>
        </div>

        <div className="about-block">
          <p><Link to = "/about" className="link-style">[ ] About me</Link></p>
        </div>

          <div className="link-block">
          <div><Link to = "/project" className= "linkPP">[ ]Projects Page</Link></div>
          <p>Links</p>
          <div className="linkI"><a href = "https://www.linkedin.com/in/austin-behrens-67697b205/" target = "_blank" rel = "noopener noreferrer">[ ] LinkedIn </a></div>
          <div className="linkG"><a href = "https://github.com/IAustinBehrensI" target = "_blank" rel = "noopener noreferrer" >[ ] GitHub</a></div>
          <div className="linkR"><a href = "/Austin-Behrens-Resume.pdf" download = "Austin-Behrens-Resume.pdf" >[ ] Download Resume</a></div>
          <p>Contact Me</p>
          <div className = "linkE"><a href = "mailto:Behrens.Austin16@gmail.com" target = "_blank" rel = "noopener noreferrer">[ ]Behrens.austin16@gmail.com</a></div> 
          <div className = "linkP"><a href = "tel:5168803197" target = "_blank" rel = "noopener noreferrer">[ ]516-880-3197</a></div>
          <div className="corner-tag"><p>AB.Prtf</p></div>
        </div></div>
  );
}
  function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}export default App;




/*
ctrl c in terminal to end

1. Run your dev server to work locally 
cd my-website
npm run dev

#Once ready to test to pubic web page

# 2. Commit & push your code to GitHub
git add .
git commit -m "Describe your changes"
git push origin main

# 3. Deploy the latest build to GitHub Pages
npm run deploy

link to website https://IAustinBehrensI.github.io/

*/

import { Routes, Route, Link } from 'react-router-dom';
import './App.css'; 

function Home() {
  return (
    <div className="fullscreen">
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
          <div><Link to = "/project" className= "linkP">[ ]Projects Page</Link></div>
          <p>Links</p>
          <div className="linkI">[ ] LinkedIn</div>
          <div className="linkG">[ ] GitHub</div>
          <div className="linkR">[ ] Resume</div>
          <p>Contact Me</p>
          <div className = "linkE">[ ]Behrens.austin16@gmail.com</div> 
          <div className = "linkP">[ ]+1 516-880-3197</div>
        </div></div>
  );
}

function About() {
  return (
    <div className="fullscreen">
      <div className="center-name">
        <h1>About Me</h1>
      </div>
      <div className="about-block">
        <p>This is the About page. You can write more here later.</p>
        <p><Link to="/" className= "link-style" >[ ← Back to Home ]</Link></p>
      </div>
    </div>
  );
}

function Project(){
  return(
    <div className="fullscreen">
      <div className="center-name">
        <h1>My Projects</h1>
      </div>
      <div className="about-block">
        <p>This is Project page. Work in progress</p>
        <p><Link to="/" className= "link-style" >[ ← Back to Home ]</Link></p>
      </div>
    </div>
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
}


export default App;




/*
ctrl c in terminal to end

1. Run your dev server to work locally 
cd my-website
npm run dev

#Once ready to test to pubic web page

# 2. Commit & push your code to GitHub
git add .cd
git commit -m "Describe your changes"
git push origin main

# 3. Deploy the latest build to GitHub Pages
npm run deploy

link to website https://IAustinBehrensI.github.io/

*/

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

function ProjectDetail2() {
  const navigate = useNavigate();
  return (
    <div className="fullscreen-project">
      <div className="grid-pattern-project"></div>
      <div className="my-projectDetail-block">
      </div>

      <div className="projectDetail-img-block">
        <img src="Ingame_narrarator_py.png"   alt="Screenshot 1"
        style={{ cursor: "zoom-in", maxWidth: "100%", height: "auto" }}
        onClick={(e) => {
        if (e.target.requestFullscreen) {
        e.target.requestFullscreen();
        }
         }}
        />
        <p className="PDdesc">This Python script is an AI-powered teammate assistant for impaired Gamers, designed to detect when a player dies in-game and automatically generate and speak a callout for them. 
          It uses screen capturing and OpenCV to detect the death screen by matching it against a preloaded death screen template that can be taken from any game. When a death is detected, the script captures two specific areas of the screen—center, 
          top-right and processes them using image enhancement techniques these can be adjusted for capturing other information. These cropped regions are then passed to Tesseract OCR (pytesseract) to extract textual information such as the
          death location, and other HUD details such as what weapon was used and how much damage was dealt. The extracted text is cleaned and sent as a prompt to OpenAI's GPT model, which generates a quick descriptive voice callout. This is especially useful for players with disabilities or communication impairments. 
          The generated callout is then sent to the ElevenLabs text-to-speech API, and the resulting audio is played through a virtual audio device (VB-Audio Cable) using Pygame, effectively allowing the game to broadcast the voice line to other players. 
          The entire process runs asynchronously in a continuous loop, providing real-time, automated, accessible communication during gameplay.</p>
      </div>
      <div className="projectDetail-img-block">
        <img src="Death_terminal_ss.png" alt= "Screenshot 2 of Project" />
        <p className="PDdesc">This is an example of the terminal when a player death is detected (as ssen below) it will constantly scan your screen and when the code detects a match to the death screen template it will then run the OCR which
          then produces texts from the screenshots taken of the location and weapons used. This is the least intrusive way to do this as to avoid the games anticheating from banning the player it minimizes the amount we would need to make automated inputs
          or view the games logs/code. The text will then get read aloud with a human like voice that can be customized via eleven labs. a more robotic and simple voice can be used in place of this if need be.
        </p>
      </div>
      <div className="projectDetail-img-block">
        <img src="Crop_example_cs.png" alt= "Screenshot 2 of Project" />
        <p className="PDdesc">Here we see what the ocr is extracting. At the location of the requested texts it will capture them then term then into readable text for the script to use. There is a text cleaning processe
          that the cropped screenshots go through for extra readablilty such as grayscaling and shrpening the image.
        </p>
      </div>
      <div className="corner-tag"><p>AB.Prjct.2</p></div>
      <p><Link to="/" className="corner-home">⌂</Link></p>
      <div className="corner-back" onClick={() => navigate(-1)}>←</div>
      <div className="projectDetail-block">
        <p>This is more of a personal project However, the inclsuion matters in my portfolio as it showcases individual important skills sets such as screen detection, automated screenshots and cropping, APIS, and sound/voice implementation</p>
        <p><Link to="/project" className="link-style">[Back to Projects]</Link></p>
        <p><Link to="/" className="link-style">[Back to Home]</Link></p>
      </div>
    </div>
  );
}


export default ProjectDetail2;
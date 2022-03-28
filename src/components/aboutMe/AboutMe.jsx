import React from 'react';
import './aboutMe.scss';
import helloEmoji from '../../images/hello-emoji.png';

function AboutMe() {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="left">
        <div className="container">
          <h1>About Me</h1>
          <div className="card">
            <div className="center">
                <p>
                  My name is <span>Humberto</span>, I'm 27 years old, and I'm studying Web Development with a focus on becoming a <span>Full-Stack Developer</span> at Trybe.
                </p>
                <p>
                  I have a degree in Veterinary Medicine, but I decided to make a career transition because I see in programming the chance to automate tasks, leading people to focus on what they are really good at.
                </p>
                <p>
                  Right now I'm looking for opportunities to start my career as a developer, and acquire even more knowledge in the technology area.
                </p>
              </div>
            </div>
        </div>
      </div>
      <div className="right">
      <div className="imgContainer">
          <img src={ helloEmoji } alt="emoji figure"></img>
        </div>
      </div>
    </div>
  )
};

export default AboutMe;

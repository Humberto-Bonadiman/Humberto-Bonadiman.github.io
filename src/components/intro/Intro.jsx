import React, { useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';
import emoji from '../../images/emoji.png';
import down from '../../images/down.png'

function Intro() {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current,
      {
        showCursor: true,
        backDelay: 2000,
        backSpeed: 50,
        strings: ['Web Developer']
      })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={ emoji } alt="emoji figure"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Humberto Bonadiman</h1>
          <h3>Full Stack <span ref={textRef}></span></h3>
        </div>
        <a href="#aboutMe">
          <img src={ down } alt="down arrow"/>
        </a>
      </div>
    </div>
  )
};

export default Intro;

import React from 'react';
import './topbar.scss';
// import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">bonadiman.</a>
          <div className="itemContainer">
            <a
              target='_blank'
              rel="noreferrer" 
              href="https://github.com/Humberto-Bonadiman"
              className="logos"
            >
              <GitHubIcon className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              target='_blank'
              rel="noreferrer" 
              href="https://www.linkedin.com/in/humberto-bonadiman"
              className="logos"
            >
              <LinkedInIcon className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>humberto_bonadiman@hotmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Topbar;

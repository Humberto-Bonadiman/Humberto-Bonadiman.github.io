import React from 'react';
import './menu.scss';

function Menu({ menuOpen, setMenuOpen }) {
  return (
  <div className={"menu "+(menuOpen && "active")}>
    <ul>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#intro">Home</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#aboutMe">About Me</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  </div>
  );
};

export default Menu;

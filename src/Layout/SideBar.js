import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="src\images\headshot.jpg" alt="" />
      </Link>
      <header>
        <h2>Catherine Lee</h2>
        <p><a href="mailto:itscatherinehlee@gmail.com">itscatherinehlee@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Catherine Lee. I like building things.
        I am a <a href="https://www.gatech.edu/">GT</a> graduate.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
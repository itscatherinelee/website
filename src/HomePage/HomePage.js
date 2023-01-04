import React from 'react'
import { Link } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

const HomePage = () => (
  <MainLayout>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p> 
        Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '} <Link to="/resume">resume</Link>.
      </p>
    </article>
  </MainLayout>
);

export default HomePage;
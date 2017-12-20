import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul >
    <Link to="/" alt="home">
      <li>Home</li>
    </Link>
    <Link to="/map">
      <li>Map</li>
    </Link>
  </ul>
);

export default Nav;


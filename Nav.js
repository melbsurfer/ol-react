import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Nav = () => (
  <NavWrapper>
    <ul>
      <Link to="/" alt="home">
        <li>Home</li>
      </Link>
      <Link to="/map">
        <li>Map</li>
      </Link>
    </ul>
  </NavWrapper>
);

export default Nav;

const NavWrapper = styled.div`

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
  border-right:1px solid #bbb;
}

li:last-child {
  border-right: none;
}

li {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: #222;
}

li:hover:not(.active) {
  background-color: #333;
}

.active {
  background-color: #4CAF50;
}
`;


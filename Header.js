import React from 'react';
import Nav from './Nav';

import styled from 'styled-components';

const Header = () => (
  <HeaderWrapper>
    <HeaderText>
      <h1>OMAR Image Catalog</h1>
    </HeaderText>
    <Nav />
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.div`
  background-color: #333;
`;

const HeaderText = styled.div`
  color: white;
  text-align: center;
`;

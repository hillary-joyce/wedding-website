import React from 'react';
import styled from '@emotion/styled';
import { Link } from "gatsby";

const Main = styled.div({
  display: 'flex',
  justifyContent: 'left',
})

const PageLinks = styled.div({
  flex: '1 1 35%',
  padding: '3rem 0 ',
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '2rem',
});

const Spacer = styled.div({
  flex: '1 1 65%',
})

const Navbar = () => (
  <Main>
    <PageLinks className='navbar-links'>
      <Link to="/">HOME</Link>
      <Link to="/travel/">TRAVEL</Link>
      <Link to="/activities/">ACTIVITIES</Link>
      <Link to="/faq/">FAQ</Link>
      <Link to="/registry/">REGISTRY</Link>
    </PageLinks>
    <Spacer />
  </Main>
)

export default Navbar;
import React from 'react';
import styled from '@emotion/styled'

const Main = styled.div({
  textAlign: 'center',
  padding: '1rem',
  fontSize: '2rem',
})

export const GridCell = props => (
  <Main>
    {props.children}
  </Main>
);
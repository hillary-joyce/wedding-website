import React from 'react';
import { SmallImage } from '../components/smallimage';
import styled from '@emotion/styled';

const Main = styled.div({
  width: '12rem',
  height: '12rem',
  borderRadius: '100%',
  overflow: 'hidden',
  margin: '2rem auto',
})

export const ImageContainer = ({name}) => (
  <Main>
    <SmallImage name={name}/>
  </Main>
);
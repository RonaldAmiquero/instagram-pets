import React from 'react';
import styled from 'styled-components';
import { spin } from '../../styles/animation';

const SpinnerBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;
const LoadingIcon = styled.div`
  display: flex;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  animation-name: spin;
  animation-duration: 2s;
  transition-timing-function: linear;
  animation-iteration-count: infinite;
  margin: auto;
  ${spin({ time: '2s' })};
`;
const Text = styled.span``;

export const Spinner = () => {
  return (
    <SpinnerBox className="spinner-box">
      <LoadingIcon className="loading-icon" />
      <Text>Loading...</Text>
    </SpinnerBox>
  );
};

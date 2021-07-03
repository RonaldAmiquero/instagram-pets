import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`;

const spinKeyframes = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

export const spin = ({ time = '1s', type = 'linear' } = {}) =>
  css`
    animation: ${time} ${spinKeyframes} ${type} infinite;
  `;

import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
       {
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        position: fixed;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: -20px;
        max-width: 400px;
        padding: 5px;
        transform: scale(0.5);
        z-index: 1;
      }
      ${fadeIn({ time: '1s' })}
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;

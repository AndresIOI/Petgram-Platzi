import Styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const List = Styled.ul`
 display: flex;
 overflow: scroll;
 width: 100%;
 padding: 0px;
 ${props => props.fixed && css`  
 
  background: #fff;
  border-radius: 60px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 400px;
  padding: 5px;
  position: fixed;
  top: -1px;
  transform: scale(.8);
  z-index: 1;
  `}
`;

export const Item = Styled.li`
 padding: 0px 8px;
 ${fadeIn()}

`;
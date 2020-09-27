import Styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Link = Styled(LinkRouter)`
 display: flex;
 flex-direction: column;
 text-align: center;
 text-decoration: none;
 width: 75px; 
`;

export const Image = Styled.img`
 border: 1px solid #ddd;
 box-shadow: 0px 10px 14px rgba(0,0,0,.2);
 border-radius: 50%;
 height: 75px;
 width: 75px;
 overflow: hidden;
 object-fit: cover;
`;
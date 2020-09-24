import Styled from 'styled-components';
import { fadeIn } from '../../styles/animation';


export const Article = Styled.article`
 min-height: 320px;
`;

export const ImgWrapper = Styled.div`
 position: relative;
 display: block;
 overflow: hidden;
 height: 0;
 width: 100%;
 padding: 56.25% 0 0 0;
 margin-top: 35px;
 border-radius: 10px;
`;

export const Img = Styled.img`
 box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
 height: 100%;
 object-fit: cover;
 position: absolute;
 top: 0;
 width: 100%;
 ${fadeIn()}

`;


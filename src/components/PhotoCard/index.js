import React from 'react';
import { GrFavorite } from "react-icons/gr";
import { ImgWrapper, Img, Button } from './styles';
const DEFAULT_IMG = 'https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMG}) => {
 return(
  <article>
   <ImgWrapper>
    <Img src={src} />
   </ImgWrapper>
   <Button>
    <GrFavorite size='38px'/>
    {likes} likes!
   </Button>
  </article>
 );
}
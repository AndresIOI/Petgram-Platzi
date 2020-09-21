import React from 'react';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { ImgWrapper, Img, Button, Article } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMG}) => {

 const key = `like-${id}`;
 const [liked, setLiked] = useLocalStorage(key, false);
 const [show, element] = useNearScreen();



 const Icon = liked == true ? MdFavorite : MdFavoriteBorder;


 return(
  <Article ref={element}>
   {
    show &&
    <>
     <ImgWrapper>
      <Img src={src} />
     </ImgWrapper>
     <Button onClick={() => setLiked(!liked)}>
      <Icon size='38px'/>
      {likes} likes!
     </Button> 
   </>
   }
  </Article>
 );
}
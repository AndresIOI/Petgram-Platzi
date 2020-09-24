import React from 'react';
import { ImgWrapper, Img, Article } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { useUpdateLikePhoto } from '../../hooks/useUpdateLikePhoto';
import { LikeButton } from '../LikeButton';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMG}) => {

 const key = `like-${id}`;
 const [liked, setLiked] = useLocalStorage(key, false);
 const [show, element] = useNearScreen();
 const updateLike = useUpdateLikePhoto({id});


 const handledLikeClick = () => {
  setLiked(!liked);
  !liked && updateLike();
 }

 return(
  <Article ref={element}>
   {
    show &&
    <>
    <a href={`/?detail=${id}`}>
     <ImgWrapper>
      <Img src={src} />
     </ImgWrapper>
    </a>
    <LikeButton likes={likes} liked={liked} onClick={handledLikeClick}/>
   </>
   }
  </Article>
 );
}
import React from 'react';
import { Button } from './styles';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";


export const LikeButton = ( {likes, onClick, liked} ) => {
  
  const Icon = liked == true ? MdFavorite : MdFavoriteBorder;
  
  return (
    <Button onClick={ onClick }>
      <Icon size='38px'/>
      {likes} likes!
    </Button>   
  );
}
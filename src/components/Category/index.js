import React from 'react';
import { Link, Image } from './styles';

const DEFAULT_IMG = 'https://actualidadsanitaria.com/wp-content/uploads/2020/03/retrato-primer-plano-lindo-perro_23-2148345982.jpg';

export const Category = ({ cover = DEFAULT_IMG, path, emoji = '?'}) => {
 return(
  <Link to={path}>
   <Image src={cover} alt=""/>
   {emoji}
  </Link>
 );
}
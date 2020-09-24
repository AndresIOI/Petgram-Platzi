import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyles } from './styles/GlobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { PhotoCardDetails } from './components/PhotoCardDetails';

export const App = () => {
 const urlParams = new window.URLSearchParams(window.location.search);
 const detailId = urlParams.get('detail');
 return(
  <>
   <GlobalStyles />
   <Logo />
   {
    detailId
    ?
    <PhotoCardDetails id={ detailId }/>
    :
    <>
     <ListOfCategories />
     <ListOfPhotoCards />
    </>
   }

  </>
 );
}
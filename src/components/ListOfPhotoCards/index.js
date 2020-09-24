import React from 'react';
import { useGetPhotos } from '../../hooks/useGetPhotos';
import { PhotoCard } from '../PhotoCard';
import { List } from './styles';



export const ListOfPhotoCards = ( { categoryId } ) => {

 const {data, loading, error} = useGetPhotos(categoryId);

 if(loading) return "Cargando...";
 if(error) return "Error en la carga..."

 return(
  <List>
   {data.photos.map(photo => {
    return(
     <PhotoCard key={photo.id} {...photo}/>
    );
   })}
  </List>

 );
}
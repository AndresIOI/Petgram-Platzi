import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

export const ListOfCategories = () => {

 const [categories, setCategories] = useState([]);
 const [showFixed, setShowFixed] = useState(false);

 useEffect( () => {
  window.fetch('https://petgram-server-4r4xqom0r.vercel.app/categories')
   .then(response => response.json())
   .then(categories => {
    setCategories(categories);
   })
   .catch(error => console.log(error));
 }, []);

 useEffect(()=> {
   const onScroll = e => {
    const newShowFixed =  window.scrollY > 180;
    showFixed !== newShowFixed && setShowFixed(newShowFixed);
   }

   document.addEventListener('scroll', onScroll);

   return () => document.removeEventListener('scroll', onScroll);

 },[showFixed]);

 const renderList = (fixed) => (
  <List className={fixed ? 'fixed' : ''}>
 {
  categories.map(category => {
   return(
    <Item key={category.id}>
     <Category  {...category}/>
    </Item>
   );
  })
 }
</List>
 );

 return(
   <>
    { renderList() }
    { showFixed && renderList(true) }
  </>
 );
}
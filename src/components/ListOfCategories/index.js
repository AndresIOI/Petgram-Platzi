import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    setLoading(true);
    window.fetch('https://petgram-server-4r4xqom0r.vercel.app/categories')
     .then(response => response.json())
     .then(categories => {
      setCategories(categories);
      setLoading(false);
     })
     .catch(error => console.log(error));
   }, []);

   return { categories, loading }
}

export const ListOfCategories = () => {



 const { categories, loading } = useCategoriesData();

 const [showFixed, setShowFixed] = useState(false);



 useEffect(()=> {
   const onScroll = e => {
    const newShowFixed =  window.scrollY > 180;
    showFixed !== newShowFixed && setShowFixed(newShowFixed);
   }

   document.addEventListener('scroll', onScroll);

   return () => document.removeEventListener('scroll', onScroll);

 },[showFixed]);

 const renderList = (fixed) => (
  <List fixed={fixed}>
 {
  categories.map(category => {
   return(
    <Item key={category.id}>
     <Category  {...category} path={`/pet/${category.id}`} />
    </Item>
   );
  })
 }
</List>
 );

 if(loading) {
   return "Cargando...";
 }

 return(
   <>
    { renderList() }
    { showFixed && renderList(true) }
  </>
 );
}
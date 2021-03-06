import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export function useGetPhotos(categoryId) {
 const getPhotos = gql`
  query getPhotos($categoryId: ID) {
  photos (categoryId: $categoryId){
   id
   categoryId
   src
   likes
   userId
   liked
  }
 }
`;

 const { data, loading, error } = useQuery(getPhotos, {
  variables: {
   categoryId
  }
 });

 return { data, loading, error };

}
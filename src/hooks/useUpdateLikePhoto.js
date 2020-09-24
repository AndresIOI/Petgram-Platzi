import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`;

export const useUpdateLikePhoto = ({ id }) => {
 const [updateLike] = useMutation(LIKE_PHOTO, { 
  variables: {
   input: { id }
  }
 });
 return updateLike;
}

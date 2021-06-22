import React from 'react';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { useQuery, gql } from '@apollo/client';
import { Loading } from '../components/Loading';

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Loading />;
  }
  return <ListOfPhotoCards data={data} />;
};

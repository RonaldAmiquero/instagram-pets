import React from 'react';

import { PhotoCard } from '../components/PhotoCard';

import { useQuery, gql } from '@apollo/client';
import { Loading } from '../components/Loading';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id,
    },
  });
  if (error) {
    return <h2>Not Found</h2>;
  }
  if (loading) {
    return <Loading />;
  }

  return <PhotoCard {...data.photo} />;
};

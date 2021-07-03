import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Loading } from '../components/Loading';
import { ListOfFavs } from '../components/ListOfFavs';

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const FavsWithQuery = () => {
  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only',
  });
  if (loading) return <Loading />;
  if (error) return <h1>Error!</h1>;
  const { favs } = data;
  return <ListOfFavs favs={favs} />;
};

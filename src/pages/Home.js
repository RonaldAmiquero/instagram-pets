import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery';
import { Helmet } from 'react-helmet';
const HomePage = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - tu app de fotos de mascotas</title>
        <meta
          name="description"
          content="Con Petgram puedes encontrar fotos de animales domesticos muy bonitos"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});

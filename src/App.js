import React from 'react';
import { ListOfCategory } from './components/ListOfCategory';
import { GlobalStyle } from './styles/GlobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  console.log(detailId);
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <h1>
          <ListOfCategory />
          <ListOfPhotoCards categoryId={2} />
        </h1>
      )}
    </>
  );
};

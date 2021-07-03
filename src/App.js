import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';
import { Home } from './pages/Home';
import { Logo } from './components/Logo';
/* import { Detail } from './pages/Detail'; */
import { NavBar } from './components/NavBar';
/* import { Favs } from './pages/Favs'; */
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NotFound } from './pages/NotFound';
import { Context } from './Context';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';
import { Spinner } from './components/Spinner';
const Favs = React.lazy(() => import('./pages/Favs'));
const Detail = React.lazy(() => import('./pages/Detail'));

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};

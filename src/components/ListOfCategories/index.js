import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { Loader } from '../Loader';
import { List, Item } from './styles';
import { useCategoriesData } from '../../hooks/useCategoriesData';
/* import { categories as mockCategories } from '../../../api/db.json'; */
// mock - imitador de categories
const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5, 6, 7].map((id) => (
            <Item key={id}>
              <Loader />
            </Item>
          ))
        : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);

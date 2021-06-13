import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { Loader } from '../Loadingtwo';
import { List, Item } from './styles';
import { useCategoriesData } from '../../hooks/useCategoriesData';
/* import { categories as mockCategories } from '../../../api/db.json'; */
// mock - imitador de categories

export const ListOfCategory = () => {
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
              <Loader size={70} />
            </Item>
          ))
        : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} />
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

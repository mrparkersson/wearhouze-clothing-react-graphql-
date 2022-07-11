import { createContext, useState } from 'react';
import { gql } from '@apollo/client';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  const COLLECTIONS = gql`
    query {
      collections {
        id
        name
        title
      }
    }
  `;

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

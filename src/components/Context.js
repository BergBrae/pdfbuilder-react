// context.js
import React, { createContext, useState } from 'react';
import initialdata from '../data/extractions.pdfbuilder.json';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialdata);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};

import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Context } from './components/Context';
import initialdata from './data/extractions.pdfbuilder.json';

function App() {
  const [data, setData] = useState(initialdata);


  return (
    <div className="App">
      <Context.Provider value={{data, setData}}>
        <h1>PDFBuilder</h1>
      </Context.Provider>
    </div>
  );
}

export default App;

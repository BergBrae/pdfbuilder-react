import logo from './logo.svg';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css';
import Context from './components/Context';
import initialdata from './data/extractions.pdfbuilder.json';
import Pdf from './components/Pdf';
import Pdfs from './components/Pdfs';

function App() {
  const [data, setData] = useState(initialdata);


  return (
    <div className="App">
      <Context.Provider value={[data, setData]}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Pdfs />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;

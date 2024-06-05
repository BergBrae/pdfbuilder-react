import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css';
import { DataProvider } from './components/context';
import Pdf from './components/Pdf';
import Pdfs from './components/Pdfs';
import Sortkey from './components/Sortkey';
import Home from './components/Home';

function App() {
  return (
    <div className="App theme-dark">
      <DataProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pdfs" element={<Pdfs />} />
            <Route path="/sortkey" element={<Sortkey />} />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;

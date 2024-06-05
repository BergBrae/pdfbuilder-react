import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
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
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            <Home />
          </Tab>
          <Tab eventKey="pdfs" title="PDFs">
            <Pdfs />
          </Tab>
          <Tab eventKey="sortkey" title="Sort Key">
            <Sortkey />
          </Tab>
        </Tabs>
      </DataProvider>
    </div>
  );
}

export default App;

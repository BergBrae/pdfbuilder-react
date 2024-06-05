import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { DataProvider } from './components/context';
import Pdf from './components/Pdf';
import Pdfs from './components/Pdfs';
import Sortkey from './components/Sortkey';
import Home from './components/Home';
import Pdftools from './components/Pdftools';

function App() {
  return (
    <div className="App theme-dark">
      <DataProvider>
        <Tab.Container id="left-tabs" defaultActiveKey="PDFs">
          <Row>
            <Col sm={2} className="sidebar p-0 m-0">
              <h1>PDFBuilder</h1>
              <Nav variant="pills" className="flex-column" style={{width: "100%"}}>
                <Nav.Item className='m-2 mb-0'>
                  <Nav.Link eventKey="PDFs">PDFs</Nav.Link>
                </Nav.Item>
                <Nav.Item className='m-2'>
                  <Nav.Link eventKey="sort_key">Sort Key</Nav.Link>
                </Nav.Item>
              </Nav>
              <hr className='m-4 mt-2 mb-5'/>
              <Tab.Pane eventKey="PDFs" style={{bottom: 0}}><Pdftools /></Tab.Pane>
            </Col>
            <Col sm={10} className="content">
              <Tab.Content>
                <Tab.Pane eventKey="PDFs"><Pdfs /></Tab.Pane>
                <Tab.Pane eventKey="sort_key"><Sortkey /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </DataProvider>
    </div>
  );
}

export default App;

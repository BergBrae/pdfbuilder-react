import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
// import { Document, Page } from 'react-pdf';
import Accordion from 'react-bootstrap/Accordion';
import { BiColumns } from 'react-icons/bi';

const Pdf = (props) => {

    const text = props.text ? props.text : <Alert variant="danger">No content available for this file</Alert>; // default to an empty string if props.text is null or undefined
    const showButton = props.text ? true : false;

    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>
                <Col >
                    <h1 className="pdf-filename">{props.filename}</h1>
                    <p className="pdf-directory">{props.directory}</p>
                </Col>
            </Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col md={showButton ? 11 : 12}>
                        {text && <p className='text-start'>{text}</p>}
                    </Col>
                    <Col md={1} className='d-flex align-items-center justify-content-center'>
                        {showButton && <Button variant="primary" href={props.path} className="align-items-center">
                            Open
                        </Button>}
                    </Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Pdf;

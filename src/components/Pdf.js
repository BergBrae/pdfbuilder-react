import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
// import { Document, Page } from 'react-pdf';
import Accordion from 'react-bootstrap/Accordion';
import { CiBookmark } from "react-icons/ci";

const Pdf = (props) => {

    const text = props.text ? props.text : <Alert variant="danger">No content available for this file</Alert>; // default to an empty string if props.text is null or undefined
    const showButton = props.text ? true : false;

    const bookmarkElement = props.bookmark.length ? <span><CiBookmark size={30} /> {props.bookmark}</span> : <span></span>;

    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>
                <Container>
                    <Row>
                        <Col md={7}>
                            <h3 className="pdf-filename">{props.filename}</h3>
                            <p className="pdf-directory">{props.directory}</p>
                        </Col>
                        <Col md={5}>
                            {bookmarkElement}
                        </Col>
                    </Row>
                </Container>
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

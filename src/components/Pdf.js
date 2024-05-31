import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import { Document, Page } from 'react-pdf';

const Pdf = (props) => {

    const truncateText = (text, max_length) => {
        if (typeof text !== 'string' || text.length === 0) {
            return false;
        }
        if (text.length > max_length) {
            return text.substring(0, max_length) + '...';
        }
        return text;
    }

    const displayedText = truncateText(props.text, 200)

    return (
        <Container className='pdf hover-grow'>
            <Row>
                <Col lg={5}>
                    <h1 className="pdf-filename">{props.filename}</h1>
                    <p className="pdf-directory">{props.directory}</p>
                    {props.num_pages != null && <p><span className="num-pages-label">Number of Pages: </span><span className="num-pages">{props.num_pages}</span></p>}
                </Col>
                <Col lg={5} className="d-flex align-items-center justify-content-center">
                    {displayedText && <p className="pdf-truncated-text pdf-textbox">{displayedText}</p>}
                </Col>
                <Col lg={2} className="d-flex align-items-center justify-content-center">
                    <Button variant="primary" onClick={() => console.log("hello")}>Open</Button>
                </Col>
            </Row>
        </Container >
    );

}

export default Pdf;

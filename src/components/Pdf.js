import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import Accordion from 'react-bootstrap/Accordion';
import { CiBookmark } from "react-icons/ci";
import { BsArrowsMove } from 'react-icons/bs';
import PdfViewer from './PdfViewer';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Pdf = (props) => {
    const { index, pdf, bookmarks, attributes, listeners } = props;
    const [numPages, setNumPages] = useState(null);
    const [fileData, setFileData] = useState(null);

    useEffect(() => {
        if (pdf) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileData(e.target.result);
            };
            reader.readAsDataURL(pdf);
        }
    }, [pdf]);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const bookmarkElement = bookmarks[pdf.name] ? (
        <span><CiBookmark size={30} /> {bookmarks[pdf.name]}</span>
    ) : (
        <span></span>
    );

    return (
        <Accordion.Item eventKey={index} className='m-2'>
            <Accordion.Header>
                <Container>
                    <Row>
                        <Col sm={4}><h6>{pdf.name}</h6></Col>
                        <Col>Last Modified: <strong>{pdf.lastModified ? new Date(pdf.lastModified).toLocaleDateString() : 'N/A'}</strong></Col>
                        <Col>Pages: <strong>{numPages}</strong></Col>
                        <Col>{bookmarkElement}</Col>
                        <Col {...attributes} {...listeners} className="drag-handle">
                            <BsArrowsMove size={20} />
                        </Col>
                    </Row>
                </Container>
            </Accordion.Header>
            <Accordion.Body>
                <PdfViewer fileData={fileData} numPages={numPages} onDocumentLoadSuccess={onDocumentLoadSuccess} />
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Pdf;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import Accordion from 'react-bootstrap/Accordion';
import { CiBookmark } from "react-icons/ci";
import PdfViewer from './PdfViewer';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

const Pdf = (props) => {
    const { index, pdf, bookmarks } = props;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
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
        <Accordion.Item eventKey={index}>
            <Accordion.Header>
                <Container>
                    <Row>
                        <Col>{pdf.name}</Col>
                        <Col>Last Modified: {pdf.lastModified ? new Date(pdf.lastModified).toLocaleDateString() : 'N/A'}</Col>
                        <Col>Pages: {numPages}</Col>
                        <Col>{bookmarkElement}</Col>
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

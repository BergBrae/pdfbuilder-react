import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import Accordion from 'react-bootstrap/Accordion';
import { CiBookmark } from "react-icons/ci";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = (props) => {
    const { index, pdf, bookmarks, eventKey } = props;
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
        <Accordion.Item eventKey={eventKey}>
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
                <Container>
                    <Row>
                        <Col>
                            {fileData && (
                                <Document
                                    file={fileData}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                >
                                    {Array.from(
                                        new Array(numPages),
                                        (el, index) => (
                                            <Page
                                                key={`page_${index + 1}`}
                                                pageNumber={index + 1}
                                            />
                                        )
                                    )}
                                </Document>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                onClick={() => setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1))}
                                disabled={pageNumber <= 1}
                            >
                                Previous
                            </Button>
                            <span> Page {pageNumber} of {numPages} </span>
                            <Button
                                onClick={() => setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages))}
                                disabled={pageNumber >= numPages}
                            >
                                Next
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Pdf;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import Accordion from 'react-bootstrap/Accordion';
import { CiBookmark } from "react-icons/ci";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


export default function PdfViewer(Props) {
    const { fileData, numPages, onDocumentLoadSuccess } = Props;

    return (
        <Container className='border pdf-viewer'>
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
                                        className="border"
                                    />
                                )
                            )}
                        </Document>
                    )}
                </Col>
            </Row>
        </Container>
    );
}
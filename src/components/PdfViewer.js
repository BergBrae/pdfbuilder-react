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
        <Container>
            <Row>
                <Col>
                    {fileData && (
                        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                            <Document
                                file={fileData}
                                onLoadSuccess={onDocumentLoadSuccess}
                                className='d-flex flex-row'
                            >
                                {Array.from(
                                    new Array(numPages),
                                    (el, index) => (
                                        <div key={`page_${index + 1}`} style={{ display: 'inline-block', margin: '0 10px' }}>
                                            <Page
                                                pageNumber={index + 1}
                                                renderTextLayer={false}
                                                renderAnnotationLayer={false}
                                                className="border"
                                            />
                                        </div>
                                    )
                                )}
                            </Document>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

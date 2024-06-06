import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

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
                                className="d-flex flex-row"
                            >
                                {Array.from(
                                    new Array(numPages),
                                    (el, index) => (
                                        <div key={`page_${index + 1}`} style={{ display: 'inline-block', margin: '0 10px', position: 'relative' }}>
                                            <Page
                                                pageNumber={index + 1}
                                                renderTextLayer={true}
                                                renderAnnotationLayer={true}
                                                className="border"
                                                width={400} // Optional: you can set a fixed width to control the size
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

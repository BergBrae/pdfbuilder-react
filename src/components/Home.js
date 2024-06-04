import React from 'react';
import Logo from './Logo';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <Container>
            <Row>
                <Logo />
            </Row>
            <Row>
                <h6>
                    Welcome to PDFBuilder! This is a simple web application that allows you to view and interact with PDF files. You can view the contents of a PDF file, search for specific text, and bookmark pages. You can also sort the PDF files by a specific key.
                </h6>
            </Row>
        </Container>
    )
}
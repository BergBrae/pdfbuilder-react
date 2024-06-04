import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from './Logo';

export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    PDFBuilder
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/pdfs">PDFs</Nav.Link>
                        <Nav.Link href="/sortkey">Sort Key</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
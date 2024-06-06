import React from 'react';
import { Col, Row, Container, Button, FormControl } from 'react-bootstrap';
import { DataContext } from './context';
import AddFileButton from './AddFileButton';

export default function Pdftools() {
    const [data, setData] = React.useContext(DataContext);
    const files = data.pdfs.files;
    const fileInputRef = React.useRef(null);

    return (
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <AddFileButton />
                </Col>
            </Row>
        </Container>
    );
}

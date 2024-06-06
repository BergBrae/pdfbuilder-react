import React from 'react';
import { Col, Row, Container, Button, FormControl } from 'react-bootstrap';
import { DataContext } from './context';

export default function Pdftools() {
    const [data, setData] = React.useContext(DataContext);
    const fileInputRef = React.useRef(null);

    const handleFileChange = (e) => {
        const files = e.target.files;
        setData((prevData) => {
            return {
                ...prevData,
                pdfs: {
                    ...prevData.pdfs,
                    files: [...prevData.pdfs.files, ...files],
                },
            };
        });
    };

    return (
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <Button onClick={() => fileInputRef.current.click()}>Add Files</Button>
                    <FormControl
                        type="file"
                        id="file"
                        multiple
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept='.pdf'
                    />
                </Col>
            </Row>
        </Container>
    );
}

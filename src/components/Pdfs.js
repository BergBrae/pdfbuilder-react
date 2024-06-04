import React, { useContext } from 'react';
import Context from './Context';
import Pdf from './Pdf';
import { Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export default function Pdfs() {
    const [data, setData] = useContext(Context);

    const pdfs = data.pdfs.files.map((pdf, index) => {
        const text = pdf.text ? pdf.text.join("\n\n") : ""; // default to an empty string if pdf.text is null or undefined
        return <Pdf key={index}
            eventKey={index}
            filename={pdf.filename}
            path={pdf.path}
            directory={pdf.directory}
            text={text}
            num_pages={pdf.num_pages}
        />
    });

    return (
        <Container md={6}>
            <title>PDF Builder</title>
            <Container>
                <h1>PDFs</h1>
            </Container>
            <Accordion>
                {pdfs}
            </Accordion>
        </Container>
    )
}
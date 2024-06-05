import React, { useContext } from 'react';
import { DataContext } from './context';
import Pdf from './Pdf';
import { Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export default function Pdfs() {
    const [data, setData] = useContext(DataContext);

    const pdfs = data.pdfs.files.map((pdf, index) => {
        const text = pdf.text ? pdf.text.join("\n\n") : ""; // default to an empty string if pdf.text is null or undefined
        return <Pdf key={index}
            eventKey={index}
            filename={pdf.filename}
            path={pdf.path}
            directory={pdf.directory}
            text={text}

            numPages={pdf.num_pages}
            bookmark={"test"}
        />
    });



    return (
        <Container md={6}>
            <title>PDF Builder</title>
            <h1 className='m-5'>PDFs</h1>
            {pdfs.length == 0 ? <p>No Current files. Please add a file to continue</p> : ""}
            <Accordion>
                {pdfs}
            </Accordion>
        </Container>
    )
}
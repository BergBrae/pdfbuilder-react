import React, { useContext } from 'react';
import { DataContext } from './context';
import Pdf from './Pdf';
import { Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import AddFileButton from './AddFileButton';

export default function Pdfs() {
    const [data, setData] = useContext(DataContext);

    const bookmarks = data.pdfs.bookmarks
    let pdfs = data.pdfs.files

    if (pdfs.length > 0) {
        pdfs = data.pdfs.files.map((pdf, index) => {
            return <Pdf index={index} pdf={pdf} bookmarks={bookmarks} />
        });
    } else {
        pdfs = (
            <Container>
                <p>Add files to begin.</p>
                <AddFileButton />
            </Container>
        );
    }


    return (
        <Container md={6}>
            <title>PDF Builder</title>
            <h1 className='m-5'>PDFs</h1>
            <Accordion>
                {pdfs}
            </Accordion>
        </Container>
    )
}
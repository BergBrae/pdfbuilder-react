import React, { useContext } from 'react';
import Context from './Context';
import Pdf from './Pdf';
import { Container } from 'react-bootstrap';

export default function Pdfs() {
    console.log('Pdfs')
    const [data, setData] = useContext(Context);

    console.log(data)

    // Check if data.pdfs and data.pdfs.files are defined and are arrays
    if (!data || !data.pdfs || !Array.isArray(data.pdfs.files)) {
        console.error('Invalid data structure:', data);
        return <div>Error: Invalid data structure</div>;
    }

    const pdfs = data.pdfs.files.map((pdf, index) => {
        return <Pdf key={index}
            filename={pdf.filename}
            path={pdf.path}
            directory={pdf.directory}
            text={pdf.text.join("\n\n")}
            num_pages={pdf.num_pages}
        />
    });

    return (
        <Container>
            {pdfs}
        </Container>
    )
}
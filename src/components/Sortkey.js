import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import PdfClassification from './PdfClassification';
import Context from './Context';

export default function SortKey(props) {
    const [data, setData] = React.useContext(Context);

    const sort_key = data.sort_key.map((classification, index) => {
        return <PdfClassification key={index}
            index={index + 1}
            name={classification.name}
            regex={classification.regex}
            bookmarkTitle={classification.bookmark}
            appliesToFilename={classification.applies_to_filename}
            appliesToPath={classification.applies_to_directory}
            appliesToDocument={classification.applies_to_document}
        />
    })

    return (
        <Container>
            <h1 className="m-5">Sort Key</h1>
            {sort_key}
            <Button variant="primary">Add Classification</Button>
        </Container>
    );
}
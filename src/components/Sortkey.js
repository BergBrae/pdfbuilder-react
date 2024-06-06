import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import PdfClassification from './PdfClassification';
import { DataContext } from './context';

export default function SortKey(props) {
    const [data, setData] = React.useContext(DataContext);

    const handleAddClassification = () => {
        const newClassification = {
            name: "",
            regex: "",
            bookmark: "",
            applies_to_filename: true,
            applies_to_directory: true,
            applies_to_document: true
        };
        setData(prevData => ({
            ...prevData,
            sort_key: [...prevData.sort_key, newClassification]
        }));
    };

    const handleUpdateClassification = (index, updatedClassification) => {
        const updatedSortKey = data.sort_key.map((classification, idx) =>
            idx === index ? updatedClassification : classification
        );
        setData(prevData => ({
            ...prevData,
            sort_key: updatedSortKey
        }));
    };

    const handleDeleteClassification = (index) => {
        const updatedSortKey = data.sort_key.filter((_, idx) => idx !== index);
        setData(prevData => ({
            ...prevData,
            sort_key: updatedSortKey
        }));
    };

    const sort_key = data.sort_key.map((classification, index) => (
        <PdfClassification key={index}
            index={index}
            name={classification.name}
            regex={classification.regex}
            bookmarkTitle={classification.bookmark}
            appliesToFilename={classification.applies_to_filename}
            appliesToPath={classification.applies_to_directory}
            appliesToDocument={classification.applies_to_document}
            onUpdate={handleUpdateClassification}
            onDelete={handleDeleteClassification}
        />
    ));

    return (
        <Container>
            <h1 className="m-5">Sort Key</h1>
            <section>
                {sort_key.length === 0 ? <p>Please add a classification to continue.</p> : ""}
                {sort_key}
            </section>
            <Button variant="primary" onClick={handleAddClassification}>Add Classification</Button>
        </Container>
    );
}

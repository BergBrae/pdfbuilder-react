import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import PdfClassification from './PdfClassification';
import { DataContext } from './context';


export default function AddClassificationButton(props)  {
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

    return <Button variant="primary" onClick={handleAddClassification}>Add Classification</Button>
}
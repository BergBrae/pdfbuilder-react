import React from 'react';
import { Col, Row, Container, Button, FormControl } from 'react-bootstrap';
import { DataContext } from './context';
import AddClassificationButton from './AddClassificationButton';

export default function SortKeyTools() {
    return (
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <AddClassificationButton />
                </Col>
            </Row>
        </Container>
    );
}

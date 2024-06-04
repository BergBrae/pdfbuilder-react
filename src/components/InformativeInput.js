import React from "react";
import { Button, Col, FloatingLabel, Row } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { IoIosInformationCircleOutline } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function InformativeInput(props) {

    return (
        <InputGroup className="m-2" >
            <OverlayTrigger placement="bottom" delay={{ show: 500, hide: 400 }} overlay={<Tooltip id="button-tooltip-2">{props.information}</Tooltip>}>
                <FloatingLabel
                    controlId="floatingInput"
                    label={props.placeholder}>
                    <Form.Control type="text" value={props.value} />
                </FloatingLabel>
            </OverlayTrigger>
        </InputGroup>
    )
}
import React from "react";
import { InputGroup, FloatingLabel, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function InformativeInput(props) {
    return (
        <InputGroup className="m-2">
            <OverlayTrigger placement="bottom" delay={{ show: 500, hide: 400 }} overlay={<Tooltip id="button-tooltip-2">{props.information}</Tooltip>}>
                <FloatingLabel controlId="floatingInput" label={props.placeholder}>
                    <Form.Control 
                        type="text" 
                        value={props.value} 
                        onChange={props.onChange} 
                    />
                </FloatingLabel>
            </OverlayTrigger>
        </InputGroup>
    )
}

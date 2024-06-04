import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { TiDelete } from "react-icons/ti";
import { IoIosInformationCircleOutline } from "react-icons/io";
import InformativeInput from "./InformativeInput";

export default function PdfClassification(props) {
    const nameInforamtion = <div>
        <p>This will be used within this app for your convenience.</p>
        <p className='mb-0'>It does not have an effect on the generated PDF.</p>
    </div >

    const textPatternInformation = <div>
        <p>This field is for a <strong>Regex</strong> pattern.</p>
        <p>
            In it's simplest, entering any text will be matched with exact text.
            For example, entering <i>hydrogen</i> and selecting <i>Apply to Filename</i> will match any document that contains the word <i>hydrogen</i> in the Filename.
        </p>
        <p className='mb-0'>
            However, it is very powerful and can search for patterns such as emails or proprietary sample codes.
            Please use online resources or Brady if this is desired.
        </p>
    </div>

    const bookmarkTitleInformation = <div>
        <p>This is the title that will be used for the bookmark in the generated PDF.</p>
        <p>It does not have an effect on the classification.</p>
        <p className='mb-0'>You can use the "_" character as a place holder for the text that is matched using the Text Pattern.</p>
    </div>


    return (
        <Form className='mb-5 rounded border'>
            <Row className="m-3">
                <Col lg={1} className="text-align-center align-content-center">
                    <h4 className='m-2'>{props.index}</h4>
                </Col>
                <Col lg={3} className="text-align-center align-content-center">
                    <InformativeInput placeholder="Classification Name" information={nameInforamtion} value={props.name} />
                </Col>
                <Col lg={2} className="text-align-center align-content-center">
                    <InformativeInput placeholder="Text pattern" information={textPatternInformation} value={props.regex} />
                </Col>
                <Col lg={3} className="text-align-center align-content-center">
                    <InformativeInput placeholder="Bookmark Title" information={bookmarkTitleInformation} value={props.bookmarkTitle} />
                </Col>
                <Col lg={2} className="text-align-center align-content-center">
                    <Form.Check type='switch' id={`filename-${props.id}`} label="Apply to Filename" defaultChecked={props.appliesToFilename} />
                    <Form.Check type='switch' id={`path-${props.id}`} label="Apply to Path" defaultChecked={props.appliesToPath} />
                    <Form.Check type='switch' id={`document-${props.id}`} label="Apply to Document" defaultChecked={props.appliesToDocument} />
                </Col>
                <Col lg={1} className="text-align-center align-content-center">
                    <Button variant="">
                        <TiDelete size={40} />
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
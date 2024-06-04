import React from 'react';
import { MdBuild } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import { Container } from 'react-bootstrap';
 
export default function Logo() {
    return (
        <Container className='m-4'>
            <FaFilePdf size="20vh" />
            <MdBuild size="20vh" />
        </Container>
    )
}
import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from './context';
import Pdf from './Pdf';
import { Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import AddFileButton from './AddFileButton';
import {
    DndContext,
    closestCenter
} from '@dnd-kit/core';
import {
    SortableContext,
    arrayMove,
    useSortable,
} from '@dnd-kit/sortable';
import {
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Pdfs() {
    const [data, setData] = useContext(DataContext);
    const [items, setItems] = useState(data.pdfs.files);

    useEffect(() => {
        setItems(data.pdfs.files);
    }, [data.pdfs.files]);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(item => item.name === active.id);
                const newIndex = items.findIndex(item => item.name === over.id);
                const newItems = arrayMove(items, oldIndex, newIndex);

                setData(prevData => ({
                    ...prevData,
                    pdfs: {
                        ...prevData.pdfs,
                        files: newItems
                    }
                }));

                return newItems;
            });
        }
    };

    const bookmarks = data.pdfs.bookmarks;

    let pdfs;
    if (items.length > 0) {
        pdfs = items.map((pdf, index) => {
            return <SortableItem key={pdf.name} id={pdf.name} index={index} pdf={pdf} bookmarks={bookmarks} />;
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
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={items.map(item => item.name)} strategy={verticalListSortingStrategy}>
                    <Accordion>
                        {pdfs}
                    </Accordion>
                </SortableContext>
            </DndContext>
        </Container>
    );
}

function SortableItem(props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Pdf {...props} />
        </div>
    );
}

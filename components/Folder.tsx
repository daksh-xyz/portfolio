import Image from 'next/image';
import React, { useState, useRef } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

const Folder = ({ title, inheritPosition, myClick }: { title: string, inheritPosition: { x: number, y: number }, myClick: (title: string) => void }) => {
    const [position, setPosition] = useState(inheritPosition);
    const [isDragging, setIsDragging] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragStop = () => {
        setIsDragging(false);
    };

    return (
        <Draggable
            nodeRef={nodeRef}
            position={position}
            onDrag={handleDrag}
            onStart={handleDragStart}
            onStop={handleDragStop}
            bounds="parent"
        >
            <div ref={nodeRef} className={`w-18 h-18 items-center justify-center flex flex-col rounded-md ${isDragging ? 'opacity-75' : ''}`} onDoubleClick={() => myClick(title)}>
                <Image width="48" height="48" src={"/folder.png"} alt="mac-folder" draggable="false" />
                <p className="text-white text-sm">{title}</p>
            </div>
        </Draggable>
    );
}

export default Folder;
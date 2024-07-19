import React, { useRef } from 'react';

interface DropAreaProps {
    onFileChange: (file: File) => void;
}

const DropArea: React.FC<DropAreaProps> = ({ onFileChange }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        onFileChange(file);
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        onFileChange(file);
    };

    return (
        <div
            id="drop-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
        >
            <p>Ziehen Sie Ihre Audiodatei hierher oder klicken Sie, um eine Datei auszuwählen</p>
            <input
                type="file"
                id="fileElem"
                accept="audio/*"
                ref={fileInputRef}
                onChange={handleFileSelect}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default DropArea;

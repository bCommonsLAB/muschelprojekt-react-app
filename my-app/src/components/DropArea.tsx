import React, { useRef } from 'react';

interface DropAreaProps {
    onFileChange: (file: File) => void;
}

const DropArea: React.FC<DropAreaProps> = ({ onFileChange }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            const file = event.dataTransfer.files[0];
            onFileChange(file);
            event.dataTransfer.clearData();
        }
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            onFileChange(file);
        }
    };

    return (
        <div
            id="drop-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className='hover-pointer'
        >
            <p>
            <div className='upload-arrow'>
                    <div className="upload-base"></div>
                </div>
            </p>
            <input
                type="file"
                accept="audio/*"
                ref={fileInputRef}
                onChange={handleFileSelect}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default DropArea;

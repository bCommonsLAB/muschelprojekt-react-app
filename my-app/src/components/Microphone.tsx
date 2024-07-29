import React, { useState, useRef } from 'react';

interface MicrophoneRecorderProps {
    onFileChange: (file: Blob) => void;
}

const MicrophoneRecorder: React.FC<MicrophoneRecorderProps> = ({ onFileChange }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [status, setStatus] = useState('');
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const handleToggleRecording = () => {
        if (!isRecording) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    const mediaRecorder = new MediaRecorder(stream);
                    mediaRecorderRef.current = mediaRecorder;
                    mediaRecorder.start();
                    setStatus('Aufnahme läuft...');
                    setIsRecording(true);
                    audioChunksRef.current = [];

                    mediaRecorder.ondataavailable = (event: BlobEvent) => {
                        audioChunksRef.current.push(event.data);
                    };

                    mediaRecorder.onstop = () => {
                        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
                        onFileChange(audioBlob);
                        setIsRecording(false);
                        setStatus('Aufnahme beendet');
                    };
                })
                .catch(error => {
                    setStatus('Fehler beim Zugriff auf das Mikrofon');
                    console.error('Mikrofon Fehler:', error);
                });
        } else {
            mediaRecorderRef.current?.stop();
            setStatus('Aufnahme beendet');
            setIsRecording(false);
        }
    };

    return (
        <div className='hover-pointer'>
            <div className="button-container">
                <input 
                    type="checkbox" 
                    id="micButton" 
                    className="mic-checkbox" 
                    checked={isRecording}
                    onChange={handleToggleRecording}
                />
                <label htmlFor="micButton" className="mic-button">
                    <div className='mic'>
                        <div className='mic-button-loader'></div>
                        <div className="mic-base"></div>
                    </div>
                    <div className="button-message">
                        <span>{isRecording ? 'RECORDING...' : 'PRESS TO TALK'}</span>
                    </div>
                </label>
            </div>
            <div id="status">{status}</div>
        </div>
    );
};

export default MicrophoneRecorder;

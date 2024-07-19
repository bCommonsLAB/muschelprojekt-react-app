import React from 'react';

interface TranscriptionOutputProps {
    transcription: string;
}

const TranscriptionOutput: React.FC<TranscriptionOutputProps> = ({ transcription }) => {
    return (
        <div id="transcription-output" className="result">
            {transcription}
        </div>
    );
};

export default TranscriptionOutput;

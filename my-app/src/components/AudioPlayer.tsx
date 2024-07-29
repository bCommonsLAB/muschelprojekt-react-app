import React from 'react';

interface AudioPlayerProps {
    file: Blob | File;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ file }) => {
    const fileURL = URL.createObjectURL(file);

    return (
        <div id="uploaded-audio">
            <audio id="audio-player" controls src={fileURL}></audio>
        </div>
    );
};

export default AudioPlayer;

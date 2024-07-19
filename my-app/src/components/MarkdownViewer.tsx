import React from 'react';

interface MarkdownViewerProps {
    markdown: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdown }) => {
    return (
        <div id="markdown-viewer" className="result">
            <pre style={{ whiteSpace: 'pre-wrap' }}>{markdown}</pre>
        </div>
    );
};

export default MarkdownViewer;

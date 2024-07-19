export const fetchTemplates = async (): Promise<string[]> => {
    const response = await fetch('http://127.0.0.1:5000/templates');
    const data = await response.json();
    return data.templates;
};

export const transcribeAudio = async (file: File, template: string): Promise<any> => {
    const formData = new FormData();
    formData.append('audio', file);
    formData.append('template', template);

    const response = await fetch('http://127.0.0.1:5000/transcribe', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
};

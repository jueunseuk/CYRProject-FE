import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./styles.css"

const EditorComponent = () => {
    const [content, setContent] = useState('');

    const handleEditorChange = (value) => {
        setContent(value);
    };

    return (
        <>
            <ReactQuill
                value={content}
                onChange={handleEditorChange}
                modules={{
                    toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'image'],
                        ['clean'],
                    ],
                }}
                theme="snow"
                placeholder="내용을 입력하세요..."
            />
        </>
    );
}

export default EditorComponent;
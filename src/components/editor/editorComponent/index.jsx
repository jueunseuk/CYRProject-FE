import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./styles.css"

const EditorComponent = ({value, onChange}) => {

    return (
        <>
            <ReactQuill
                value={value}
                onChange={onChange}
                modules={{
                    toolbar: [
                        [{ size: ["small", false, "large", "huge"] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{ list: 'ordered' }, { list: 'bullet' }, { indent: "-1" }, { indent: "+1" }],
                        [{ 'align': [] }],
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
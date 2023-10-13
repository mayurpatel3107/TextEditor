// src/components/RichTextEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

function RichTextEditor() {
  const [editorHtml, setEditorHtml] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const handleFileAttachment = (e) => {
    const files = e.target.files;
    setAttachedFiles([...attachedFiles, ...files]);
  };

  return (
    <div>
      
      <ReactQuill value={editorHtml} onChange={setEditorHtml} modules={modules} />
      {attachedFiles.length > 0 && (
        <div>
          <p>Attached Files:</p>
          <ul>
            {attachedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          
        </div>

        
      )}
      <div>
        <label htmlFor="fileInput" className="attach-button">📎</label>
        <input type="file" accept="image/*" onChange={handleFileAttachment} style={{ display: 'none' }} id="fileInput" multiple />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

export default RichTextEditor;

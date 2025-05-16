import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language }) => {
  return (
    <div className="border rounded p-2">
      <Editor
        height="300px"
        language={language}
        defaultValue="# Write your code here"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
    </div>
  );
};

export default CodeEditor;

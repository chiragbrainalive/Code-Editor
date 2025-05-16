import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import RunButton from './components/RunButton';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [selectedLang, setSelectedLang] = useState({
    id: 71,
    name: 'Python (3.8.1)',
    editorLang: 'python',
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Mini Code Editor</h1>

      <LanguageSelector selectedLang={selectedLang} setSelectedLang={setSelectedLang} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CodeEditor
          code={code}
          setCode={setCode}
          language={selectedLang.editorLang}
        />
        <InputBox input={input} setInput={setInput} />
      </div>

      <RunButton
        code={code}
        input={input}
        setOutput={setOutput}
        languageId={selectedLang.id}
      />

      <OutputBox output={output} />
    </div>
  );
}

export default App;

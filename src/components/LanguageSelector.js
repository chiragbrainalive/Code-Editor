import React from 'react';

const languages = [
  { id: 71, name: 'Python (3.8.1)', editorLang: 'python' },
  { id: 54, name: 'C++ (GCC 9.2.0)', editorLang: 'cpp' },
  { id: 62, name: 'Java (OpenJDK 13)', editorLang: 'java' },
  { id: 63, name: 'JavaScript (Node.js 12.14.0)', editorLang: 'javascript' },
];

const LanguageSelector = ({ selectedLang, setSelectedLang }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">Select Language</label>
      <select
        className="w-full p-2 border rounded"
        value={selectedLang.id}
        onChange={(e) => {
          const lang = languages.find(l => l.id === parseInt(e.target.value));
          setSelectedLang(lang);
        }}
      >
        {languages.map(lang => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;

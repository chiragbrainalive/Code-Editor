import React from 'react';

const OutputBox = ({ output }) => {
  return (
    <div className="mt-4">
      <label className="block mb-2 font-medium">Output</label>
      <pre className="bg-black text-white p-4 rounded h-48 overflow-auto">
        {output || 'Output will appear here'}
      </pre>
    </div>
  );
};

export default OutputBox;

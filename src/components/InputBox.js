import React from 'react';

const InputBox = ({ input, setInput }) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor="user-input" 
        className="block mb-2 text-sm font-semibold text-gray-700"
      >
        Input
      </label>
      <textarea
        id="user-input"
        className="
          w-full 
          p-3 
          border 
          border-gray-300 
          rounded-md 
          resize-none 
          h-36 
          text-gray-900 
          placeholder-gray-400
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:border-blue-500
          transition 
          duration-200
          ease-in-out
        "
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your input here"
        aria-label="Input textarea"
      />
    </div>
  );
};

export default InputBox;

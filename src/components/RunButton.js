import React from 'react';
import axios from 'axios';

const RunButton = ({ code, input, setOutput, languageId }) => {
  const JUDGE0_URL = 'https://judge0-ce.p.rapidapi.com/submissions/';
  const RAPID_API_KEY = '9b7f629b66msh871501cb93b0fc7p1a9ba3jsn0d4a3671dceb';

  const handleRun = async () => {
    setOutput('Running...');

    try {
      // Step 1: Submit code
      const { data } = await axios.post(
        JUDGE0_URL,
        {
          source_code: code,
          stdin: input,
          language_id: languageId,
        },
        {
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'x-rapidapi-key': RAPID_API_KEY,
          },
        }
      );

      const token = data.token;

      // Step 2: Poll result
      const interval = setInterval(async () => {
        try {
          const result = await axios.get(`${JUDGE0_URL}${token}`, {
            headers: {
              'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
              'x-rapidapi-key': RAPID_API_KEY,
            },
          });

          const status = result.data.status.description;

          if (status === 'Accepted') {
            setOutput(result.data.stdout || 'No output');
            clearInterval(interval);
          } else if (status.includes('Error')) {
            setOutput(result.data.stderr || result.data.compile_output || 'Unknown error');
            clearInterval(interval);
          }
        } catch (err) {
          setOutput('Error fetching result.');
          
          clearInterval(interval);
        }
      }, 2000);
    } catch (err) {
        console.error("Submission error:", err.response ? err.response.data : err.message);
        setOutput('Failed to run code. Please try again.');
    }   
  };

  return (
    <div className="text-center my-4">
      <button
        onClick={handleRun}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Run Code
      </button>
    </div>
  );
};

export default RunButton;

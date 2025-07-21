import React, { useState } from 'react';

const Step2Description = ({ data, setData, next, back }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setData({ ...data, description: e.target.value });
    setError('');
  };

  const handleNext = () => {
    const wordCount = data.description.trim().split(/\s+/).length;

    if (!data.description.trim()) {
      setError('Description is required.');
    } else if (wordCount < 10) {
      setError(`Description should be at least 10 words (currently ${wordCount}).`);
    } else {
      setError('');
      next();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2: Add Description</h2>
      <textarea
        className="w-full border rounded p-2"
        rows="6"
        placeholder="Describe the issue"
        value={data.description}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex justify-between mt-4">
        <button onClick={back} className="bg-gray-300 px-4 py-2 rounded">Back</button>
        <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default Step2Description;



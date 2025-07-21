import React from 'react';

const Step4Preview = ({ data, back, next }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Review Your Submission</h2>

      <div className="space-y-2">
        <p><strong>📝 Title:</strong> {data.title}</p>
        <p><strong>🧾 Description:</strong> {data.description}</p>
        <p><strong>📍 Address:</strong> {data.address || "Not available"}</p>

        {data.images && data.images.length > 0 && (
          <div className="mt-4">
            <strong>🖼 Uploaded Images:</strong>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {data.images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-32 object-cover rounded border"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={back}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Proceed to Final Submit
        </button>
      </div>
    </div>
  );
};

export default Step4Preview;



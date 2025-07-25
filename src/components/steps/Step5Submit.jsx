import React from 'react';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

console.log("🧠 Step5Submit.jsx loaded");

const Step5Submit = ({ data, back,setData,next }) => {
  const navigate = useNavigate(); // ✅ Correct position

  console.log("📦 Data received in Step5Submit:", data);

  console.log("🧩 Step5Submit component mounted");

  // const token = localStorage.getItem("token");
  // console.log("🪪 Token from localStorage:", token);


  const handleSubmit = async () => {
    console.log('🧨 handleSubmit triggered');
    //alert("Issue submitted successfully!");
   

    try {
      const formData = new FormData();
      data.images.forEach((img) => {
        formData.append('reportImage', img);
      });
      formData.append('description', data.description);
      formData.append('location', data.address);
      formData.append('title', data.title);

     

      // const res = await api.post("/report", formData, {
        
      //   headers: {
        
      //     "Content-Type": "multipart/form-data",
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
       const res = await api.post("/report", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Report submitted:", res.data);
      toast.success("✅ Issue submitted successfully!"); 
      navigate("/");
    } catch (error) {
      console.log("❌ Error in submitting report:", error.message);
      alert("❌ Failed to submit issue: " + error.message);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 5: Submit</h2>
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
      submit
   </button>
      <button onClick={back} className="ml-4 bg-gray-300 px-4 py-2 rounded">
        Back
      </button>
    </div>
  );
};

export default Step5Submit;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {api} from "../services/api";
import { Loader } from "../components/Loader";
import { motion } from "framer-motion";

const MyIssue = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchIssues = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/my-reports", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});


      setIssues(res.data.data); // Assuming your backend sends { data: [...] }
    } catch (error) {
      console.error("Error fetching issues", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📋 My Reported Issues</h2>
      {issues.length === 0 ? (
        <p className="text-gray-500">You have not reported any issues yet.</p>
      ) : (
        <div className="grid gap-4">
          {issues.map((issue) => (
            <motion.div
              key={issue._id}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg shadow-md border cursor-pointer bg-white"
              onClick={() => navigate(`/issue/${issue._id}`)}
            >
              <h3 className="text-xl font-semibold text-blue-600">{issue.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{issue.description?.slice(0, 100)}...</p>
              <div className="text-xs text-gray-400 mt-2">
                Status: <span className="font-semibold">{issue.status || "Pending"}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyIssue;






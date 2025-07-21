import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { Loader } from "../components/Loader";
import { motion } from "framer-motion";

const IssueDetail = () => {
  const { id: issueId } = useParams();
  const navigate = useNavigate();

  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!issueId) {
      navigate("/my-issues");
      return;
    }

    const fetchIssue = async () => {
      try {
        const res = await api.get(`/single-report/${issueId}`);
        setIssue(res.data.data);
      } catch (error) {
        console.error("Failed to fetch issue details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssue();
  }, [issueId, navigate]);

  if (loading) return <Loader />;

  if (!issue) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl font-semibold">
        Failed to load issue. Please try again.
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{issue.title}</h2>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Location:</span> {issue.location}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Reported On:</span>{" "}
        {new Date(issue.createdAt).toLocaleString()}
      </p>
      <p className="text-gray-700 mb-6 whitespace-pre-line">{issue.description}</p>

      {issue.image && (
        <img
          src={issue.image}
          alt="Issue"
          className="w-full max-h-[400px] object-cover rounded-lg border"
        />
      )}
    </motion.div>
  );
};

export default IssueDetail;






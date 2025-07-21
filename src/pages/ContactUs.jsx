import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { api } from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await api.post("/contact", values);
        const data = res.data;

        if (res.status === 200) {
          toast.success(data.message || "Message sent successfully!");
          resetForm();
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          toast.error(data.message || "Failed to send message.");
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        toast.error(err.response?.data?.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center px-4 py-10">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-6">
          Contact Us
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block mb-1 font-semibold text-gray-700">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
              )}
            </div>
            <div className="w-full">
              <label className="block mb-1 font-semibold text-gray-700">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition duration-200 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;












import React from 'react';
import Navbar from '../components/Navbar';
import CircleProgressDot from '../components/CircleProgressDot';
import ImageSlider from '../components/ImageSlider';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import ReportIssueWizard from './ReportIssueWizard';
import { useNavigate } from 'react-router-dom';
import About from './About';
import FAQ from '../components/Faq';
import ContactUs from './ContactUs';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen overflow-x-hidden scroll-smooth">
      <Navbar />
      <ImageSlider />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white py-16 px-4 md:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          <div className="w-full max-w-2xl">
            <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-400 text-transparent bg-clip-text leading-tight">
              Living out our mission in a changing world
            </h2>
            <p className="mt-6 text-lg text-gray-300 tracking-wide">
              UrbanFix is a robust application for availing non-emergency government services like certificates and tax payments. Report civic issues easily and make your city smarter and more livable.
            </p>
            <button
              onClick={() => navigate('/report')}
              className="mt-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 transition duration-300"
            >
              Register your complaint now
            </button>
          </div>

          <div className="w-full max-w-md">
            <img
              src="https://everythingcivic.com/smartcity-311/static/media/banner_img_1.c1e35fae091304c7632a.png"
              alt="Smart City Illustration"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about">
        <About />
      </section>

      {/* Steps Section */}
      <div className="w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" data-aos="fade-down">
            WORKING
          </h2>
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-green-500 to-blue-500 inline-block text-transparent bg-clip-text text-center" data-aos="fade-up">
            3 Easy Steps to Civic Action
          </h1>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            {/* Step 1 */}
            <div className="group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200" data-aos="zoom-in" data-aos-delay="100">
              <img
                src="https://cdn.prod.website-files.com/65d27ead8b721fc8e2412071/6600deedc835756ac29f6094_1.webp"
                alt="Snap"
                className="w-[300px] h-[280px] object-cover rounded-md"
              />
              <div className="w-[300px] flex flex-col items-center bg-white mt-2 rounded-md shadow-md py-4 px-2">
                <span className="text-xs font-bold text-purple-500 mb-1">Step 1</span>
                <h2 className="text-2xl font-semibold text-gray-800">Snap</h2>
                <p className="text-sm text-center text-gray-600">Spotted an issue? Snap to help get it fixed!</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200" data-aos="zoom-in" data-aos-delay="200">
              <img
                src="https://cdn.prod.website-files.com/65d27ead8b721fc8e2412071/6600ded3daeca4ae755f4bf9_2.webp"
                alt="Send"
                className="w-[300px] h-[280px] object-cover rounded-md"
              />
              <div className="w-[300px] flex flex-col items-center bg-white mt-2 rounded-md shadow-md py-4 px-2">
                <span className="text-xs font-bold text-purple-500 mb-1">Step 2</span>
                <h2 className="text-2xl font-semibold text-gray-800">Send</h2>
                <p className="text-sm text-center text-gray-600">Send a report on the spot. No clunky forms or hold times.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="https://cdn.prod.website-files.com/65d27ead8b721fc8e2412071/66d13f4347f22c124b6bc56c_Solved-hero.avif"
                alt="Solve"
                className="w-[300px] h-[280px] object-cover rounded-md"
              />
              <div className="w-[300px] flex flex-col items-center bg-white mt-2 rounded-md shadow-md py-4 px-2">
                <span className="text-xs font-bold text-purple-500 mb-1">Step 3</span>
                <h2 className="text-2xl font-semibold text-gray-800">Solve</h2>
                <p className="text-sm text-center text-gray-600">We'll get it to the right place so it can get Solved!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Feedback />
      <section id="contact" >
        <ContactUs/>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;











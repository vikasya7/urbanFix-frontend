import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const feedbacks = [
  {
    name: "Ravi Sharma",
    location: "New Delhi",
    photo: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    rating: 5,
    message: "Reporting a pothole took less than 2 minutes! The response was super quick. Thank you NextGenCity team!",
  },
  {
    name: "Sita Verma",
    location: "Mumbai",
    photo: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    rating: 4,
    message: "I love how simple it is to raise issues about my neighborhood. Great initiative!",
  },
  {
    name: "Arjun Patel",
    location: "Bengaluru",
    photo: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    rating: 5,
    message: "Finally a platform where citizens can voice their concerns easily and get timely updates.",
  },
  {
    name: "Rahul Singh",
    location: "Lucknow",
    photo: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    rating: 5,
    message: "Magically, things just get sorted. It's amazing!",
  },
  {
    name: "Abhishek Patel",
    location: "Manipur",
    photo: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    rating: 5,
    message: "A really good way to get straight to the council.",
  },
  {
    name: "Amisha Singh",
    location: "Jaipur",
    photo: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    rating: 5,
    message: "It's so easy to use, anybody with a smartphone can do it.",
  },
  {
    name: "Tanishq",
    location: "Delhi",
    photo: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    rating: 5,
    message: "I've found it super, super efficient!",
  },
];

const Feedback = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="py-16 bg-gradient-to-br from-[#2c003e] via-[#1b1b3a] to-[#000014] text-white">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        What People Are Saying
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-2xl shadow-2xl p-6 flex flex-col items-center border border-[#334155]"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <img
              src={feedback.photo}
              alt={feedback.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300 text-sm text-center mb-3 line-clamp-3">
              {feedback.message}
            </p>
            <h3 className="font-semibold text-lg text-white">{feedback.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{feedback.location}</p>
            <div className="flex text-yellow-400 text-xl">
              {"★".repeat(feedback.rating)}
              {"☆".repeat(5 - feedback.rating)}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Scroll */}
      <div className="md:hidden flex overflow-x-auto gap-4 px-4 snap-x snap-mandatory">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="flex-none w-80 bg-[#1e293b] rounded-2xl shadow-xl p-4 snap-start border border-[#334155]"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <img
              src={feedback.photo}
              alt={feedback.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <p className="text-gray-300 text-sm mb-2 line-clamp-3">
              {feedback.message}
            </p>
            <h3 className="font-semibold text-lg text-white">{feedback.name}</h3>
            <p className="text-sm text-gray-400 mb-1">{feedback.location}</p>
            <div className="flex text-yellow-400 text-lg">
              {"★".repeat(feedback.rating)}
              {"☆".repeat(5 - feedback.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;



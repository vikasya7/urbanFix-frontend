import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const missionCards = [
  {
    title: "Empower everyone",
    description:
      "Focus on giving everyone the confidence to take action. Feel comfortable speaking up, taking risks and asking questions and encourage others to join you. Build a diverse team with different people and perspectives.",
  },
  {
    title: "Think big, then go for it",
    description:
      "Defined by ambition, bold about what we want to achieve. Be humble and not intimidated by setbacks. Take initiative, bring an ownership mentality and give our all to each other and our work.",
  },
  {
    title: "Move the needle",
    description:
      "Zero in on where we can have a positive impact on the enjoyment, sustainability and safety in communities. Focus on what matters and avoid major distractions.",
  },
  {
    title: "Connect generously",
    description:
      "We’re in the business of connecting everyone to the people who can help them. Be transparent, open and always assume positive intent.",
  },
  {
    title: "Seek simplicity",
    description:
      "Turn the cumbersome and complicated into the easy and effective. Be clear, provide context and remove barriers for everyone.",
  },
  {
    title: "Act locally, impact globally",
    description:
      "Start with small actions in your own community. Every step you take sets a precedent and encourages others to follow. Real change begins close to home.",
  },
  {
    title: "Celebrate community wins",
    description:
      "Recognize and highlight the improvements made by fellow citizens. Appreciation fuels participation and builds a culture of collaboration.",
  },
];

const About = () => {
  return (
    <div className="w-full py-20 px-6 sm:px-10 lg:px-24 bg-gradient-to-b from-[#2c003e] via-[#1b1b3a] to-[#000014] text-white">
      {/* Heading Section */}
      
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <span className="inline-block bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
          WHAT WE’RE ABOUT
        </span>
        <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
        <p className="text-lg text-gray-300">
          Empower every person to improve shared spaces around them.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {missionCards.map((card, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FaThumbsUp className="text-blue-500 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Urban Fix & Spinner Section */}
      <div className="w-full max-w-none px-0 lg:px-10 flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* About Text */}
        <div className="w-full lg:w-1/2 px-4">
          
          <h2 className="text-2xl text-white mb-4">Urban Fix</h2>
          <p className="text-lg tracking-wide text-white">
            NextGenCity is the flagship civic engagement platform developed by a leading software solutions provider focused on smart governance and community well-being.
            <br /><br />
            As a next-generation smart city application, NextGenCity enables citizens to easily report non-emergency local issues like potholes, streetlight outages, garbage collection delays, and water drainage problems—right from their phones or desktops.
            <br /><br />
            The platform acts as a real-time bridge between citizens and municipal authorities, streamlining communication, improving response times, and enhancing transparency.
          </p>
          
        </div>

        {/* Spinner / Counter */}
        <div className="w-full lg:w-1/2 flex justify-center items-center px-4">
          <div
            className="relative w-[220px] h-[220px] animate-autorun"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {[1, 2, 3, 4, 5].map((pos) => {
              const rotate = (pos - 1) * (360 / 5);
              return (
                <div
                  key={pos}
                  className="absolute h-full w-full bg-white flex flex-col gap-1 justify-center items-center rounded-lg shadow-md border text-center p-3 text-sm sm:text-base"
                  style={{
                    transform: `rotateY(${rotate}deg) translateZ(200px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <h2 className="text-3xl text-black font-bold">
                    {pos === 1
                      ? "1,500,000+"
                      : pos === 2
                      ? "15+"
                      : pos === 3
                      ? "30+"
                      : pos === 4
                      ? "25,000+"
                      : "Projects"}
                  </h2>
                  <span className="text-black">
                    {pos === 1
                      ? "Citizens"
                      : pos === 2
                      ? "States"
                      : pos === 3
                      ? "Corporations"
                      : pos === 4
                      ? "Offices"
                      : "Projects"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;







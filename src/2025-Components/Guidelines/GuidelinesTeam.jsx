import React from "react";
import gifImage from "../Guidelines/guidelines.gif";

const GuidelinesTeam = () => {
  const guidelines = [
    { id: 1, text: "There should be no hierarchical structure within the team." },
    { id: 2, text: "The maximum team size must not exceed 120 members." },
    { id: 3, text: "No one can be included in the team without undergoing the proper interview process prescribed by TEDx." },
    { id: 4, text: "Attendance spreadsheets must be maintained, recording work hours for all team members." },
    { id: 5, text: "Student diversity must be ensured and maintained." },
    { id: 6, text: "No team member should have any political or criminal background." },
    { id: 7, text: "No TEDx event can be independently controlled by the host institution; it must be strictly organized as per the guidelines set by TED, New York." },
    { id: 8, text: "Breaching these guidelines may result in the termination of the TEDx license and legal action by TED, New York, in accordance with the laws and protocols of the respective country." }
  ];

  return (
    <section className="h-auto min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-4 md:px-10 py-10">
      {/* Background GIFs */}
      <img 
        src={gifImage} 
        alt="gif" 
        className="absolute h-full w-auto opacity-30 left-0 scale-150 md:scale-125" 
      />
      <img 
        src={gifImage} 
        alt="gif" 
        className="absolute h-full w-auto opacity-30 right-0 scale-150 md:scale-110 rotate-180" 
      />

      {/* Main Content */}
      <div className="text-white border-2 rounded-xl max-w-5xl top-6 xl:top-0 w-full bg-opacity-20 backdrop-blur-[5px] relative z-10 p-6 sm:p-10 shadow-lg">
        <p className="text-left text-2xl sm:text-3xl font-bold">
          Guidelines for <span className="text-[#EE2922]">TEDx</span> DAVV Team Members
        </p>
        <div className="w-full sm:w-[80%] h-[2px] bg-white mt-4 sm:mt-6" />
        <div className="text-left mt-4">
          <ol className="list-decimal ml-4 sm:ml-5 mt-3 space-y-2 text-sm sm:text-base leading-relaxed">
            {guidelines.map(({ id, text }) => (
              <li key={id}>{text}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default GuidelinesTeam;

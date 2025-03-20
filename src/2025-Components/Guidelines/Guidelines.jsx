import React from "react";
import gifImage from "../Guidelines/guidelines.gif";

const GuidelinesTeam = () => {
  const guidelinesteam = [
    {
      id: 1,
      text: "There should be no hierarchical structure within the team.",
    },
    { id: 2, text: "The maximum team size must not exceed 120 members." },
    {
      id: 3,
      text: "No one can be included in the team without undergoing the proper interview process prescribed by TEDx.",
    },
    {
      id: 4,
      text: "Attendance spreadsheets must be maintained, recording work hours for all team members.",
    },
    { id: 5, text: "Student diversity must be ensured and maintained." },
    {
      id: 6,
      text: "No team member should have any political or criminal background.",
    },
    {
      id: 7,
      text: "No TEDx event can be independently controlled by the host institution; it must be strictly organized as per the guidelines set by TED, New York.",
    },
    {
      id: 8,
      text: "Breaching these guidelines may result in the termination of the TEDx license and legal action by TED, New York, in accordance with the laws and protocols of the respective country.",
    },
  ];
  const guidelines = [
    {
      id: 1,
      text: "It’s actually not the person you should be searching for, but the person’s idea or innovation. This is a great way to decipher between a TEDx speaker and an interesting person with an “okay” idea. What will the audience walk away knowing – that this person exists, or a new idea? For example, if you were to describe a potential talk to a stranger and say more about the speaker (“this lady who runs that local charity,” “this guy who made this film”) than a specific idea, that's a clue that you need to go back to that speaker and find their idea, not their identity.",
    },
    {
      id: 2,
      text: "Look for ideas that change perceptions. (e.g., a scientific discovery that changes how you think about frogs, a philosophical argument that reshapes your notions of friendship.)",
    },
    {
      id: 3,
      text: "Look for an idea the TED world hasn't heard before. (In other words, not a copy of a TED Talk you like!)",
    },
    {
      id: 4,
      text: "Look for ideas that need to be defended – not something self-evident, but an interesting argument, perhaps with an antagonist.",
    },
    {
      id: 5,
      text: "As you know, a TEDx Talk is much different from a lecture or speech. Be prepared to explain what a TEDx Talk is and how it’s different. A speaker may have already heard of TED, which is a plus, but you should still ask speakers what they like about TED and TEDx Talks, and discuss how they’re unique.",
    },
    {
      id: 6,
      text: "Speakers must not have any political affiliations or express political views.",
    },
    {
      id: 7,
      text: "Speakers must have a Unique Selling Proposition (USP) or in other words a unique creative ideology that is background-checked by TEDx.",
    },
    { id: 8, text: "No speaker with a criminal record is allowed." },
    {
      id: 9,
      text: "Speakers must have significant achievements that can motivate and inspire others.",
    },
    {
      id: 10,
      text: "If a speaker is found to have a criminal record or violates TED guidelines, legal action will be taken against both the speaker and the respective Point of Contact (POC) person.",
    },
  ];

  const highlightWords = (text) => {
    const words = text.split(" ");
    const numToHighlight = Math.random() < 0.5 ? 1 : 2;
    const indexes = new Set();

    while (indexes.size < numToHighlight) {
      indexes.add(Math.floor(Math.random() * words.length));
    }

    return words.map((word, index) => (
      <span key={index} className={indexes.has(index) ? "text-[#EE2922]" : "text-white"}>
        {word}{" "}
      </span>
    ));
  };
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative  overflow-hidden px-2 sm:px-4 md:px-10 py-10">
   
      <img
        src={gifImage}
        alt="gif"
        className="absolute h-[200vh] sm:h-[250vh] md:h-[280vh] w-[250px] sm:w-[200px] md:w-[250px] opacity-20 sm:opacity-30 left-0"
      />
      <img
        src={gifImage}
        alt="gif"
        className="absolute h-[200vh] sm:h-[250vh] md:h-[280vh] w-[250px] sm:w-[200px] md:w-[250px] opacity-20 sm:opacity-30 right-0 rotate-180"
      />

      <div className="text-white border-2 rounded-xl max-w-5xl w-full bg-opacity-20 xl:mt-10 mt-5 backdrop-blur-[5px] relative z-10 p-4 sm:p-6 md:p-10 shadow-lg">
        <div>
          <p className="text-left text-lg sm:text-2xl md:text-3xl font-bold">
            <span className="text-[#EE2922]">TEDx</span> Guidelines for Speaker Selection
          </p>
          <div className="w-full h-[2px] bg-white mt-2 sm:mt-4 md:mt-6" />
          <div className="text-left mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm md:text-base">
              Finding extraordinary speakers isn’t always an easy task. Here are some guiding principles to follow:
            </p>
            <ol className="list-decimal ml-4 sm:ml-5 mt-3 space-y-2 text-xs sm:text-sm md:text-base leading-relaxed">
              {guidelines.map(({ id, text }) => (
                <li key={id}>{highlightWords(text)}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <p className="text-left text-lg sm:text-2xl md:text-3xl font-bold">
            Guidelines for <span className="text-[#EE2922]">TEDx</span> DAVV Team Members
          </p>
          <div className="w-full h-[2px] bg-white mt-2 sm:mt-4 md:mt-6" />
          <div className="text-left mt-3 sm:mt-4">
            <ol className="list-decimal ml-4 sm:ml-5 mt-3 space-y-2 text-xs sm:text-sm md:text-base leading-relaxed">
              {guidelinesteam.map(({ id, text }) => (
                <li key={id}>{highlightWords(text)}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidelinesTeam;

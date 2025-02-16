import React from 'react';
import gifImage from "../Guidelines/guidelines.gif";

const Guidelines = () => {
  const guidelines = [
    {
      id: 1,
      text: "It’s actually not the person you should be searching for, but the person’s idea or innovation. This is a great way to decipher between a TEDx speaker and an interesting person with an “okay” idea. What will the audience walk away knowing – that this person exists, or a new idea? For example, if you were to describe a potential talk to a stranger and say more about the speaker (“this lady who runs that local charity,” “this guy who made this film”) than a specific idea, that's a clue that you need to go back to that speaker and find their idea, not their identity.",
    },
    { id: 2, text: "Look for ideas that change perceptions. (e.g., a scientific discovery that changes how you think about frogs, a philosophical argument that reshapes your notions of friendship.)" },
    { id: 3, text: "Look for an idea the TED world hasn't heard before. (In other words, not a copy of a TED Talk you like!)" },
    { id: 4, text: "Look for ideas that need to be defended – not something self-evident, but an interesting argument, perhaps with an antagonist." },
    { id: 5, text: "As you know, a TEDx Talk is much different from a lecture or speech. Be prepared to explain what a TEDx Talk is and how it’s different. A speaker may have already heard of TED, which is a plus, but you should still ask speakers what they like about TED and TEDx Talks, and discuss how they’re unique." },
    { id: 6, text: "Speakers must not have any political affiliations or express political views." },
    { id: 7, text: "Speakers must have a Unique Selling Proposition (USP) or in other words a unique creative ideology that is background-checked by TEDx." },
    { id: 8, text: "No speaker with a criminal record is allowed." },
    { id: 9, text: "Speakers must have significant achievements that can motivate and inspire others." },
    { id: 10, text: "If a speaker is found to have a criminal record or violates TED guidelines, legal action will be taken against both the speaker and the respective Point of Contact (POC) person." },
  ];

  return (
    <section className="min-h-[145vh] bg-black flex items-center justify-center relative overflow-hidden px-4 sm:px-6 py-10">
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
      <div className="text-white border-2 rounded-xl top-6 xl:top-0 max-w-5xl w-full bg-opacity-20 backdrop-blur-[5px] relative z-10 p-5 sm:p-8 shadow-lg">
        <p className="text-left text-xl sm:text-3xl font-bold">
          <span className="text-[#EE2922]">TEDx</span> Guidelines for Speaker Selection
        </p>
        <div className="w-full sm:w-[80%] h-[2px] bg-white mt-3 sm:mt-6" />
        <div className="text-left mt-3">
          <p className="text-sm sm:text-base">
            Finding extraordinary speakers isn’t always an easy task. Here are some guiding principles to follow:
          </p>
          <ol className="list-decimal ml-4 sm:ml-5 mt-3 space-y-2 text-xs sm:text-base leading-relaxed">
            {guidelines.map(({ id, text }) => (
              <li key={id}>{text}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;

import React from "react";
const StartSteps = ({ number, text }) => {
  return (
    <div className="flex-center">
      <div className="bg-slate-800 h-20 w-20 flex-center rounded-2xl">
        <p className="font-bold text-xl text-gray-200">{number}</p>
      </div>
      <p className="flex-1 ml-5 text-gray-400">{text}</p>
    </div>
  );
};

export default StartSteps;

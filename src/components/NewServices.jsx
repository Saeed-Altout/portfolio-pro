import React from "react";
const NewServices = ({ imgUrl, name, description }) => (
  <div className="bg-[#11151f] p-5 rounded-xl">
    <div className="flex items-center justify-center flex-col text-center gap-5">
      <div className="w-12">
        <img src={imgUrl} alt="icon" className="w-full object-cover" />
      </div>
      <p className="text-gray-200 text-xl font-semibold">{name}</p>
      <p className="text-gray-400 text-md">{description}</p>
    </div>
  </div>
);

export default NewServices;

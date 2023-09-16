import React from "react";
const NewFeatures = ({ imgUrl, name, comment, positionJob }) => (
  <div className="bg-[#11151f] p-5 rounded-xl min-w-full">
    <div className="flex-between flex-wrap">
      <div className="flex items-center justify-start gap-5">
        <div className="w-12">
          <img src={imgUrl} alt="icon" className="w-full object-cover" />
        </div>
        <div>
          <p className="text-gray-200 text-xl font-semibold">{name}</p>
          <p className="text-sm text-gray-400 font-medium">{positionJob}</p>
        </div>
      </div>
      <span className="mt-5 lg:mt-0">⭐⭐⭐⭐⭐</span>
    </div>
    <p className="text-gray-400 mt-5 text-md">{comment}</p>
  </div>
);

export default NewFeatures;

import React from "react";

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="progress-loader bg-white">
        <div className="progress  bg-gray-10"></div>
      </div>
    </div>
  );
};

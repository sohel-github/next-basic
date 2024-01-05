import React from "react";

const Mission = () => {
  return (
    <div>
      <h1 className="text-3xl mb-5">Mission page</h1>
      <p className="mb-5">lorem ipsum</p>
      <button
        className="bg-black text-white px-10 py-5"
        onClick={console.log("button clicked")}
      >
        Click Me
      </button>
    </div>
  );
};

export default Mission;

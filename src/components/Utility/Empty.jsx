import React from "react";

import { Link } from "react-router-dom";
function Empty() {
  return (
    <div className="flex flex-col justify-center items-center h-3/4 ">
      <img
        src="https://s.tmimgcdn.com/scr/800x500/256000/arrow-sign-logo-vector-template-v4_256048-original.jpg "
        className="h-1/2"
      />
      <p className="text-xl text-slate-500">
        Hmm...this page doesn't exist. Try searching for something else!
      </p>
      <button className="bg-indigo-500 mt-5 hover:bg-indigo-600 text-white rounded-md px-3 py-2 text-lg font-medium">
        <Link to="/home">Back To Dashboard</Link>
      </button>
    </div>
  );
}

export default Empty;

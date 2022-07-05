import React from "react";

const Heading = ({ span, heading, text, btn }) => {
  return (
    <div className="text-slate-800 text-center">
      <span className="uppercase text-black-700">{span}</span>
      <h2 className="text-3xl md:text-4xl mb-4 mt-4 font-bold">{heading}</h2>
      <p className="text-black-700 mx-auto text-sm max-w-xl">{text}</p>
      <div className="mt-4">
        {btn && (
          <a className="px-6 py-2 rounded-md bg-main cursor-pointer text-slate-100">
            {btn}
          </a>
        )}
      </div>
    </div>
  );
};

export default Heading;

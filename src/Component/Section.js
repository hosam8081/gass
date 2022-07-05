import React from "react";

const Section = ({span, text, heading, restHead, btn, className}) => {
  return (
    <div className={`md:w-1/2 ${className}`}>
      <span className="uppercase font-medium">{span}</span>
      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 mt-6">
        {heading} <br /> {restHead}
      </h3>
      <p className="max-w-lg">
        {text}
      </p>
      <button className="mt-5 px-6 py-2 curosr-pointer rounded-sm bg-main text-slate-100">
        {btn}
      </button>
    </div>
  );
};

export default Section;

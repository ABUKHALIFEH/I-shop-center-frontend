import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center m-8">
      <div className="flex flex-col m-2 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            MAHMOUD ABU KHALIFEH
          </h5>
          <h5 className="mb-2 text-x  text-neutral-800 dark:text-neutral-50">
            React Js Developer
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            a student at Al-Balqa Applied University, currently in final year of
            studying Computer Engineering.
          </p>
        </div>
      </div>

      <div className="flex flex-col m-2 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <div className="flex flex-col justify-start p-6">
          <h2 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            RUBA DAR SROOR
          </h2>
          <h5 className="mb-2 text-x  text-neutral-800 dark:text-neutral-50">
            Node Js Developer
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            a student at Al-Balqa Applied University, currently in final year of
            studying Computer Engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

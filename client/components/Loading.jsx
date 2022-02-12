import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <div
          style={{ borderTopColor: "transparent" }}
          className="md:w-16 w-10 h-10 md:h-16 md:border-8 border-4 border-slate-900 dark:border-slate-100 border-solid rounded-full animate-spin"
        ></div>
        <p className="mt-5 md:text-xl text-base font-bold dark:text-slate-100">
          Loading Data . . .
        </p>
      </div>
    </div>
  );
};

export default Loading;

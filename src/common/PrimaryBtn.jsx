import React from "react";
// import Loading from "../utils/Loading";

const PrimaryBtn = ({ text, children, onClick, status, ...rest }) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className="flex flex-row items-center justify-center bg-primary-900 xl:py-5 py-[11px] w-full h-full rounded-4xl min-w-fit  text-white font-bold text-xs xl:text-base hover:shadow-btn duration-200 disabled:bg-gray-100 disabled:hover:shadow-none disabled:cursor-not-allowed"
    >
      {status && status === 1 ? (
        <span>loading ... </span>
      ) : (
        <>
          {text}
          <span className="text-2xl">{children}</span>
        </>
      )}
    </button>
  );
};

export { PrimaryBtn };

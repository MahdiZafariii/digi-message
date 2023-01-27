import React from "react";
// import Loading from "../utils/Loading";

const OutlineBtn = ({ text, children, onClick, status, ...rest }) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className=" cursor-pointer w-full h-full px-2 flex items-center justify-center border border-primary-900 rounded-4xl font-bold text-xs xl:text-base text-primary-900 disabled:border-gray-100 disabled:text-gray-100"
    >
      {status && status === 1 ? (
        <span>loadning ...</span>
      ) : (
        <>
          {text}
          <span className="text-2xl">{children}</span>
        </>
      )}
    </button>
  );
};

export default OutlineBtn;
<button>نمایش مقالات</button>;

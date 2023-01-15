import React, { useState } from "react";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";

const Input = ({
  label,
  name,
  formik,
  type = "text",
  show,
  maxLength,
  disable,
}) => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div className="relative z-0 w-full md:max-h-[46px] max-h-[42px] input-controll">
      <input
        maxLength={maxLength}
        id={name}
        type={passwordShow ? "text" : type}
        placeholder={label}
        disabled={disable ? true : false}
        {...formik.getFieldProps({ name })}
        className={`pt-3 pb-2 block w-full px-6 mt-0  border rounded-cs md:max-h-[46px] max-h-[42px] bg-primary-100 autofill:bg-primary-100  appearance-none focus:outline-none focus:ring-0 focus:bg-primary-100  disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-200 disabled:hover:shadow-none ${
          formik.errors[name] && formik.touched[name]
            ? "shadow-err border-red-300 hover:shadow-err"
            : "hover:shadow-btn border-primary-400 hover:border-primary-300 focus:border-primary-300"
        }`}
      />

      {show ? (
        <button
          className="text-gray-400 absolute md:text-2xl text-lg top-3 left-4"
          onClick={() => setPasswordShow(!passwordShow)}
          type={"button"}
        >
          {show ? <IoEyeSharp /> : <IoEyeOff />}
        </button>
      ) : null}

      {formik.errors[name] && formik.touched[name] && (
        <div className="md:text-xs text-[10px] text-red-300 mt-1.5">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Input;

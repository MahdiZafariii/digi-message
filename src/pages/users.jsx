import UserList from "@/Components/UserList";
import React from "react";
import { MdArrowBack, MdSearch } from "react-icons/md";

const users = ({}) => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-14  bg-primary-900 px-6 py-2 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <button className="text-white flex flex-col text-2xl items-start">
            <MdArrowBack />
          </button>
          <div className="text-sm text-white">Create Group</div>
        </div>
        <button className="text-white text-2xl ">
          <MdSearch />
        </button>
      </div>
      <div className="p-6 h-[calc(100vh-56px)] overflow-y-auto max-h-[calc(100vh-56px)] flex flex-col gap-5 items-center">
        {[
          1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item) => (
          <div className="w-full">
            <UserList />
          </div>
        ))}
      </div>
    </div>
  );
};

export default users;

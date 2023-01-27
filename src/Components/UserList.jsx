import React from "react";

const UserList = ({}) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#FEE8EA] flex items-center justify-center ">
          M
        </div>
        <div className="text-white flex flex-col items-start gap-1">
          <span className="text-[10px] text-gray-900">Mahdi Zafari</span>
          <p className="text-[10px] text-gray-600">I was here a while ago</p>
        </div>
      </div>
    </div>
  );
};

export default UserList;

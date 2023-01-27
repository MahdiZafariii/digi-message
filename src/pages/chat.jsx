import { ImageChatBg } from "@/assets/Image";
import { useAuth } from "@/Provider/AuthProvider";
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import {
  MdArrowBack,
  MdMic,
  MdMoreVert,
  MdOutlineAttachFile,
  MdOutlineEmojiEmotions,
  MdPhone,
  MdSend,
  MdStarOutline,
} from "react-icons/md";
import io from "socket.io-client";
let socket;

const Chat = ({}) => {
  const { user, loading } = useAuth();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (user) {
      socket = io.connect("http://89.39.208.123:2023", {
        auth: {
          token: user && user.token,
        },
      });
    }
  }, [loading]);
  const [value, setValue] = useState("");
  socket &&
    socket.on("message", (data) => {
      setMessages([...messages, data]);
    });
  const sendMessage = () => {
    socket && socket.emit("send", value);
    setValue("");
  };

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-14  bg-primary-900 px-6 py-2 flex flex-row items-end justify-between">
        <div className="flex flex-row items-center gap-4">
          <button className="text-white text-2xl ">
            <MdArrowBack />
          </button>
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FEE8EA] flex items-center justify-center ">
              {user && user.name.slice(0, 1)}
            </div>
            <div className="text-white flex flex-col items-start gap-1">
              <span className="text-xs">{user && user.name}</span>
              <p className="text-[8px] ">I was here a while ago</p>
            </div>
          </div>
        </div>
        <div className="text-2xl flex flex-row items-center gap-3 text-white">
          <button>
            <MdPhone />
          </button>
          <button>
            <MdMoreVert />
          </button>
        </div>
      </div>
      <div className=" h-[calc(100vh-56px)] w-full relative bg-red-100">
        <Image
          src={ImageChatBg}
          alt="background"
          className="object-fill absolute z-0"
          layout="fill"
        />
        <div className="z-30  relative p-10 flex flex-col gap-6 ">
          {messages.map((item) => (
            <div className="flex flex-row items-start gap-2 bg-white w-fit p-2 rounded-tr-[9px] rounded-b-[15px]">
              <button onMo className="text-xl">
                <MdStarOutline />
              </button>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sticky bottom-4 right-0  px-6 w-full flex flex-row items-center gap-2">
        <div className="bg-white rounded-4xl w-full h-12 flex flex-row items-center justify-between px-4 py-3">
          <button className="text-2xl text-primary-400">
            <MdOutlineEmojiEmotions />
          </button>
          <input
            type="text"
            className="w-full h-full outline-none px-2 placeholder:text-primary-400"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Message ..."
          />
          {value.length === 0 ? (
            <div className="text-2xl text-primary-400 flex flex-row items-center gap-3">
              <button>
                <MdOutlineAttachFile />
              </button>{" "}
              <button>
                <MdMic />
              </button>
            </div>
          ) : null}
        </div>
        {value.length > 0 ? (
          <button
            onClick={() => {
              console.log(socket);
              sendMessage();
            }}
            className="w-11 h-11 min-w-[44px] rounded-full bg-primary-900 text-white text-2xl  flex items-center justify-center"
          >
            <MdSend />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Chat;

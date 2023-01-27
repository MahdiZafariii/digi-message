import { IconConversationBg } from "@/assets/Icons";
import { ImageChatBg } from "@/assets/Image";
import { useAuth } from "@/Provider/AuthProvider";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdAdd,
  MdGroups,
  MdLiveTv,
  MdMenu,
  MdPerson,
  MdPersonAdd,
  MdSearch,
  MdStarOutline,
} from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Chat = ({}) => {
  const { user, loading } = useAuth();
  const [showBtn, setShowBtn] = useState(false);
  const router = useRouter();
  const [value, setValue] = useState("");
  const variantsFirst = {
    closed: { opacity: 1, scale: 0.5, top: 0 },
    open: { opacity: 1, scale: 1, top: -56 },
  };
  const variantsTwo = {
    closed: { opacity: 1, scale: 1, top: 0, right: 20 },
    open: { opacity: 1, scale: 1, top: -40, right: 80 },
  };
  const variantsLast = {
    closed: { opacity: 1, scale: 0.5, right: 20 },
    open: { opacity: 1, scale: 1, top: 10, right: 96 },
  };
  const variantsAdd1 = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const variantsAdd2 = {
    closed: { opacity: 1, rotate: [0, 90] },
    open: { opacity: 1, right: 96 },
  };
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-14  bg-primary-900 px-6 py-2 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <button className="text-white flex flex-col text-2xl items-start">
            <MdMenu />
          </button>
          <div className="text-sm text-white">DiGi Message</div>
        </div>
        <button className="text-white text-2xl ">
          <MdSearch />
        </button>
      </div>
      <div className=" h-[calc(100vh-56px)] w-full relative ">
        <Image
          src={IconConversationBg}
          alt="background"
          className="object-scale-down w-full absolute z-0 h-full"
        />
        <span className="absolute bottom-32 right-[calc(100%-65%)] text-sm text-primary-600">
          Not Yet Conversation
        </span>
        <div className="h-12 text-white w-full bg-primary-900 flex flex-row items-center justify-between z-30 relative">
          <button className="w-1/4">All</button>
          <button className="w-1/4">Personal</button>
          <button className="w-1/4">Channel</button>
          <button className="w-1/4">Groups</button>
        </div>
      </div>
      <div className="sticky bottom-4 right-0  px-6 w-full flex flex-row items-center justify-end gap-2">
        <button
          onClick={() => setShowBtn(!showBtn)}
          className="w-12  relative z-10 h-12 min-w-[44px] rounded-full bg-primary-900 text-white text-2xl  flex items-center justify-center"
        >
          {/* <MdAdd /> */}
          <motion.span
            animate={showBtn ? "open" : "closed"}
            transition={{ duration: 0.3 }}
            variants={variantsAdd1}
            className="w-3 bg-white h-0.5 min-h-[2px] min-w-[12px] absolute"
          ></motion.span>
          <motion.span
            animate={showBtn ? "open" : "closed"}
            transition={{ duration: 0.3 }}
            variants={variantsAdd2}
            className="w-3 bg-white h-0.5 min-h-[2px] min-w-[12px] rotate-45"
          ></motion.span>
        </button>
        <motion.button
          animate={showBtn ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          variants={variantsFirst}
          className={`w-10 -top-14 right-7 h-10 z-0 text-2xl  items-center justify-center rounded-full bg-primary-50 text-primary-900 absolute ${
            showBtn ? "flex" : "hidden"
          } `}
        >
          <MdLiveTv />
        </motion.button>
        <motion.button
          animate={showBtn ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          variants={variantsTwo}
          onClick={() => router.push("/contacts")}
          className={`w-10 -top-14 right-7 z-0 h-10 text-2xl items-center justify-center rounded-full bg-primary-50 text-primary-900 absolute ${
            showBtn ? "flex" : "hidden"
          }`}
        >
          <MdPerson />
        </motion.button>
        <motion.button
          animate={showBtn ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          variants={variantsLast}
          className={`w-10 top-3 right-24 h-10 text-2xl  items-center justify-center rounded-full bg-primary-50 text-primary-900 absolute ${
            showBtn ? "flex" : "hidden"
          }`}
        >
          <MdGroups />
        </motion.button>
      </div>
    </div>
  );
};

export default Chat;

import { IconContacsNull, IconConversationBg } from "@/assets/Icons";
import { ImageChatBg } from "@/assets/Image";
import { useAuth } from "@/Provider/AuthProvider";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdAdd,
  MdArrowBack,
  MdGroups,
  MdLiveTv,
  MdMenu,
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

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-14  bg-primary-900 px-6 py-2 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <button className="text-white flex flex-col text-2xl items-start">
            <MdArrowBack />
          </button>
          <div className="text-sm text-white">Your Contact</div>
        </div>
        <button className="text-white text-2xl ">
          <MdSearch />
        </button>
      </div>
      <div className=" h-[calc(100vh-56px)] w-full relative ">
        <Image
          src={IconContacsNull}
          alt="background"
          className="object-scale-down w-full absolute z-0 h-full"
        />
        <span className="absolute bottom-48 right-[calc(100%-60%)] text-sm text-primary-600">
          Not Yet Contact{" "}
        </span>
      </div>
      <div className="sticky bottom-4 right-0  px-6 w-full flex flex-row items-center justify-end gap-2">
        <button
          onClick={() => router.push("/add-contacts")}
          className="w-12  relative z-10 h-12 min-w-[44px] rounded-full bg-primary-900 text-white text-2xl  flex items-center justify-center"
        >
          <MdAdd />
        </button>
      </div>
    </div>
  );
};

export default Chat;

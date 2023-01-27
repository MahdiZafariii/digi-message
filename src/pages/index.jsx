import { IconBgBtnShape, IconIndexPage } from "@/assets/Icons";
import OutlineBtn from "@/common/OutlineBtn";
import { PrimaryBtn } from "@/common/PrimaryBtn";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiOutlinePlay } from "react-icons/hi2";

export default function Home() {
  const [level, setLevel] = useState(0);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Digi Message</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-7 pt-16 flex flex-col gap-8 items-center ">
        <h1 className="text-base font-bold">Welcom to digi message </h1>
        <div className="flex px-3 items-center flex-col gap-1">
          <div>
            <Image src={IconIndexPage} alt="digi-message" />
          </div>
          <p className="text-[10px] text-center">
            We provide you with the safest place in digi message
          </p>
        </div>
        {level === 0 ? (
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-32 h-14 flex items-center justify-center">
              <Image
                alt="bgBtn"
                src={IconBgBtnShape}
                className="absolute top-0 right-0 -z-30"
              />
              <button
                onClick={() => setLevel(level + 1)}
                className="flex text-primary-900 tetx-sm flex-row items-center gap-2"
              >
                lets go...
                <span className="bg-primary-900 text-white flex items-center justify-center w-9 h-9  z-30 rounded-full">
                  <HiOutlinePlay />
                </span>
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-1">
              <div className="w-11 h-1 bg-primary-900 rounded-lg"></div>
              <div className="w-1 h-1 rounded-full bg-primary-50"></div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full h-12 ">
              <PrimaryBtn
                text="Register"
                onClick={() => router.push("/signup")}
              />
            </div>
            <div className="w-full h-12 ">
              <OutlineBtn text="Login" onClick={() => router.push("/login")} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

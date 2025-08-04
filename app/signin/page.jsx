"use client";
import Link from "next/link";
import Image from "next/image";
/************ Absolute image path ***********/
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <header className="p-5">
        <Link href="/" className="flex items-center justify-start">
          <span className="text-[#0A66c2] font-semibold text-2xl md:text-3xl">
            Linked
          </span>
          <span>
            <Image
              src="/images/logo.svg"
              alt="Beautiful linkedin logo"
              width={25}
              height={25}
            ></Image>
          </span>
        </Link>
      </header>
      {/* form input field */}
      <main className="mx-4 md:mx-[400px] bg-inherit md:shadow-lg">
        <h2 className="text-[#000000E6] text-2xl">Sign in </h2>
        <p>Stay connected on your professional world</p>
        <form action="">
          <div className="mt-4">
            <label htmlFor="email-phone" className="pb-4">
              Email or Phone number
            </label>{" "}
            <br />
            <input
              type="text"
              name=""
              id="email-phone"
              className="border-[1px] border-slate-500 w-full p-3 rounded-sm hover:transition hover:bg-gray-100 hover:outline hover:outline-1"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="pb-4">
              Password (6+ characters)
            </label>{" "}
            <br />
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id="password"
              className="relative border-[1px] border-slate-500 w-full p-3 rounded-sm hover:transition hover:bg-gray-100 hover:outline hover:outline-1"
            />
            <span className="absolute md:right-[27rem] right-8 translate-y-4 text-[#0A66c2] font-bold text-sm">
              <Button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </span>
          </div>
          <div className="mt-8">
            <Button className="w-full rounded-full py-[0.7rem] bg-[#0A66c2] text-white text-sm font-bold hover:transition hover:bg-[#004182]">
              Continue
            </Button>
          </div>
        </form>
        {/* other login options */}
        <div>
          <div className="mt-10 flex">
            <div className="flex-1 border-t-[1px] border-slate-500"></div>
            <div className="-mt-3 ms-4 me-4">or</div>
            <div className="flex-1 border-t-[1px] border-slate-500"></div>
          </div>
          <div className="mt-8">
            <Button className="flex items-center justify-center gap-2 w-full rounded-full py-[0.7rem] bg-none border-[1px] border-slate-300 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-100">
              <span>
                <GoogleIcon sx={{ fontSize: "20px" }} />
              </span>
              Continue with Google
            </Button>
          </div>
          <div className="mt-4">
            <Button className="flex items-center justify-center gap-2 w-full rounded-full py-[0.7rem] bg-none border-[1px] border-slate-300 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-100">
              <span>
                <AppleIcon sx={{ fontSize: "20px" }} />
              </span>
              Sign in with Apple
            </Button>
          </div>
          <div className="mt-4">
            <button className="flex items-center justify-center gap-2 w-full rounded-full py-[0.7rem] bg-none border-[1px] border-slate-300 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-100">
              <span>
                <Image
                  alt="One-time link"
                  src="/images/link_line.PNG"
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
              </span>
              Sign in with one-time link
            </button>
          </div>
          <div className="mt-8">
            <p className="text-center">
              New to Linkedin?{" "}
              <Link
                href="/signup"
                className="text-[#0A66c2] font-normal active:bg-blue-50 active:rounded-lg active:underline"
              >
                Join now
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

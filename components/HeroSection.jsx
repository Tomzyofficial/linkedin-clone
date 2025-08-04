"use client";
import Image from "next/image";
import Link from "next/link";

/********** Absolute image import ***********/
import homeImgSmallDev from "@/public/images/home-page-small-device-img.svg";
import couple from "@/public/images/couple.svg";
import ladyWorking from "@/public/images/home-page-lady-working.svg";
import light from "@/public/images/light-icon.svg";
import GoogleIcon from "@mui/icons-material/Google";

/********** Mui icons ***********/
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import dynamic from "next/dynamic";

/********** React Hooks ***********/
import { useState } from "react";

import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const [chooseTopic, setChooseTopic] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const DynamicImport = dynamic(() => import("@/components/CoursesList"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  // Explore collaborative articles
  const explores = [
    { label: "Marketing", href: "#" },
    { label: "Public Administration", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "Engineering", href: "#" },
    { label: "IT Services", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: " Business Administration", href: "#" },
    { label: "Telecommunication", href: "#" },
    { label: "HR Management", href: "#" },
    {
      label: 10,
      label: "Show all",
      href: "#",
      style: { border: "1px solid #0A66c2", color: "#0A66c2" },
    },
  ];

  // Find the right job or internship
  const jobIntern = [
    { label: "Engineering", href: "#" },
    { label: " Business Development", href: "#" },
    { label: "Finance", href: "#" },
    { label: " Retail Associate", href: "#" },
    { label: "Customer Service", href: "#" },
    { label: "Operations", href: "#" },
    { label: " Information Technology", href: "#" },
    {
      label: "Show more",
      href: "#",
      icon: <ExpandMoreOutlinedIcon sx={{ fontSize: "25px" }} />,
    },
  ];

  return (
    <>
      <aside>
        <h1 className="text-3xl font-thin text-[#B24020] mt-10">
          Welcome to your professional community
        </h1>
      </aside>

      <main>
        <form action="">
          <div>
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
              Password
            </label>{" "}
            <br />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="relative border-[1px] border-slate-500 w-full p-3 rounded-sm hover:transition hover:bg-gray-100 hover:outline hover:outline-1"
            />
            <span className="absolute md:right-[2rem] right-8 translate-y-4 text-[#0A66c2] font-bold text-sm">
              <Button
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </span>
          </div>
          <div className="mt-8">
            <Button
              onClick={() => alert("clicked submit buttn")}
              className="w-full rounded-[30px] py-[0.8rem] px-[1.4rem] bg-[#0A66c2] text-white text-sm font-bold hover:transition hover:bg-[#004182]"
            >
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
          <div className="my-6 relative">
            <Button
              onClick={() => alert("Clicked")}
              className="relative w-full rounded-[30px] py-[10px] px-[1.4rem] rounded-[30px] w-full py-[0.4px] px-[1.2rem] bg-transparent border-[1px] border-slate-300 text-neutral-600 text-md font-normal"
            >
              <span className="absolute -translate-x-8">
                <GoogleIcon sx={{ fontSize: "20px" }} />
              </span>
              continue with Google
            </Button>
          </div>
          <div>
            <Link
              href="/signup"
              style={{
                width: "100%",
                borderRadius: "30px",
                padding: "12px 24px",
              }}
              className="inline-flex justify-center bg-transparent border-[1px] border-slate-300 text-neutral-600 text-md font-normal"
            >
              New to LinkedIn? Join now
            </Link>
          </div>
        </div>
      </main>

      <article>
        <div className="my-4">
          <Image
            src={homeImgSmallDev}
            alt="small device"
            sizes="5vw"
            width={280}
            height={260}
            className="mx-auto w-auto"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8 bg-zinc-100 py-16 p-3 text-stone-900">
          <div className="py-10 lg:py-0">
            <h1 className="text-3xl pb-4">Explore collaborative articles</h1>
            <p className="text-md text-[#000000e6]">
              We&apos;re unlocking community knowledge in new way. Experts add
              and insights directly into each article started with the help of
              AI
            </p>
          </div>
          <div>
            {explores.map((exp) => (
              <Link
                key={exp.label}
                href={exp.href}
                style={exp.style}
                className="m-1 inline-flex justify-center items-center border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200 px-[24px] py-[12px] rounded-[30px]"
              >
                {exp.label}
              </Link>
            ))}
          </div>
        </div>
      </article>

      <aside className="bg-orange-50 flex space-x-4 p-2">
        <div>
          <Image
            src={light}
            sizes="5vw"
            width={70}
            height={100}
            alt="light"
            className="w-auto"
          />
        </div>

        <div className="space-y-3">
          <p>
            6M+ job opportunities on the linkedin app Unlock curated just for
            you
          </p>
          <Link
            href="#"
            style={{ borderRadius: "30px", padding: "6px 16px" }}
            className="inline-flex justify-center bg-transparent border-[1px] border-[#0A66c2]  text-[#0A66c2] text-md font-normal hover:transition hover:bg-blue-50"
          >
            Use the app
          </Link>
        </div>
      </aside>

      <article>
        <div className="flex flex-col lg:flex-row lg:gap-8 py-16 p-3 text-stone-900">
          <div>
            <h1 className="text-3xl">
              Find the right job or internshipt for you
            </h1>
            <p className="text-md text-stone-500 uppercase pt-2">
              suggested searches
            </p>
          </div>
          <div>
            {jobIntern.map((jobInt) => (
              <Link
                key={jobInt.label}
                href={jobInt.href}
                style={jobInt.style}
                className="m-1 inline-flex justify-center items-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200 px-[24px] py-[12px] rounded-[30px]"
              >
                {jobInt.label}
                {jobInt.icon}
              </Link>
            ))}
          </div>
        </div>
      </article>

      <section>
        <section>
          <div className="my-8">
            <Image
              src={couple}
              alt="couple"
              sizes="auto"
              style={{ width: "60%", height: "60%" }}
            ></Image>

            <div className="space-y-6 my-20">
              <h1 className="text-3xl text-[#000000E6]">
                Connect with people <br /> who can help
              </h1>
              <Link
                href="#"
                style={{ borderRadius: "30px", padding: "12px 24px" }}
                className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md hover:transition hover:bg-blue-50"
              >
                Find people you know
              </Link>
            </div>

            <div className="my-8">
              <Image
                src={ladyWorking}
                alt="lady working"
                sizes="5dvw"
                style={{ width: "65%", height: "65%" }}
              ></Image>
              <h1 className="text-3xl text-[#000000E6] py-8">
                Learn the skills you <br /> need to succeed
              </h1>
            </div>

            <div>
              <Button
                onClick={() => setChooseTopic(!chooseTopic)}
                className="flex justify-between items-center hover:bg-gray-100 w-full text-lg border-[1px] border-slate-400 text-neutral-600 p-3 rounded-sm"
              >
                Choose a topic to learn about
                <ChevronRightOutlinedIcon sx={{ fontSize: "25px" }} />
              </Button>
            </div>
            {chooseTopic && <DynamicImport />}
          </div>
        </section>

        <section className="p-6 bg-zinc-100 mt-[100px]">
          <h2 className="text-[#B24020] text-3xl">Who is LinkedIn for? </h2>
          <h3 className="text-lg">
            Anyone looking to navigate their professional life
          </h3>
          <div className="my-6 space-y-4">
            <div className="space-">
              <Link
                href="#"
                className="flex justify-between items-center bg-[#EAE6D7] p-4 w-full inline-flex"
              >
                Find a coworker or classmate
                <ChevronRightOutlinedIcon sx={{ fontSize: "25px" }} />
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="flex justify-between items-center bg-[#EAE6D7] p-4 w-full inline-flex"
              >
                Find a new job
                <ChevronRightOutlinedIcon sx={{ fontSize: "25px" }} />
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="flex justify-between items-center bg-[#EAE6D7] p-4 w-full inline-flex"
              >
                Find a course or training
                <ChevronRightOutlinedIcon sx={{ fontSize: "25px" }} />
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="space-y-6 p-4">
            <h1 className="text-3xl text-[#000000E6]">
              Join your colleagues, classmates, and friends on LinkedIn
            </h1>
            <Link
              href="#"
              style={{ borderRadius: "30px", padding: "12px 24px" }}
              className="inline-flex justify-center bg-[#0A66c2] border-[1px] text-white text-md hover:transition hover:bg-[#004182]"
            >
              Get started
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

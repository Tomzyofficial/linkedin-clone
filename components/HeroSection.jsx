"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import homeImgSmallDev from "public/image/home-page-small-device-img.svg";
import couple from "public/image/couple.svg";
import ladyWorking from "public/image/home-page-lady-working.svg";
import light from "public/image/light-icon.svg";
import dynamic from "next/dynamic";
import { useState } from "react";

export function HeroSection() {
  const [state, setState] = useState(false);

  const DynamicImport = dynamic(() =>
    import("./CoursesList").then((mod) => mod.courses)
  );

  // Explore collaborative articles
  const explores = [
    { id: 1, label: "Marketing", href: "#" },
    { id: 2, label: "Public Administration", href: "#" },
    { id: 3, label: "Healthcare", href: "#" },
    { id: 4, label: "Engineering", href: "#" },
    { id: 5, label: "IT Services", href: "#" },
    { id: 6, label: "Sustainability", href: "#" },
    { id: 7, label: " Business Administration", href: "#" },
    { id: 8, label: "Telecommunication", href: "#" },
    { id: 9, label: "HR Management", href: "#" },
    {
      label: 10,
      label: "Show all",
      href: "#",
      style: { border: "1px solid #0A66c2", color: "#0A66c2" },
    },
  ];

  // Find the right job or internship
  const jobIntern = [
    { id: 1, label: "Engineering", href: "#" },
    { id: 2, label: " Business Development", href: "#" },
    { id: 3, label: "Finance", href: "#" },
    { id: 4, label: " Retail Associate", href: "#" },
    { id: 5, label: "Customer Service", href: "#" },
    { id: 6, label: "Operations", href: "#" },
    { id: 7, label: " Information Technology", href: "#" },
    {
      id: 8,
      label: "Show more",
      href: "#",
      icon: (
        <FontAwesomeIcon
          icon={faChevronDown}
          size="sm"
          style={{ width: "20px", paddingLeft: "5px" }}
        />
      ),
    },
  ];

  return (
    <>
      <article>
        <div className="my-4">
          <Image
            src={homeImgSmallDev}
            alt="small device"
            sizes="5vw"
            width={280}
            height={260}
            className="mx-auto"
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
                key={exp.id}
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
          <Image src={light} sizes="5vw" width={70} height={100} alt="light" />
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
                key={jobInt.id}
                href={jobInt.href}
                style={jobInt.style}
                className="m-1 inline-flex justify-center items-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200 px-[24px] py-[12px] rounded-[30px]"
              >
                {jobInt.label} {jobInt.icon}
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
              <button
                onClick={() => setState(!state)}
                className="flex justify-between items-center hover:bg-gray-100 w-full text-lg border-[1px] border-slate-400 text-neutral-600 p-3 rounded-sm"
              >
                Choose a topic to learn about
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size="sm"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </button>
            </div>
            {state && <DynamicImport />}
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
                <FontAwesomeIcon icon={faChevronRight} size="sm" />
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="flex justify-between items-center bg-[#EAE6D7] p-4 w-full inline-flex"
              >
                Find a new job
                <FontAwesomeIcon icon={faChevronRight} size="sm" />
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="flex justify-between items-center bg-[#EAE6D7] p-4 w-full inline-flex"
              >
                Find a course or training
                <FontAwesomeIcon icon={faChevronRight} size="sm" />
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

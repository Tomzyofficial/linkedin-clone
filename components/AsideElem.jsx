"use client";
import Image from "next/image";
import Link from "next/link";
import couple from "public/image/couple.svg";
import ladyWorking from "public/image/home-page-lady-working.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import dynamic from "next/dynamic";

export default function AsideElem() {
  const [state, setState] = useState(false);
  const caretDown = (
    <FontAwesomeIcon
      icon={faCaretDown}
      size="sm"
      style={{
        width: "20px",
        height: "20px",
        right: "30px",
        position: "absolute",
      }}
    />
  );

  const chevronRight = (
    <FontAwesomeIcon
      icon={faChevronRight}
      size="sm"
      style={{ position: "absolute", right: "20" }}
    />
  );

  const DynamicImport = dynamic(() =>
    import("./CoursesList").then((mod) => mod.courses)
  );
  return (
    <section>
      <section>
        <div className="translate-x-6 my-8">
          <div className="my-8">
            <Image
              src={couple}
              alt="couple"
              sizes="auto"
              style={{ width: "60%", height: "60%" }}
            ></Image>
          </div>

          <div className="space-y-6">
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
              className="relative hover:bg-gray-100 hover:text-slate-700 w-[85%] text-lg inline-flex bg-inherit border-[1px] border-slate-400 text-neutral-600 py-3 px-4 rounded-sm"
            >
              Choose a topic to learn about {caretDown}
            </button>
          </div>
          {state && <DynamicImport />}
        </div>
      </section>

      <section className="p-6 bg-zinc-100 mt-[100px]">
        <h2 className="text-[#B24020] text-3xl">Who is LinedIn for? </h2>
        <h3 className="text-lg">
          Anyone looking to navigate their professional life
        </h3>
        <div className="my-6 space-y-4">
          <div className="space-">
            <Link
              href="#"
              className="relative bg-[#EAE6D7] p-4 w-full inline-flex"
            >
              Find a coworker or classmate {chevronRight}
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="relative bg-[#EAE6D7] p-4 w-full inline-flex"
            >
              Find a new job {chevronRight}
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="relative bg-[#EAE6D7] p-4 w-full inline-flex"
            >
              Find a course or training {chevronRight}
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="space-y-6 p-4">
          <h1 className="text-3xl text-[#000000E6]">
            Join your colleagueds, classmates, and friends on LinkedIn
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
  );
}

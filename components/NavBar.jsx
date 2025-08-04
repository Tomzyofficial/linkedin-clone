"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
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

          <div className="gap-2 flex items-center">
            <Link
              href="/dashboard"
              className="font-md hover:bg-slate-100 hover:rounded-full"
            >
              Dashboard
            </Link>
            <Link
              href="/signup"
              className="font-md hover:bg-slate-100 hover:rounded-full"
            >
              Join now
            </Link>
            <Link
              href="/signin"
              className="inline-flex justify-center items-center rounded-full px-6 py-3 cursor-pointer border border-[#0A66c2] text-[#0A66c2] hover:bg-blue-50 transition"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

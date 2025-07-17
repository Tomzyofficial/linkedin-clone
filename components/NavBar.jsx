"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <header>
        <nav className="flex justify-between">
          <Link href="/" className="flex items-center justify-center">
            <span className="text-[#0A66c2] font-semibold text-2xl md:text-3xl">
              Linked
            </span>
            <span>
              <Image
                src="/image/logo.svg"
                alt="Beautiful linkedin logo"
                width={25}
                height={25}
              ></Image>
            </span>
          </Link>

          <div className="space-x-[30px] flex">
            <Link
              href="/signup"
              className="text-[#000000BF] font-md hover:bg-slate-50 py-4 px-4 hover:rounded-full"
            >
              Join now
            </Link>
            <button
              onClick={() => router.push("../signin")}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "25px",
                padding: "12px 24px",
              }}
              className="border-[1px] border-[#0A66c2] text-[#0A66c2] hover:transiton hover:bg-blue-50"
            >
              Sign In
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

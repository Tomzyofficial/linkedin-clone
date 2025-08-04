"use client";
import Image from "next/image";
import Link from "next/link";
import linkedInLogo from "@/public/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import homeIcon from "@/public/images/home-icon.svg";
import myNetwork from "@/public/images/my-network.svg";
import jobs from "@/public/images/jobs.svg";
import messages from "@/public/images/messages.svg";
import notifications from "@/public/images/notifications.svg";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathname = usePathname();
  return (
    <>
      <header className="bg-white">
        <nav className="flex px-4 md:px-8 lg:px-12 items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={linkedInLogo}
              width={50}
              height={50}
              alt="site logo"
              className="max-w-[2.4rem]"
            />
          </Link>
          <div className="ml-4 flex items-center md:w-0 lg:w-[280px] focus:outline-none lg:rounded-full lg:border lg:border-slate-300 lg:gap-1 lg:px-2">
            <SearchIcon sx={{ color: "GrayText" }} />
            <input
              type="search"
              placeholder="Search"
              className="hidden lg:outline-none lg:w-full lg:block placeholder:text-[#00000099] p-1"
            />
          </div>
          <ul className="flex flex-1 items-center justify-evenly text-xs">
            <li className="flex-1 relative flex flex-col items-center">
              <Link href="/dashboard">
                <Image
                  src={homeIcon}
                  alt="home icon"
                  className="mx-auto w-[24px] h-[24px]"
                />
              </Link>
              <Link
                href="/dashboard"
                className={`hidden lg:block ${
                  pathname === "/dashboard" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <span className="active-indicator"></span>
            </li>
            <li className="flex-1 flex flex-col items-center">
              <Link href="#">
                <Image
                  src={myNetwork}
                  alt="network icon"
                  className="mx-auto w-[24px] h-[24px]"
                />
              </Link>
              <Link href="#" className="hidden lg:block">
                My Network
              </Link>
            </li>
            <li className="flex-1 flex flex-col items-center">
              <Link href="#">
                <Image
                  src={jobs}
                  alt="network icon"
                  className="mx-auto w-[24px] h-[24px]"
                />
              </Link>
              <Link href="#" className="hidden lg:block">
                Jobs
              </Link>
            </li>
            <li className="flex-1 flex flex-col items-center">
              <Link href="#">
                <Image
                  src={messages}
                  alt="network icon"
                  className="mx-auto w-[24px] h-[24px]"
                />
              </Link>
              <Link href="#" className="hidden lg:block">
                Messages
              </Link>
            </li>
            <li className="flex-1 flex flex-col items-center">
              <Link href="#">
                <Image
                  src={notifications}
                  alt="network icon"
                  className="mx-auto w-[24px] h-[24px]"
                />
              </Link>
              <Link href="#" className="hidden lg:block">
                Notification
              </Link>
            </li>
            <li className="flex-1 relative flex flex-col items-center">
              <button>
                <Image
                  src="/images/profile-img.PNG"
                  alt="profile image"
                  className="mx-auto flex-0"
                  width={100}
                  height={100}
                  style={{
                    borderRadius: "50%",
                    height: "24px",
                    width: "24px",
                  }}
                />
                <span className="relative hidden lg:block">Me</span>
                <span className="absolute translate-x-[10px] -translate-y-[18px] hidden lg:inline">
                  <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
                </span>
              </button>
            </li>
            <li className="flex-1 relative hidden lg:flex flex-col items-center">
              <button className="border-none">
                <Image
                  src="/images/business.svg"
                  alt="business icon"
                  className="mx-auto"
                  width={24}
                  height={24}
                />
                <span className="relative hidden lg:block">For Business</span>
                <span className="absolute translate-x-[26px] -translate-y-[18px] md:hidden lg:inline">
                  <ArrowDropDownIcon />
                </span>
              </button>
            </li>
            <li className="flex-1 hidden md:flex flex-col items-center">
              <Link
                href="#"
                className="text-[#915907] w-[80%] flex text-center text-xs underline md:max-xl:w-[auto]"
              >
                Try Premium for free
              </Link>
            </li>
            <li className="flex-1 flex justify-center">
              <LinearScaleIcon />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

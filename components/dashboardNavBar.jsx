'use client';
import Image from "next/image";
import Link from "next/link";
import linkedInLogo from "../public/image/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import homeIcon from "../public/image/home-icon.svg";
import myNetwork from "../public/image/my-network.svg";
import jobs from "../public/image/jobs.svg";
import messages from "../public/image/messages.svg";
import notifications from "../public/image/notifications.svg";
import { usePathname } from "next/navigation";
const search = <FontAwesomeIcon icon={faSearch} size="sm" style={{ width: '15px', height: '15px', color: '#00000099' }} />
const caretDown = <FontAwesomeIcon icon={faCaretDown} size="sm" style={{ width: '12px', height: '12px' }} />

export default function DashboardNav() {
  const pathname = usePathname();
  return (
    <>
      <header className="bg-white h-fit">
        <nav className="flex justify-around md:mx-8 md:max-xl:mx-2">
          {/* logo/profile-image and search input */}
          <div className="flex space-x-2 items-center md:pe-[50px] md:max-xl:pe-[20px]">
            <div>
              <Image src="/image/profile-img.png" alt="profile image" width={20} height={20} style={{ borderRadius: '50%', height: '30px', width: '30px', }} className="md:hidden"></Image>
              <Image src={linkedInLogo} width={200} height={200} alt="site logo" className="hidden md:block md:w-[2.6rem] md:h-[2.6rem]"></Image>
            </div>
            <div className="relative">
              <input type="search" placeholder="Search" className="relative h-[34px] w-[280px] md:w-0 lg:w-[280px] focus:outline-none placeholder:text-[#00000099] pl-8 md:pl-0 lg:pl-8 border border-[#EDF3F8] bg-[#EDF3F8] md:border-none" />
              <span className="absolute left-0 pl-2 translate-y-2">{search}</span>
            </div>
          </div>
          {/* other features */}
          <div>
            <Link href="#">
              <Image src="/image/message-icon.svg" alt="message icon" width={100} height={100} className="md:hidden" style={{ width: '2rem', height: '2rem' }}></Image>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-8 text-xs md:max-xl:space-x-6">
              <li>
                <Link href="/dashboard">
                  <Image src={homeIcon} alt="home icon" className="mx-auto w-[24px] h-[24px]"></Image>
                </Link>
                <Link href="/dashboard" className={`link md:hidden lg:block ${pathname === '/dashboard' ? 'active' : ''}`}>Home</Link>
                <span className="active-indicator"></span>
              </li>
              <li>
                <Link href="#">
                  <Image src={myNetwork} alt="network icon" className="mx-auto w-[24px] h-[24px]"></Image>
                </Link>
                <Link href="#" className="md:hidden lg:block">My Network</Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={jobs} alt="network icon" className="mx-auto w-[24px] h-[24px]"></Image>
                </Link>
                <Link href="#" className="md:hidden lg:block">Jobs</Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={messages} alt="network icon" className="mx-auto w-[24px] h-[24px]"></Image>
                </Link>
                <Link href="#" className="md:hidden lg:block">Messages</Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={notifications} alt="network icon" className="mx-auto w-[24px] h-[24px]"></Image>
                </Link>
                <Link href="#" className="md:hidden lg:block">Notification</Link>
              </li>
              <li className="relative">
                <button>
                  <Image src="/image/profile-img.png" alt="profile image" className="mx-auto" width={100} height={100} style={{ borderRadius: '50%', height: '24px', width: '24px', }}></Image>
                  <span className="relative md:hidden lg:block">
                    Me
                  </span>
                  <span className="absolute translate-x-[10px] -translate-y-[18px] md:hidden lg:inline">{caretDown}</span>
                </button>
              </li>
              <li className="relative">
                <button className="border-none">
                  <Image src="/image/business.svg" alt="business icon" className="mx-auto" width={24} height={24}></Image>
                  <span className="relative md:hidden lg:block">
                    Business
                  </span>
                  <span className="absolute translate-x-[26px] -translate-y-[18px] md:hidden lg:inline">{caretDown}</span>
                </button>
              </li>
              <li>
                <Link href="#" className="text-[#915907] w-[80%] flex text-center text-xs underline md:max-xl:w-[auto]">Try Premium for free</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

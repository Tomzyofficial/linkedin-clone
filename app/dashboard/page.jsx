"use client";
import Image from "next/image";
import Link from "next/link";
import AddToFeed from "@/components/AddToFeed";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Modal from "@/components/Modal";
import EmojiComponent from "@/components/EmojiPicker";
import { Button } from "@/components/ui/Button";
import DashboardNav from "@/components/ui/DashboardNavBar";
import UserPosts from "@/components/posts/UsersPosts";

export default function DashboardBody() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textArea, setTextArea] = useState("");

  const leftASide = [
    { href: "#", label: "Profile viewers", badge: 9 },
    { href: "#", label: "Post impressions", badge: 37 },
    {
      href: "#",
      label: "Access exclusive tools & insights",
      badge: "",
    },
    {
      href: "#",
      label: " My items",
      badge: (
        <Image
          src="/images/my-items-icon.PNG"
          width={100}
          height={100}
          alt="my items"
          style={{ width: "auto", height: "auto" }}
        ></Image>
      ),
    },
  ];

  const secondAside = [
    {
      href: "#",
      label: "BYU-Pathway Worldwide Alu...",
      badge: (
        <Image
          src="/images/alumini-icon.PNG"
          alt="alumini icon"
          width={20}
          height={20}
          style={{ width: "10px", height: "10px" }}
        ></Image>
      ),
    },
    {
      href: "#",
      label: "JavaScript",
      badge: (
        <Image
          src="/images/alumini-icon.PNG"
          alt="alumini icon"
          width={20}
          height={20}
          style={{ width: "10px", height: "10px" }}
        ></Image>
      ),
    },
  ];

  const thirdAside = [
    {
      href: "#",
      label: "Groups",
      badge: <NewspaperIcon sx={{ fontSize: "15px" }} />,
    },
    {
      href: "#",
      label: "JavaScript",
      badge: <EventNoteIcon sx={{ fontSize: "15px" }} />,
    },
    {
      href: "#",
      label: "See all",
      badge: "",
    },
  ];

  return (
    <>
      <DashboardNav />
      <section className="bg-[#f4f2ee]">
        <div className="flex flex-col md:flex-row pt-8 mx-auto max-w-6xl gap-4">
          {/* left contents */}
          <div className="flex-shrink-0 lg:min-w-1/5">
            <div className="bg-white rounded-lg h-fit border-[1px] border-slate-200">
              <div className="bg-[url('/images/1.PNG')] bg-cover h-[13vh] rounded-t-lg">
                <Image
                  src="/images/profile-img.PNG"
                  alt="profile-pic"
                  className="ml-4 lg:mx-auto rounded-full w-20 h-20 translate-y-13 lg:translate-y-8 border-2 border-white"
                  sizes="sm"
                  width={100}
                  height={100}
                ></Image>
              </div>
              <div className="mt-[60px] pb-4 text-center text-sm">
                <h3 className="font-bold">Chukwuebuka Ibeh</h3>
                <h5 className="text-xs">Software Developer</h5>
              </div>

              <div className="text-xs py-[10px]">
                {leftASide.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-[2px] hover:bg-stone-200 text-[#000000099]"
                  >
                    {item.label}
                    <span className=" text-[#0A66c2]">{item.badge}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg h-fit border-[1px] mt-2 border-slate-200">
              <div className="text-xs py-[10px] flex justify-between px-2 items-center">
                <p className="group block py-[2px] text-[#000000099]">Recent</p>
                <span className="hidden md:block group-hover:block">
                  <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
                </span>
              </div>

              <div className="text-xs">
                {secondAside.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex gap-2 items-center pl-4 py-[2px] hover:bg-stone-200 text-[#00000099]"
                  >
                    <span>{item.badge}</span>
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="text-xs py-[20px]">
                <Link
                  href="#"
                  className="flex justify-between items-center hover:underline block px-4 py-[2px] text-[#0A66c2] font-semibold"
                >
                  Groups
                  <span className="hidden md:block">
                    <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
                  </span>
                </Link>

                <div className="text-xs py-[10px]">
                  {thirdAside.map((item, idx) => (
                    <Link
                      href={item.href}
                      key={idx}
                      className="flex items-center gap-2 pl-4 py-[2px] hover:bg-stone-200 text-[#00000099]"
                    >
                      <span>{item.badge}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* center contents*/}
          <div className="flex flex-col gap-4 lg:flex-row w-full">
            <div className="w-full flex-1">
              <div className="bg-white rounded-lg w-full h-fit border-[1px] pb-2 border-slate-200 space-x-4">
                <div className="flex space-x-4 p-4">
                  <Link href="#">
                    <Image
                      src="/images/profile-img.PNG"
                      alt="profile image"
                      width={100}
                      height={100}
                      style={{
                        width: "4rem",
                        flexShrink: 0,
                        height: "3.1rem",
                      }}
                      className="rounded-full w-auto"
                    ></Image>
                  </Link>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="text-[#00000099] px-2 rounded-full text-start border border-slate-300 w-full hover:cursor-pointer hover:bg-stone-200"
                  >
                    Start a post, try writing with AI
                  </Button>

                  {/* Modal */}

                  {isModalOpen && (
                    <Modal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                    >
                      <div className="flex justify-between items-center">
                        <Button className="flex space-x-2 items-center justify-center p-4 rounded-xl hover:bg-stone-200">
                          <Image
                            src="/images/profile-img.PNG"
                            width={100}
                            height={100}
                            alt="profile image"
                            style={{
                              width: "3.7rem",
                              height: "3.7rem",
                              borderRadius: "50%",
                            }}
                          />
                          <strong className="font-normal text-[20px]">
                            Chukwuebuka Ibeh
                          </strong>
                        </Button>
                        <Button
                          arial-label="Close modal"
                          className="absolute top-2 right-2 border-none hover:bg-[#f0f0f0] py-2 px-2 rounded-full flex justify-center items-center cursor-pointer"
                          onClick={() => setIsModalOpen(false)}
                        >
                          <CloseIcon sx={{ fontSize: "20px" }} />
                        </Button>
                      </div>
                      <div className="w-full">
                        <textarea
                          name="postComments"
                          value={textArea}
                          onChange={(e) => setTextArea(e.target.value)}
                          id="postComments"
                          cols="80"
                          rows="5"
                          style={{
                            width: "100%",
                            height: "auto",
                            border: "none",
                            outline: "none",
                            resize: "none",
                          }}
                          placeholder="What do you want to talk about?"
                        ></textarea>
                      </div>
                      <div>
                        <EmojiComponent
                          onEmojiSelect={(emoji) => {
                            setTextArea((prev) => prev + emoji);
                          }}
                        />
                      </div>
                    </Modal>
                  )}
                </div>
                <div className="flex justify-around text-[#00000099] text-sm ">
                  <div>
                    <button className="flex hover:bg-stone-200 transition p-4 rounded-lg">
                      <span className="pr-2">
                        <Image
                          src="/images/gallery-icon.PNG"
                          width={100}
                          height={100}
                          alt="gallery icon"
                          style={{ width: "auto", height: "auto" }}
                        ></Image>
                      </span>
                      Media
                    </button>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="flex hover:bg-stone-200 transition p-4 rounded-lg"
                    >
                      <span className="pr-2">
                        <Image
                          src="/images/events-icon.PNG"
                          width={100}
                          height={100}
                          alt="events icon"
                          style={{ width: "auto", height: "auto" }}
                        ></Image>
                      </span>
                      Events
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="flex hover:bg-stone-200 transition p-4 rounded-lg"
                    >
                      <span className="pr-2">
                        <Image
                          src="/images/article-icon.PNG"
                          alt="article icon"
                          width={100}
                          height={100}
                          style={{ width: "auto", height: "auto" }}
                        ></Image>
                      </span>
                      Write article
                    </Link>
                  </div>
                </div>
              </div>
              {/* posts */}
              <div className="mt-4">{<UserPosts />}</div>
            </div>

            {/* right contents */}
            <div className="space-y-4 w-full lg:w-[30%]">
              <div className="bg-white p-4 rounded-lg h-fit border-[1px] border-slate-200">
                <div>
                  <h2 className="pb-4">
                    Add to your feed{" "}
                    <span className="float-right">
                      <Image
                        src="/images/info-icon.PNG"
                        alt="info icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                      ></Image>
                    </span>
                  </h2>

                  {AddToFeed.map((eachUser) => (
                    <div key={eachUser.id} className="flex space-x-4">
                      <div className="pb-8">
                        <Link href="#">
                          <Image
                            src={eachUser.image}
                            alt="user's image"
                            width={100}
                            height={100}
                            style={{
                              borderRadius: eachUser.borderRadius,
                              width: eachUser.width,
                              height: eachUser.height,
                            }}
                          ></Image>
                        </Link>
                      </div>
                      <div className="text-sm">
                        <h2 className="text-[#000000E9]">{eachUser.name}</h2>
                        <h3 className="text-[#00000099]">{eachUser.title}</h3>
                        <button className="font-semibold text-[15px] text-[#00000099] border border-[#000000E9] px-4 py-[5px] rounded-full">
                          {eachUser.follow}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* see who's hiring */}
              <div>
                <div className="sticky top-0">
                  <div>
                    <Image
                      src="/images/whos-hiring.PNG"
                      alt="whos-hiring"
                      width={500}
                      height={500}
                      className="w-full"
                    ></Image>
                  </div>
                  <div className="mt-4">
                    <ul className="flex flex-wrap text-xs list-none justify-center gap-3.5">
                      <li>
                        <Link href="#">About</Link>
                      </li>
                      <li>
                        <Link href="#">Accessibility</Link>
                      </li>
                      <li>
                        <Link href="#">Help Center</Link>
                      </li>
                      <li>
                        <Link href="#">Privacy & Terms</Link>
                      </li>
                      <li>
                        <Link href="#">Ad Choices</Link>
                      </li>
                      <li>
                        <Link href="#">Advertising</Link>
                      </li>
                      <li>
                        <Link href="#">Business Services</Link>
                      </li>
                      <li>
                        <Link href="#">Get the Linkedin App</Link>
                      </li>
                      <li>
                        <Link href="#">More</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

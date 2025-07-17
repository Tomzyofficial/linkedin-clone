"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import AddToFeed from "./AddToFeed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";
import EmojiComponent from "./EmojiPicker";
export default function DashboardBody() {
  const chevronUp = (
    <FontAwesomeIcon
      icon={faChevronUp}
      size="sm"
      style={{ width: "15px", height: "15px" }}
    />
  );
  const caretDown = (
    <FontAwesomeIcon
      icon={faCaretDown}
      size="sm"
      style={{ width: "15px", height: "15px", color: "#00000099" }}
    />
  );
  // fetch users posts and contents
  const DynamicImport = dynamic(() =>
    import("/posts/usersPosts").then((mod) => mod.userPosts)
  );

  // modal useState
  const [isModalOpen, setModalOpen] = useState(false);
  const [textArea, setTextArea] = useState("");

  // get the contents for each add to your feed per user
  const addtoYourFeed = AddToFeed.map((eachUser) => (
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
  ));
  return (
    <>
      <body className="bg-[#f4f2ee]">
        <main className="pt-[20px]">
          <div className="hidden md:flex md:justify-around md:mx-8 md:flex-wrap">
            {/* left contents */}
            <div className="md:w-[30%] lg:w-[19%]">
              <div className="bg-white rounded-lg h-fit border-[1px] border-slate-200">
                <div className="divide-y">
                  <div>
                    <div className="bg-[url('/image/1.png')] bg-cover h-[60px] rounded-t-lg">
                      <Image
                        src="/image/profile-img.png"
                        alt="profile-pic"
                        className="mx-auto translate-y-8 border-2 border-white"
                        sizes="sm"
                        width={40}
                        height={40}
                        style={{
                          borderRadius: "50%",
                          width: "75px",
                          height: "75px",
                        }}
                      ></Image>
                    </div>
                    <div className="mt-[60px] pb-4 text-center text-sm">
                      <h3 className="font-bold">Chukwuebuka Ibeh</h3>
                      <h5 className="text-xs">Software Developer</h5>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs py-[10px]">
                      <Link
                        href="#"
                        className="block px-4 py-[2px] hover:bg-stone-200 text-[#000000099]"
                      >
                        Profile viewers{" "}
                        <span className="float-right text-[#0A66c2]">9</span>
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-[2px] hover:bg-stone-200"
                      >
                        Post impressions{" "}
                        <span className="float-right text-[#0A66c2]">37</span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs py-[10px]">
                      <Link
                        href="#"
                        className="block px-4 py-[2px] hover:bg-stone-200 text-[#00000099]"
                      >
                        Access exclusive tools & insights
                        <span className="block text-[#000000E9] font-semibold">
                          Try Premium for free
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs py-[10px]">
                      <Link
                        href="#"
                        className="block px-4 py-[2px] hover:bg-stone-200 text-[#000000E9] font-semibold"
                      >
                        <span className="float-left pr-2">
                          <Image
                            src="/image/my-items-icon.png"
                            width={100}
                            height={100}
                            alt="my items"
                            style={{ width: "auto", height: "auto" }}
                          ></Image>
                        </span>{" "}
                        My items
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg h-fit border-[1px] mt-2 border-slate-200">
                <div>
                  <div className="text-xs py-[10px]">
                    <p className="group block px-4 py-[2px] text-[#000000099]">
                      Recent
                      <span className="float-right hidden group-hover:block">
                        {chevronUp}
                      </span>
                    </p>
                  </div>
                  <div className="text-xs">
                    <Link
                      href="#"
                      className="block pl-4 py-[2px] hover:bg-stone-200 text-[#00000099]"
                    >
                      <span className="float-left pe-2">
                        <Image
                          src="/image/alumini-icon.png"
                          alt="alumini icon"
                          width={20}
                          height={20}
                          style={{ width: "10px", height: "10px" }}
                        ></Image>
                      </span>
                      BYU-Pathway Worldwide Alu...
                    </Link>
                    <Link
                      href="#"
                      className="block pl-4 py-[2px] hover:bg-stone-200 text-[#00000099]"
                    >
                      <span className="float-left pe-2">
                        <Image
                          src="/image/alumini-icon.png"
                          alt="alumini icon"
                          width={20}
                          height={20}
                          style={{ width: "10px", height: "10px" }}
                        ></Image>
                      </span>
                      JavaScript
                    </Link>
                  </div>
                  <div className="text-xs py-[20px]">
                    <Link
                      href="#"
                      className="group transition hover:underline block px-4 py-[2px] text-[#0A66c2] font-semibold"
                    >
                      Groups
                      <span className="float-right hidden group-hover:block">
                        {chevronUp}
                      </span>
                    </Link>
                    <div className="text-xs py-[10px]">
                      <Link
                        href="#"
                        className="block pl-4 py-[2px] hover:bg-stone-200 text-[#00000099]"
                      >
                        <span className="float-left pe-2">
                          <Image
                            src="/image/alumini-icon.png"
                            alt="alumini icon"
                            width={20}
                            height={20}
                            style={{ width: "10px", height: "10px" }}
                          ></Image>
                        </span>
                        BYU-Pathway Worldwide Alu...
                      </Link>
                      <Link
                        href="#"
                        className="block pl-4 py-[2px] hover:bg-stone-200 text-[#00000099]"
                      >
                        <span className="float-left pe-2">
                          <Image
                            src="/image/alumini-icon.png"
                            alt="alumini icon"
                            width={20}
                            height={20}
                            style={{ width: "10px", height: "10px" }}
                          ></Image>
                        </span>
                        JavaScript
                      </Link>
                      <Link
                        href="#"
                        className="mt-2 block pl-8 text-[#00000099 font-semibold] py-[2px] hover:bg-stone-200 text-[#00000099]"
                      >
                        See all
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* center contents*/}
            <div className="md:w-[65%] lg:w-[50%]">
              <div className="bg-white rounded-lg h-fit border-[1px] pb-2 border-slate-200 space-x-4">
                <div className="flex space-x-4 p-4">
                  <Link href="#">
                    <Image
                      src="/image/profile-img.png"
                      alt="profile image"
                      width={20}
                      height={20}
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                      }}
                    ></Image>
                  </Link>
                  <input
                    type="text"
                    onClick={() => setModalOpen(!isModalOpen)}
                    placeholder="Start a post, try writing with AI"
                    className="placeholder:text-sm placeholder:text-[#00000099] hover:cursor-pointer hover:bg-stone-200"
                    style={{
                      borderRadius: "50px",
                      width: "90%",
                      height: "50px",
                      border: "1px solid grey",
                      paddingLeft: "10px",
                    }}
                  />

                  {/* modal */}
                  <div>
                    <Modal
                      isOpen={isModalOpen}
                      onClose={() => setModalOpen(false)}
                    >
                      <button className="flex space-x-2 items-center justify-center p-4 rounded-xl hover:bg-stone-200">
                        <Image
                          src="/image/profile-img.png"
                          width={100}
                          height={100}
                          alt="profile image"
                          style={{
                            width: "3.7rem",
                            height: "3.7rem",
                            borderRadius: "50%",
                          }}
                        ></Image>
                        <strong className="font-normal text-[20px]">
                          Chukwuebuka Ibeh {caretDown}
                        </strong>
                      </button>
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
                        <EmojiComponent />
                      </div>
                    </Modal>
                  </div>
                </div>
                <div className="flex justify-around text-[#00000099] text-sm ">
                  <div>
                    <button className="flex hover:bg-stone-200 transition p-4 rounded-lg">
                      <span className="pr-2">
                        <Image
                          src="/image/gallery-icon.png"
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
                          src="/image/events-icon.png"
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
                          src="/image/article-icon.png"
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
              <div className="mt-4">
                <DynamicImport />
              </div>
            </div>
            {/* right contents */}
            <div className="space-y-4 w-[25%]">
              <div className="bg-white p-4 rounded-lg h-fit border-[1px] border-slate-200">
                <div>
                  <h2 className="pb-4">
                    Add to your feed{" "}
                    <span className="float-right">
                      <Image
                        src="/image/info-icon.png"
                        alt="info icon"
                        width={100}
                        height={100}
                        style={{ width: "auto", height: "auto" }}
                      ></Image>
                    </span>
                  </h2>
                  <span className="clear-right">{addtoYourFeed}</span>
                </div>
              </div>
              {/* see who's hiring */}
              <div>
                <div className="sticky top-0">
                  <div>
                    <Image
                      src="/image/whos-hiring.png"
                      alt="whos-hiring"
                      priority
                      width={200}
                      height={200}
                      style={{ width: "100%", height: "100%" }}
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
        </main>
      </body>
    </>
  );
}

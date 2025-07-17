'use client'
import Image from "next/image";
import Link from "next/link";
import couple from "public/image/couple.svg";
import ladyWorking from "public/image/home-page-lady-working.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import dynamic from "next/dynamic";

export default function AsideElem() {
  const [state, setState] = useState(false)
  const caretDown = <FontAwesomeIcon icon={faCaretDown} size="sm" style={{ width: '20px', height: '20px', right: '30px', position: 'absolute' }} />
  const DynamicImport = dynamic(() => import('./CoursesList').then((mod) => mod.courses))
  return (
    <div>
      <aside>
        <div className="translate-x-6 my-8">
          <div className="my-8">
            <Image src={couple} alt="couple" sizes="auto" style={{ width: '60%', height: '60%' }}></Image>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl text-[#000000E6]">Connect with people <br /> who can help</h1>
            <Link href="#" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md hover:transition hover:bg-blue-50">Find people you know</Link>
          </div>
          <div className="my-8">
            <Image src={ladyWorking} alt="lady working" sizes="5dvw" style={{ width: '65%', height: '65%' }}></Image>
            <h1 className="text-3xl text-[#000000E6] py-8">Learn the skills you <br /> need to succeed</h1>
          </div>
          <div>
            <button onClick={() => setState(!state)} className="relative hover:bg-gray-100 hover:text-slate-700 w-[85%] text-lg inline-flex bg-inherit border-[1px] border-slate-400 text-neutral-600 py-3 px-4 rounded-sm">Choose a topic to learn about {caretDown}</button>
          </div>
          {state && <DynamicImport />}
        </div>
      </aside>
    </div>
  )
}
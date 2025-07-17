'use client';
import Link from "next/link";
import Image from "next/image";
import googleIcon from 'public/image/google-icon.PNG';
import { useState } from "react";
export function HomeInputForm() {
  const [showState, setshowState] = useState(false);
  const ssr = {
    ssr: false
  }
  return (
    <>
      {/* form input field */}
      <main>
        <form action="">
          <div>
            <label htmlFor="email-phone" className="pb-4">Email or Phone number</label> <br />
            <input type="text" name="" id="email-phone" className="border-[1px] border-slate-500 w-full p-3 rounded-sm hover:transition hover:bg-gray-100 hover:outline hover:outline-1" />
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="pb-4">Password</label> <br />
            <input type={showState ? 'text' : 'password'} name="" id="password" className="relative border-[1px] border-slate-500 w-full p-3 rounded-sm hover:transition hover:bg-gray-100 hover:outline hover:outline-1" />
            <span className="absolute md:right-[2rem] right-8 translate-y-4 text-[#0A66c2] font-bold text-sm">
              <button onClick={() => setshowState(!showState)} type="button">{showState ? 'Hide' : 'Show'}</button>
            </span>
          </div>
          <div className="mt-8">
            <button style={{ width: '100%', display: 'inline-block', borderRadius: '30px', padding: '12px 24px' }} className="bg-[#0A66c2] text-white text-sm font-bold hover:transition hover:bg-[#004182]">Continue</button>
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
            <button style={{ width: '100%', borderRadius: '30px', padding: '10px 24px' }} className="relative bg-transparent border-[1px] border-slate-300 text-neutral-600 text-md font-normal">
              <span className="absolute -translate-x-8"><Image src={googleIcon} sizes="10vw" alt="google icon"></Image></span>
              continue with Google
            </button>
          </div>
          <div>
            <Link href="/signup" style={{ width: '100%', borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-slate-300 text-neutral-600 text-md font-normal">New to LinkedIn? Join now</Link>
          </div>
        </div>
      </main>
    </>

  )
}
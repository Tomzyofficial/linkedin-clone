'use client';
import Link from "next/link";
import Image from "next/image";
import googleIcon from 'public/image/google-icon.PNG';
import { useState } from "react";
export default function signup() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <header className="p-5">
        <Link href="/" className="flex relative text-[#0A66c2] font-semibold text-2xl md:text-3xl">Linked
          <span className="translate-y-2">
            <Image src="/image/logo.svg" alt="linkedin logo" width={50} height={50} style={{ width: '28px', height: '25px' }}></Image>
          </span>
        </Link>
      </header>
      {/* form input field */}
      <main className="mx-4 md:mx-[400px] bg-inherit md:shadow-lg">
        <h2 className="text-center text-2xl text-[#000000E6]">Join LinkedIn now - it&apos;free</h2>
        <form action="">
          <div className="mt-4">
            <label htmlFor="email-phone" className="pb-4">Email or Phone number</label> <br />
            <input type="text" name="" id="email-phone" className="border-[1px] border-slate-500 w-full p-3 rounded-sm hover:transition hover:bg-gray-100 hover:outline hover:outline-1" />
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="pb-4">Password</label> <br />
            <input type={showPassword ? 'text' : 'password'} name="" id="password" className="relative border-[1px] border-slate-500 w-full p-3 rounded-sm hover:transition hover:bg-gray-100 hover:outline hover:outline-1" />
            <span className="absolute  md:right-[27rem] right-8 translate-y-4 text-[#0A66c2] font-bold text-sm">
              <button onClick={() => setShowPassword(!showPassword)} type="button">{showPassword ? 'Hide' : 'Show'}</button>
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
          <div className="mt-8 relative">
            <button style={{ width: '100%', borderRadius: '30px', padding: '10px 24px' }} className="relative bg-transparent border-[1px] border-slate-300 text-neutral-600 text-md font-normal">
              <span className="absolute -translate-x-8"><Image src={googleIcon} sizes="10vw" alt="google icon"></Image></span>
              continue with Google
            </button>
          </div>
          <div className="mt-8">
            <p className="text-center">Already on Linkedin? <Link href="/signin" className="text-violet-900 font-normal active:bg-blue-50 active:rounded-sm active:underline">Sign in</Link></p>
          </div>
          <div className="my-4">
            <p className="text-sm">Looking to create a page for a business? <Link href="#" className="text-[#0A66c2] font-normal">Get help</Link></p>
          </div>
        </div>
      </main>
    </>

  )
}
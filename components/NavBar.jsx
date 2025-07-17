'use client';
import Link from "next/link"
import Image from "next/image"
// import { signIn, signOut, useSession } from 'next-auth/react';

export default function NavBar() {
  // const { data: session } = useSession();
  /*   if (session) {
      return (
        <>
          <header>
            <nav className="relative">
              <>
                <div className="float-left">
                  <Link href="/" className="flex relative text-[#0A66c2] font-semibold text-2xl md:text-3xl">Linked
                    <span className="translate-y-2">
                      <Image src="/image/logo.svg" alt="linkedin logo" width={50} height={50} style={{ width: '28px', height: '25px' }}></Image>
                    </span>
                  </Link>
                </div>
                <div className="float-right space-x-[30px] inline-flex">
                  <Link href="/signup" className="text-[#000000BF] font-md hover:bg-slate-50 py-4 px-4 hover:rounded-full">Join now</Link>
                  <p>{session?.user?.name}</p>
                  <button onClick={() => signOut()} className="border border-red-500 bg-red-500 text-white p-2 rounded-md">Sign Out</button>
                </div>
              </>
            </nav>
          </header>
        </>
      )
    } */
  return (
    <>
      <header>
        <nav className="relative">
          <>
            <div className="float-left">
              <Link href="/" className="flex relative text-[#0A66c2] font-semibold text-2xl md:text-3xl">Linked
                <span className="translate-y-2">
                  <Image src="/image/logo.svg" alt="linkedin logo" width={50} height={50} style={{ width: '28px', height: '25px' }}></Image>
                </span>
              </Link>
            </div>
            <div className="float-right space-x-[30px] flex">
              <Link href="/signup" className="text-[#000000BF] font-md hover:bg-slate-50 py-4 px-4 hover:rounded-full">Join now</Link>
              <p>Not signed in</p>
              <button onClick={() => signIn()} style={{ display: 'inline-flex', justifyContent: 'center', borderRadius: '25px', padding: '12px 24px' }} className="border-[1px] border-[#0A66c2] text-[#0A66c2] hover:transiton hover:bg-blue-50">Sign In</button>
              {/* <Link href="/signin" style={{ display: 'inline-flex', justifyContent: 'center', borderRadius: '25px', padding: '12px 24px' }} className="border-[1px] border-[#0A66c2] text-[#0A66c2] hover:transiton hover:bg-blue-50">Signin</Link> */}
            </div>
          </>
        </nav>
      </header>
    </>
  )
}
import Image from "next/image"
import Link from "next/link"
import homeImgSmallDev from 'public/image/home-page-small-device-img.svg'
import light from 'public/image/light-icon.svg'
export function HeroSection() {
  return (
    <>
      <article>
        <div className="my-4">
          <Image src={homeImgSmallDev} alt="small device" sizes="5vw" width={280} height={260} className="mx-auto" />
        </div>
        <div className="bg-zinc-100 py-16 p-3 text-stone-900">
          <h1 className="text-3xl">Explore collaborative articles</h1>
          <p className="text-md text-[#000000e6] py-2">We&apos;re unlocking community knowledge in new way. Experts add and insights directly into each article started with the help of AI</p>
          <div className="mt-5 space-y-3">
            <div className="space-x-1 flex flex-wrap">
              <Link href="#" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200">Marketing</Link>
              <Link href="#" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200">Public Administration</Link>
            </div>
            <div className="space-x-1 flex flex-wrap">
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200">Healthcare</Link>
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal text-center hover:transition hover:bg-gray-200">Engineering</Link>
            </div>
            <div className="space-x-1">
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal text-center hover:transition hover:bg-gray-200">IT Services</Link>
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200">Sustainability</Link>
            </div>
            <div className="space-x-1 flex flex-wrap">
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200">Business Administration</Link>
            </div>
            <div className="flex flex-wrap">
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200">Telecommunication</Link>
            </div>
            <div className="space-x-1">
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-200">HR Management</Link>
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-[#0A66c2]  text-[#0A66c2] text-md font-normal hover:transition hover:bg-blue-50">Show all</Link>
            </div>
          </div>
        </div>
      </article>
      <aside className="bg-orange-50 flex space-x-4 p-2">
        <div>
          <Image src={light} sizes="5vw" width={70} height={100} alt="light" />
        </div>
        <div className="space-y-3">
          <p>6M+ job opportunities on the linkedin app Unlock curated just for you</p>
          <Link href="/signup" style={{ borderRadius: '30px', padding: '6px 16px' }} className="inline-flex justify-center bg-transparent border-[1px] border-[#0A66c2]  text-[#0A66c2] text-md font-normal hover:transition hover:bg-blue-50">Use the app</Link>
        </div>

      </aside>
    </>
  )
}
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
export function JobHeroSection() {
  const caretDown = <FontAwesomeIcon icon={faChevronDown} size="sm" style={{ width: '20px', paddingLeft: '5px' }} />
  return (
    <>
      <article>
        <div className="bg-inherit py-16 p-3 text-stone-900">
          <h1 className="text-3xl">Find the right job or internshipt for you</h1>
          <p className="text-md text-stone-500 uppercase py-2">suggested searches</p>
          <div className="mt-5 space-y-3">
            <div>
              <Link href="#" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-100">Engineering</Link>
            </div>
            <div className="space-x-1 flex flex-wrap">
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-100">Business Development</Link>
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal text-center hover:transition hover:bg-gray-100">Finance</Link>
            </div>
            <div className="space-x-1">
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal text-center hover:transition hover:bg-gray-100">Retail Associate</Link>
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-100">Customer Service</Link>
            </div>
            <div className="space-x-1 flex flex-wrap">
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-100">Operations</Link>
            </div>
            <div className="space-y-3 flex flex-wrap">
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500 text-neutral-600 text-md font-normal hover:transition hover:bg-gray-100">Information Technology</Link>
              <Link href="/signup" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-transparent border-[1px] border-zinc-500  text-neutral-600 text-md font-normal hover:transition hover:bg-blue-50">Show more {caretDown}</Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
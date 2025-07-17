import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
export function WhoIsLinkedInFor() {
  const chevronRight = <FontAwesomeIcon icon={faChevronRight} size="sm" style={{ position: 'absolute', right: '20'}} />
  return (
    <>
      <section className="p-6 bg-zinc-100 mt-[100px]">
        <h2 className="text-[#B24020] text-3xl">Who is LinedIn for? </h2>
        <h3 className="text-lg">Anyone looking to navigate their professional life</h3>
        <div className="my-6 space-y-4">
          <div className="space-">
            <Link href="#" className="relative bg-[#EAE6D7] p-4 w-full inline-flex">Find a coworker or classmate {chevronRight}</Link>
          </div>
          <div>
            <Link href="#" className="relative bg-[#EAE6D7] p-4 w-full inline-flex">Find a new job {chevronRight}</Link>
          </div>
          <div>
            <Link href="#" className="relative bg-[#EAE6D7] p-4 w-full inline-flex">Find a course or training {chevronRight}</Link>
          </div>
        </div>
      </section>
      <aside>
        <div className="space-y-6 p-4">
          <h1 className="text-3xl text-[#000000E6]">Join your colleagueds, classmates, and friends on LinkedIn</h1>
          <Link href="#" style={{ borderRadius: '30px', padding: '12px 24px' }} className="inline-flex justify-center bg-[#0A66c2] border-[1px] text-white text-md hover:transition hover:bg-[#004182]">Get started</Link>
        </div>
      </aside>
    </>
  )
}
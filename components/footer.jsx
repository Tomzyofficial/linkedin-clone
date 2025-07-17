import Link from "next/link";
import Image from "next/image";
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-5 bg-zinc-100 mt-10 p-4">
        <div>
          <Link href="/" className="flex relative text-[#0A66c2] font-semibold text-2xl md:text-3xl">Linked
            <span className="translate-y-2">
              <Image src="/image/logo.svg" alt="linkedin icon" width={50} height={50} style={{ width: '28px', height: '25px' }}></Image>
            </span>
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-normal text-[#000000E6] pb-2">General</h2>
          <ul>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Sign Up</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Help Center</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">About</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Press</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Blog</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Careers</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Developers</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-normal text-[#000000E6] pb-2">Browse LinkedIn</h2>
          <ul>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Learning</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Jobs</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Salary</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Mobile</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Services</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Products</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Top Companies Hub</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-normal text-[#000000E6] pb-2">Business Solutions</h2>
          <ul>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Talent</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Marketing</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Sales</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Learning</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-normal text-[#000000E6] pb-2">Directories</h2>
          <ul>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Members</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Jobs</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Companies</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Featured</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Learning</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Posts</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Articles</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Schools</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">News</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">News Letter</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Services</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Products</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">Advice</Link></li>
            <li><Link href="#" className="text-slate-800 hover:text-[#0A66c2] hover:transition hover:underline">People Search</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap space-x-2 bg-white py-3">
          <li>
            <Link href="/" className="flex relative text-black font-semibold text-sm md:text-sm">Linked
              <span className="translate-y-1">
                <Image src="/image/logo.svg" alt="linkedin icon" width={20} height={20} style={{ width: '10px', height: '13px' }}></Image>
              </span>
            </Link>
          </li>
          <li><p className="text-slate-800 text-sm">&copy; {currentYear} </p></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">About</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">Accessibility</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">User Agreement</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">Privacy Policy</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">Cookie Policy</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">Copyright Policy</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">Brand Policy</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">Guest Controls</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">Community</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">Guidelines</Link></li>
          <li><Link href="#" className="text-slate-800 text-sm hover:text-[#0A66c2] hover:transition hover:underline">Languages</Link></li>
        </ul>
      </div>
    </footer>
  )
}

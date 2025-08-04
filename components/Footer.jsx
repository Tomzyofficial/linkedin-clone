import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Organize footer data into sections with headers and items
  const footerSections = [
    {
      header: "General",
      items: [
        { label: "Sign up", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "About", href: "#" },
        { label: "Press", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Developers", href: "#" },
      ],
    },
    {
      header: "Browse LinkedIn",
      items: [
        { label: "Learning", href: "#" },
        { label: "Jobs", href: "#" },
        { label: "Salary", href: "#" },
        { label: "Mobile", href: "#" },
        { label: "Services", href: "#" },
        { label: "Products", href: "#" },
        { label: "Top Companies Hub", href: "#" },
      ],
    },
    {
      header: "Business Solutions",
      items: [
        { label: "Talents", href: "#" },
        { label: "Marketing", href: "#" },
        { label: "Sales", href: "#" },
        { label: "Learning", href: "#" },
      ],
    },
    {
      header: "Directories",
      items: [
        { label: "Members", href: "#" },
        { label: "Jobs", href: "#" },
        { label: "Companies", href: "#" },
        { label: "Featured", href: "#" },
        { label: "Learning", href: "#" },
        { label: "Posts", href: "#" },
        { label: "Articles", href: "#" },
        { label: "Schools", href: "#" },
        { label: "News", href: "#" },
        { label: "News Letter", href: "#" },
        { label: "Services", href: "#" },
        { label: "Products", href: "#" },
        { label: "Advice", href: "#" },
        { label: "People Search", href: "#" },
      ],
    },
  ];

  return (
    <footer>
      <div className="flex flex-col md:flex-row bg-zinc-100 mt-10 p-4 gap-8">
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            Linked
            <span>
              <Image
                src="/images/logo.svg"
                alt="linkedin icon"
                width={20}
                height={20}
              />
            </span>
          </Link>
        </div>
        {footerSections.map((section, idx) => (
          <div key={idx} className="mb-6 md:mb-0 flex-1 min-w-[180px]">
            {section.header ? (
              <h2 className="text-lg md:text-xl font-semibold text-[#000000E6] mb-3">
                {section.header}
              </h2>
            ) : null}
            <ul>
              {section.items.map((item, i) =>
                item.name ? (
                  <li key={i} className="mb-2">
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-[#0A66c2] font-semibold text-2xl md:text-3xl"
                    >
                      {item.name}
                      <span className="ml-2">{item.icon}</span>
                    </Link>
                  </li>
                ) : (
                  <li key={i} className="mb-2">
                    <Link
                      href={item.href}
                      className="text-zinc-700 hover:text-[#0A66c2] transition text-base md:text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-white py-3 px-4 flex flex-col md:flex-row items-center justify-between text-slate-800 text-sm">
        <div className="flex">
          <Link href="/" className="flex items-center">
            Linked
            <span>
              <Image
                src="/images/logo.svg"
                alt="linkedin icon"
                width={20}
                height={20}
              />
            </span>
          </Link>
          <span className="ml-2">&copy; {currentYear}</span>
        </div>

        <div className="flex flex-wrap gap-x-3">
          {[
            "About",
            "Accessibility",
            "User Agreement",
            "Privacy Policy",
            "Cookie Policy",
            "Copyright Policy",
            "Brand Policy",
            "Guest Controls",
            "Community",
            "Guidelines",
            "Languages",
          ].map((label) => (
            <Link
              key={label}
              href="#"
              className="text-slate-800 hover:text-[#0A66c2] hover:underline transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

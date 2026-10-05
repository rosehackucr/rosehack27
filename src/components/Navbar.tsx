"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const links: NavLink[] = [
  {
    name: "About",
    href: "/about",
    children: [{ name: "Judges", href: "/judges" }],
  },
  { name: "Tracks", href: "/tracks" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-rosehack-darkgreen text-rosehack-cream sticky top-0 z-50">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold">
          <Image src="/logo.webp" alt="RoseHack logo" width={36} height={36} />
          RoseHack &rsquo;27
        </Link>

        <div className="hidden items-center gap-10 text-sm uppercase md:flex">
          {links.map(({ name, href, children }) =>
            children ? (
              <div key={name} className="group relative">
                <Link
                  href={href}
                  className="hover:text-rosehack-yellow flex items-center gap-1"
                >
                  {name}
                  <ChevronDown className="size-4 transition group-focus-within:rotate-180 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="bg-rosehack-darkgreen flex flex-col gap-3 rounded-b-lg px-6 py-4 shadow-lg">
                    {children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="hover:text-rosehack-yellow"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={name}
                href={href}
                className="hover:text-rosehack-yellow"
              >
                {name}
              </Link>
            ),
          )}
        </div>

        <Link
          href="/#apply"
          className="bg-rosehack-yellow text-rosehack-darkgreen hidden rounded-full px-7 py-2.5 text-sm font-semibold uppercase hover:brightness-95 md:block"
        >
          Apply Now
        </Link>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col items-center gap-5 pb-6 text-sm uppercase md:hidden">
          {links.map(({ name, href, children }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <Link href={href} onClick={() => setOpen(false)}>
                {name}
              </Link>
              {children?.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="text-xs opacity-80"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/#apply"
            onClick={() => setOpen(false)}
            className="bg-rosehack-yellow text-rosehack-darkgreen rounded-full px-7 py-2.5 font-semibold"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

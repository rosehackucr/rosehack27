"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "/about" },
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
          <Image src="/logo.png" alt="RoseHack logo" width={36} height={36} />
          RoseHack &rsquo;27
        </Link>

        <div className="hidden items-center gap-10 text-sm uppercase md:flex">
          {links.map(({ name, href }) => (
            <Link key={name} href={href} className="hover:text-rosehack-yellow">
              {name}
            </Link>
          ))}
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
          {links.map(({ name, href }) => (
            <Link key={name} href={href} onClick={() => setOpen(false)}>
              {name}
            </Link>
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

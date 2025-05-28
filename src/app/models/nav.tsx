"use client";

import { Sparkle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  url: string;
  name: string;
  activePage?: boolean;
  sparkle?: boolean;
}

function NavLink({ url, name, activePage = false, sparkle = false }: NavLinkProps) {
  return (
    <Link 
      href={url}
      className={`flex items-center gap-1 ${activePage ? "underline": ""} text-sm ${sparkle ? "font-medium text-primary-color": "text-gray-800"} hover:underline underline-offset-4 duration-200`}
    >
      {sparkle && <Sparkle className="w-4 h-4 text-primary-color animate-pulse" />}
      <span>{name}</span>
    </Link>
  )
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="w-full my-2">
      <nav className="flex items-center gap-8 mx-auto w-fit py-1 px-4 bg-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-[5px] border border-white/30">
        <NavLink url="/about" name="About Me" activePage={pathname === "/" || pathname === "/about-me"} />
        <NavLink url="/education" name="Education" activePage={pathname === "/education"} />
        <NavLink url="/projects" name="Projects" activePage={pathname === "/projects"} />
        <NavLink url="/contact" name="Contact" activePage={pathname === "/contact"} />
        <NavLink url="/tutoring" name="Tutoring" activePage={pathname === "/tutoring"} sparkle />
        <NavLink url="/freelance" name="Freelance" activePage={pathname === "/freelance"} sparkle />
      </nav>
    </div>
  );
}
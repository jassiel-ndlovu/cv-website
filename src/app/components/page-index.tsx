"use client";

import { usePathname } from "next/navigation";

export default function PageIndex({ url, url2 }: { url: string; url2?: string; }) {
  const pathname = usePathname();

  return (pathname === url || (url2 && pathname === url2)) ? (
    <div className="w-5 h-5 rounded-full bg-primary-color border border-white/50"></div>
  ) : (
    <div className="w-5 h-5 rounded-full border border-white/50"></div>
  )
}
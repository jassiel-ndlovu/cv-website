"use client";

import { usePathname, useRouter } from "next/navigation";

export default function PageIndex({ url, url2 }: { url: string; url2?: string; }) {
  const pathname = usePathname();
  const router = useRouter();

  return (pathname === url || (url2 && pathname === url2)) ? (
    <div 
      className="w-5 h-5 rounded-full bg-primary-color border border-primary-color hover:bg-primary-color/60"
    >
    </div>
  ) : (
    <div 
      className="w-5 h-5 rounded-full border border-primary-color hover:bg-primary-color/60"
      onClick={() => router.push(url)}
    >

    </div>
  )
}
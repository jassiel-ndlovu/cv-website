import { File } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-5 relative">
          <Image
            src="/logo.png"
            alt="logo"
            className="object-contain"
            fill
          />
        </div>
        <div className="flex items-end gap-2">
          <h1 className="font-semibold text-2xl">
            Nkosenhle Ndlovu
          </h1>
          <p className="text-xl text-gray-400">/</p>
          <p className="text-sm text-gray-600 tracking-wider bg-gray-200 border border-white px-1 rounded-sm">
            Freelancer
          </p>
        </div>
      </div>
      <button className="py-2 px-4 flex items-center gap-2 bg-primary-color rounded-2xl text-sm text-white font-medium">
        <File className="w-4 h-5"/>
        <span>Download CV</span>
      </button>
    </header>
  )
}
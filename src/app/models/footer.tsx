import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-4 flex items-center justify-center gap-8 bg-white/10 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30">
      <div title="Nkosenhle Ndlovu" className="w-15 h-10 relative">
        <Image
          src="/logo.png"
          alt="logo"
          className="object-contain"
          fill
        />
      </div>
      <div title="NEXT.JS" className="w-16 h-10 relative">
        <Image
          src="/next.svg"
          alt="NEXT.js"
          className="object-contain"
          fill
        />
      </div>
      <div title="React.JS" className="w-16 h-10 relative">
        <Image
          src="/react.svg"
          alt="React.JS"
          className="object-contain"
          fill
        />
      </div>
    </footer>
  );
}
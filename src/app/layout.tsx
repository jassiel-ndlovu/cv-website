import type { Metadata } from "next";
import "./globals.css";
import "../lib/fontawesome";
import Header from "./models/header";
import Nav from "./models/nav";
import Footer from './models/footer';
import ProfileCard from "./components/profile-card";
import PageIndex from "./components/page-index";

export const metadata: Metadata = {
  title: "Nkosenhle Ndlovu CV/Resume",
  description: "About Nkosenhle Ndlovu. All you need to know!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="px-16 pb-8 bg-linear-180 from-lightgray to-darkgray">
          {/* Top Header and Nav */}
          <Header />
          <Nav />

          {/* Main Content Area */}
          <main className="p-2 my-8 h-[35rem] flex gap-2.5 bg-white/10 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30">

            {/* Left Credentials Card (Fixed Part) */}
            <ProfileCard />

            {/* Right side - dynamic content */}
            <section className="w-3/4 h-full rounded-3xl bg-linear-180 from-white/30 to-white/0 border border-white/10 backdrop-blur-[5px]">
              {children}
            </section>
          </main>

          {/* Page Indices */}
          <div className="mb-8 flex items-center justify-end gap-3">
            <PageIndex url="/about-me" url2="/" />
            <PageIndex url="/education" />
            <PageIndex url="/projects" />
            <PageIndex url="/contact" />
            <PageIndex url="/tutoring" />
            <PageIndex url="/freelance" />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
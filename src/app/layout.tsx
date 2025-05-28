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
        <div className="px-16 pb-8">
          {/* Top Header and Nav */}
          <Header />
          <Nav />

          {/* Main Content Area */}
          <main className="p-2 my-8 h-[35rem] flex gap-2.5 border border-darkgray">

            {/* Left Credentials Card (Fixed Part) */}
            <ProfileCard />

            {/* Right side - dynamic content */}
            <section className="w-3/4 h-full">
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
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

type Greeting = {
  greeting: string;
  lang: string;
};

const greetings: Greeting[] = [
  { greeting: "Hello", lang: "English" },
  { greeting: "Hallo", lang: "Afrikaans" },
  { greeting: "Sanibonani", lang: "isiZulu" },
  { greeting: "Molo", lang: "isiXhosa" },
  { greeting: "Salibonani", lang: "isiNdebele" },
  { greeting: "Dumela", lang: "Sesotho" },
  { greeting: "Thobela", lang: "Sepedi" },
  { greeting: "Dumela", lang: "Sestswana" },
  { greeting: "Abusheni", lang: "Xitsonga" },
  { greeting: "Sanibona", lang: "SiSwati" },
  { greeting: "Avuwani", lang: "Tshivenda" },
];

export default function AboutMe() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex h-full gap-2">
      <article className="w-96 h-full p-2 border border-darkgray">
        <AnimatePresence mode="wait">
          <motion.div
            key={greetings[index].greeting}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex items-end gap-2"
          >
            <h1 className={`text-6xl font-bold text-primary ${dmSerifText.className}`}>
              {greetings[index].greeting}
            </h1>
            <p>/</p>
            <p className="text-sm text-gray-600">{greetings[index].lang}</p>
          </motion.div>
        </AnimatePresence>
        <p className="mt-8 text-md font-light">
          I am a student, freelance developer, artist and tutor.
        </p>
        <div className="mt-8 flex gap-2">
          <div className="w-8 h-8 rounded-full bg-secondary-color"></div>
          <div className="w-8 h-8 rounded-full bg-tertiary-color"></div>
          <div className="w-8 h-8 rounded-full bg-primary-color"></div>
        </div>
        <Description />
      </article>
      
      <div className="border border-darkgray">

      </div>
    </section>
  );
}

function Description() {
  return (
    <section className="mt-8 h-[20rem] overflow-y-auto py-4 space-y-10 font-light leading-relaxed">
      <div className="space-y-4">
        
        <p>
          I’m <span className="font-semibold text-primary-color">Nkosenhle Jassiel Ndlovu</span> — a curious <strong>freelancer</strong>, ambitious <strong>student</strong>, supportive <strong>tutor</strong>, and bold <strong>creative developer</strong> from South Africa.
        </p>
        <p>
          This platform is a personal, living portfolio — a place where design meets development, and ideas become visible.
        </p>
      </div>

      <p className="text-sm text-white bg-tertiary-color p-2">
        Coded in <code>Next.js</code> + <code>TailwindCSS</code>. Designed to be minimalist, accessible, and a reflection of my vibe.
      </p>
    </section>
  );
}


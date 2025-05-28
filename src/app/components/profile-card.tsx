"use client";

import { UserRound } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";

type SocialIconsProps = {
  url: string;
  icon: IconDefinition;
};

function SocialIcon({ url, icon }: SocialIconsProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:scale-110 duration-200"
    >
      <FontAwesomeIcon icon={icon} className="text-xl text-contrast" />
    </a>
  );
}

export default function ProfileCard() {
  return (
    <section 
      className="flex flex-col justify-between w-72 h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/profile-card-background.jpg')" }}
    >
      <div className="h-3/4 p-4 flex flex-col items-center justify-center gap-1">
        <UserRound className="pt-4 w-32 h-32 bg-gray-100 stroke-1 stroke-gray-400 rounded-full" />
        <p className="mt-6 text-2xl text-white font-bold bg-tertiary-color px-4 py-1 ">Nkosenhle Jassiel</p>
        <p className="text-lg text-black font-medium bg-white px-4">Ndlovu</p>
        <div className="my-6 w-10 h-1 bg-white"></div>
        <p className="bg-white py-1 px-4 tracking-widest text-black text-sm">
          <Typewriter
            words={["FREELANCER", "STUDENT", "TUTOR"]}
            cursorStyle="|"
            typeSpeed={45}
            deleteSpeed={30}
            delaySpeed={9000}
            cursor
            loop
          />
        </p>
      </div>
      <div className="h-10 flex items-center justify-center gap-8 bg-white border border-darkgray">
        <SocialIcon url="https://www.linkedin.com/in/nkosenhle-ndlovu-8a0745290/" icon={faLinkedin} />
        <SocialIcon url="https://www.instagram.com/jassielndlovu/" icon={faInstagram} />
        <SocialIcon url="https://github.com/jassiel-ndlovu" icon={faGithub} />
      </div>
    </section>
  );
}

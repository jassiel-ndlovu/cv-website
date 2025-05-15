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
      <FontAwesomeIcon icon={icon} className="text-xl" />
    </a>
  );
}

export default function ProfileCard() {
  return (
    <section className="flex flex-col justify-between w-1/4 h-full rounded-3xl bg-linear-180 from-white/30 to-white/0 backdrop-blur-[5px]">
      <div className="h-3/4 flex flex-col items-center justify-center gap-1">
        <UserRound className="pt-4 w-32 h-32 bg-gray-100 stroke-1 stroke-gray-400 rounded-full" />
        <p className="mt-6 text-2xl font-medium">Nkosenhle Jassiel</p>
        <p className="text-xl font-light">Ndlovu</p>
        <div className="my-6 w-10 h-1 bg-contrast"></div>
        <p className="tracking-widest text-gray-700 text-md">
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
      <div className="h-10 flex items-center justify-center rounded-b-3xl gap-8 bg-contrast/90">
        <SocialIcon url="https://www.linkedin.com/in/nkosenhle-ndlovu-8a0745290/" icon={faLinkedin} />
        <SocialIcon url="https://www.instagram.com/jassielndlovu/" icon={faInstagram} />
        <SocialIcon url="https://github.com/jassiel-ndlovu" icon={faGithub} />
      </div>
    </section>
  );
}

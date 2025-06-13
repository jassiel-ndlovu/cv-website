import { useEffect, useState } from "react";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

export default function Programming() {
  const [flipped, setFlipped] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timer = null;

    if (!hovering) {
      timer = setTimeout(() => setFlipped(prev => !prev), 16000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [hovering, flipped]);

  const handleMouseEnter = () => {
    setHovering(true);
    setFlipped(false);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div
      className={`w-96 h-full shrink-0 card ${flipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner">
        {/* Front */}
        <div
          className="card-face"
          style={{
            backgroundImage: "url('/code.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-end w-full h-full p-2 from-transparent to-white/40 bg-gradient-to-b">
            <h3 className={`text-xl text-white font-semibold ${dmSerifText.className}`}>
              Programming
            </h3>
            <p className="h-10 text-[12px] text-white/70 overflow-hidden">
              I learnt to program in Grade 10. I have since learnt and implemented using or in multiple languages, frameworks, design patterns, architectures, etc. Beyond just a career opportunity, programming is a fun and useful skill to have to develop.
            </p>
          </div>
        </div>

        {/* Back */}
        <div 
          className="card-face card-back bg-contrast"
        >
          <div className="absolute z-10 w-full h-full p-2 flex flex-col justify-end bg-gradient-to-b from-transparent via-transparent to-black/70">
            <p className="text-sm text-white">
              Find my projects on <a className="underline" href="https://github.com/jassiel-ndlovu">Github</a>. I develop various projects, from simple Windows Forms, games and Machine Learning models. Have a look!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

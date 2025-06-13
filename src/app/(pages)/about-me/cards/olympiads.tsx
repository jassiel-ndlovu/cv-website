import { useEffect, useState } from "react";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

export default function Olympiads() {
  const [flipped, setFlipped] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timer = null;

    if (!hovering) {
      timer = setTimeout(() => setFlipped(prev => !prev), 9000);
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
      className={`w-full h-48 card ${flipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner">
        {/* Front */}
        <div
          className="card-face"
          style={{
            backgroundImage: "url('/kurt-godel.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-end w-full h-full p-2 from-transparent via-transparent to-black bg-gradient-to-b">
            <h3 className={`text-xl text-white font-semibold ${dmSerifText.className}`}>
              Olympiads
            </h3>
            <p className="h-10 text-[12px] text-white/90 overflow-hidden">
              Participated in multiple Maths and Programming Olympiads including the WMC, SAMO, SATMO and IITPSA Computer Olympiad.
            </p>
          </div>
        </div>

        {/* Back */}
        <div 
          className="card-face card-back bg-tertiary-color"
        >
          <div className="w-full h-full p-2 flex flex-col justify-end bg-gradient-to-b from-transparent via-transparent to-black/70">
            <p className="text-sm text-white overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              Mathematics forms the foundational language of the sciences, providing the precise structures and logical frameworks needed to understand natural phenomena, model complex systems, and make reliable predictions. Computer science, in turn, empowers mathematics by offering tools for exploration, simulation, and large-scale computation—transforming abstract theory into practical, scalable solutions across disciplines. Together, they drive scientific discovery and technological innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

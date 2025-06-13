import { useEffect, useState } from "react";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

export default function Chess() {
  const [flipped, setFlipped] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timer = null;

    if (!hovering) {
      timer = setTimeout(() => setFlipped(prev => !prev), 4000);
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
      className={`w-48 h-48 shrink-0 card ${flipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner">
        {/* Front */}
        <div
          className="card-face"
          style={{
            backgroundImage: "url('/chess.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col justify-end w-full h-full p-2 from-transparent to-black bg-gradient-to-b">
            <h3 className={`text-xl text-white font-semibold ${dmSerifText.className}`}>
              Chess
            </h3>
            <p className="h-10 text-[12px] text-white/90 overflow-hidden">
              I started playing chess at a young age.
            </p>
          </div>
        </div>

        {/* Back */}
        <div 
          className="card-face card-back bg-secondary-color"
        >
          <div className="w-full h-full p-2 flex flex-col justify-end bg-gradient-to-b from-transparent via-transparent to-black/70">
            <p className="text-sm text-white">Find me on <a className="underline" href="https://www.chess.com/member/jassielndlovu">Chess.com</a> or <a className="underline" href="https://lichess.org/@/formermanjass">Lichess</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

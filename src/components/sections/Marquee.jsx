"use client";

const words = ["ADOPT", "NURTURE", "DELIVER"];

export default function Marquee() {
  // Build a long repeated array so the loop is seamless
  const items = [...words, ...words, ...words, ...words];

  return (
    <div
      className="w-full overflow-hidden bg-white"
      style={{
        padding: "3vw 0",
        // borderTop: "1px solid #e8e8e8",
        // borderBottom: "1px solid #e8e8e8",
      }}
    >
      <div className="marquee-outer">
        {/* Two identical tracks — second one kicks in exactly as first ends */}
        {[0, 1].map((track) => (
          <div key={track} className="marquee-track" aria-hidden={track === 1}>
            {items.map((word, i) => {
              // Alternate: even index = filled, odd = outline
              const isFilled = i % 2 === 0;
              return (
                <span
                  key={i}
                  className="marquee-word"
                  style={
                    isFilled
                      ? { color: "#99B81B", WebkitTextStroke: "0px" }
                      : {
                          color: "transparent",
                          WebkitTextStroke: "1.5px #7CB518",
                        }
                  }
                >
                  {word}
                  {/* Dot separator */}
                  <span
                    style={{
                      display: "inline-block",
                      width: "0.6vw",
                      height: "0.6vw",
                      borderRadius: "50%",
                      background: "#7CB518",
                      margin: "0 1.8vw",
                      verticalAlign: "middle",
                      flexShrink: 0,
                    }}
                  />
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-outer {
          display: flex;
          width: max-content;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: marquee-scroll 18s linear infinite;
          /* Each track is identical, second starts right after first */
        }

        /* Second track starts flush after the first */
        .marquee-track:nth-child(2) {
          animation-delay: 0s;
        }

        .marquee-word {
          display: inline-flex;
          align-items: center;
          font-family: var("Montserrat", sans-serif);
          font-weight: 800;
          font-size: clamp(20px, 3vw, 42px);
          letter-spacing: 0.08em;
          line-height: 1;
          white-space: nowrap;
          user-select: none;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move exactly one full track width to the left */
            transform: translateX(-100%);
          }
        }

        /* Pause on hover (optional — remove if you don't want it) */
        .marquee-outer:hover .marquee-track {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .marquee-word {
            font-size: clamp(16px, 5vw, 28px);
          }
        }
      `}</style>
    </div>
  );
}

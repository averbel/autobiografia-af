export default function CircuitBackground() {
  return (
    <svg
      className="circuit-bg"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0V60" fill="none" stroke="#1e2c46" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#grid)" opacity="0.5" />

      {/* right circuit traces */}
      <g stroke="#37e2ea" strokeWidth="1.4" fill="none" opacity="0.55">
        <path d="M760 60 L980 60 L980 160 L1140 160" />
        <path d="M820 500 L980 500 L980 400 L1120 400 L1120 340" />
        <path d="M700 420 L700 500 L900 500" />
      </g>
      <g fill="#37e2ea" opacity="0.85">
        <circle cx="980" cy="60" r="4" />
        <circle cx="1140" cy="160" r="4" />
        <circle cx="980" cy="500" r="4" />
        <circle cx="1120" cy="340" r="4" />
        <circle cx="700" cy="420" r="4" />
      </g>

      {/* hexagons */}
      <g stroke="#37e2ea" strokeWidth="1.2" fill="none" opacity="0.35">
        <polygon points="1030,90 1055,104 1055,132 1030,146 1005,132 1005,104" />
        <polygon points="1075,60 1100,74 1100,102 1075,116 1050,102 1050,74" />
        <polygon points="150,470 175,484 175,512 150,526 125,512 125,484" />
      </g>
    </svg>
  );
}

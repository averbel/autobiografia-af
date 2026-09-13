export default function AvatarRing() {
  return (
    <div className="avatar-wrap">
      <svg viewBox="0 0 340 340" width="100%" height="100%" aria-hidden="true">
        <g className="avatar-ring-outer">
          <circle
            cx="170"
            cy="170"
            r="150"
            fill="none"
            stroke="#37e2ea"
            strokeWidth="1.5"
            strokeDasharray="4 10"
            opacity="0.55"
          />
        </g>
        <circle
          cx="170"
          cy="170"
          r="128"
          fill="none"
          stroke="#37e2ea"
          strokeWidth="2"
          opacity="0.8"
        />
        <g className="avatar-pulse">
          <circle
            cx="170"
            cy="170"
            r="128"
            fill="none"
            stroke="#37e2ea"
            strokeWidth="6"
            opacity="0.18"
          />
        </g>
        <circle cx="170" cy="170" r="105" fill="#0b1220" stroke="#1e2c46" />
        <text
          x="170"
          y="185"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="64"
          fontWeight="600"
          fill="#eaf1fb"
        >
          AV
        </text>

        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 170 + 150 * Math.cos(rad);
          const y = 170 + 150 * Math.sin(rad);
          return <circle key={deg} cx={x} cy={y} r="3.5" fill="#37e2ea" />;
        })}
      </svg>
    </div>
  );
}

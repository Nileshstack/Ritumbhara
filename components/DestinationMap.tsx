"use client";

import type { DestinationStatus } from "@/data/destinations";
import { DESTINATIONS } from "@/data/destinations";

type MapMarker = {
  id: string;
  name: string;
  status: DestinationStatus;
  x: number;
  y: number;
};

const MARKERS: MapMarker[] = [
  { id: "alwar", name: "Alwar", status: "open", x: 148, y: 72 },
  { id: "sariska", name: "Sariska", status: "open", x: 88, y: 148 },
  { id: "jaipur", name: "Jaipur", status: "open", x: 108, y: 228 },
  { id: "agra", name: "Agra", status: "coming-soon", x: 228, y: 168 },
];

type DestinationMapProps = {
  activeId: string | null;
  onMarkerHover: (id: string) => void;
  onMarkerLeave: () => void;
};

export default function DestinationMap({
  activeId,
  onMarkerHover,
  onMarkerLeave,
}: DestinationMapProps) {
  return (
    <aside
      className="flex h-full min-h-[22rem] flex-col rounded-sm border border-neutral-200/80 bg-white lg:min-h-[32rem]"
      aria-label="Map of Ritumbhara destinations in Rajasthan and Agra"
    >
      <p className="px-5 pt-5 text-[0.65rem] font-medium tracking-[0.2em] text-neutral-400 uppercase">
        Our destinations
      </p>

      <div className="relative flex flex-1 items-center justify-center px-4 py-2 sm:px-6">
        <svg
          viewBox="0 0 320 300"
          className="h-full w-full max-h-[26rem] max-w-full"
          role="img"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mapLand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3ebe2" />
              <stop offset="100%" stopColor="#e8ddd2" />
            </linearGradient>
            <pattern
              id="mapGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#d9cfc4"
                strokeWidth="0.5"
                opacity="0.45"
              />
            </pattern>
          </defs>

          <path
            d="M 36 48
               C 72 28, 118 34, 156 52
               C 198 42, 248 58, 276 92
               C 292 126, 284 168, 262 204
               C 238 246, 188 268, 136 258
               C 88 248, 52 220, 40 178
               C 28 136, 24 88, 36 48 Z"
            fill="url(#mapLand)"
            stroke="#d4c8bb"
            strokeWidth="1.25"
          />
          <path
            d="M 36 48
               C 72 28, 118 34, 156 52
               C 198 42, 248 58, 276 92
               C 292 126, 284 168, 262 204
               C 238 246, 188 268, 136 258
               C 88 248, 52 220, 40 178
               C 28 136, 24 88, 36 48 Z"
            fill="url(#mapGrid)"
            opacity="0.55"
          />

          <path
            d="M 108 228 L 88 148 L 148 72"
            fill="none"
            stroke="#c9b9aa"
            strokeWidth="1"
            strokeDasharray="4 5"
            opacity="0.7"
          />
          <path
            d="M 148 72 L 228 168"
            fill="none"
            stroke="#d0c4b8"
            strokeWidth="1"
            strokeDasharray="4 5"
            opacity="0.55"
          />

          {MARKERS.map((marker) => {
            const isActive = activeId === marker.id;
            const isOpen = marker.status === "open";
            const fill = isOpen ? "#961a3c" : "#b8b0a8";
            const destination = DESTINATIONS.find((d) => d.id === marker.id);

            return (
              <g
                key={marker.id}
                className="cursor-pointer"
                onMouseEnter={() => onMarkerHover(marker.id)}
                onMouseLeave={onMarkerLeave}
                onFocus={() => onMarkerHover(marker.id)}
                onBlur={onMarkerLeave}
                tabIndex={0}
                role="button"
                aria-label={`${marker.name}, ${isOpen ? "open" : "coming soon"}`}
              >
                {isActive && (
                  <circle
                    cx={marker.x}
                    cy={marker.y}
                    r="16"
                    fill={isOpen ? "#961a3c" : "#b8b0a8"}
                    opacity="0.15"
                  />
                )}
                <circle
                  cx={marker.x}
                  cy={marker.y}
                  r={isActive ? 7 : 5.5}
                  fill={fill}
                  stroke="#faf7f2"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <text
                  x={marker.x}
                  y={marker.y + 18}
                  textAnchor="middle"
                  className="fill-neutral-500 text-[11px] font-medium"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {marker.name}
                </text>
                {destination && isActive && (
                  <title>{destination.description}</title>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex items-center gap-5 border-t border-neutral-100 px-5 py-4">
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full bg-ritumbhara-maroon"
            aria-hidden="true"
          />
          <span className="text-xs text-neutral-500">Open</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full bg-neutral-300"
            aria-hidden="true"
          />
          <span className="text-xs text-neutral-500">Coming soon</span>
        </div>
      </div>
    </aside>
  );
}

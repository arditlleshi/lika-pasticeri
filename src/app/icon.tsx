import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#E11D48",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 21h16" />
          <path d="M2 10s2-3 5-3 5 3 5 3 2-3 5-3 5 3 5 3" />
          <path d="M12 7V4a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1" />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  );
}
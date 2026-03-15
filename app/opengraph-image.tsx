import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "nr1websites — Websites die professioneel ogen en daadwerkelijk converteren";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#09090b",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            fontSize: "52px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#3662e3" }}>Nr1</span>
          <span style={{ color: "#ffffff" }}>websites</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: "760px",
            marginBottom: "32px",
          }}
        >
          Websites die professioneel ogen en daadwerkelijk converteren.
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: "20px",
            color: "#71717a",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
              flexShrink: 0,
            }}
          />
          Web agency · Lemmer, Friesland · nr1websites.nl
        </div>
      </div>
    ),
    { ...size },
  );
}

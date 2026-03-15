import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          borderRadius: "40px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "68px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#3B82F6" }}>Nr1</span>
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.01em",
            marginTop: "4px",
          }}
        >
          websites
        </div>
      </div>
    ),
    { ...size },
  );
}

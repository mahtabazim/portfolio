import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Md Mahtab Alam | Full-stack Developer";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public", "profile.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={140}
          height={140}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #333",
            marginBottom: "40px",
          }}
        />
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          Md Mahtab Alam
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            marginTop: "16px",
            color: "#a1a1a1",
          }}
        >
          Full-stack Developer · React · Next.js
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: "48px",
            color: "#666",
          }}
        >
          mahtabazim.me
        </div>
      </div>
    ),
    size
  );
}

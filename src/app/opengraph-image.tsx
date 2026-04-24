import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";
import { siteName, siteTagline } from "@/lib/site";
import { hy } from "@/messages/hy";

export const alt = siteName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const fontPath = path.join(
    process.cwd(),
    "node_modules/@fontsource/noto-sans-armenian/files/noto-sans-armenian-armenian-700-normal.woff"
  );
  const fontData = await readFile(fontPath);
  const logoPath = path.join(process.cwd(), "public/brand/only-icon.png");
  const logoBuf = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(145deg, #FDFCF9 0%, #F5F5F2 40%, #E8E9E0 100%)",
          fontFamily: "NotoArmenian",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#0A0C0F",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {/* Same mark as mobile `assets/only-icon.png` */}
          <img
            src={logoSrc}
            alt=""
            width={64}
            height={64}
            style={{
              borderRadius: 18,
              border: "1px solid rgba(168, 182, 160, 0.45)",
              objectFit: "contain",
              backgroundColor: "#F5F5F2",
            }}
          />
          {siteName}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#0A0C0F",
              maxWidth: 980,
            }}
          >
            {siteTagline}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(10, 12, 15, 0.78)",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            {hy.opengraph.subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(61, 70, 63, 0.85)",
            fontSize: 24,
            letterSpacing: "0.02em",
          }}
        >
          {hy.opengraph.footer}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "NotoArmenian",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}

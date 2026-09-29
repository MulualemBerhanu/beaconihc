import { ImageResponse } from "next/og";

export const alt = "Beacon In-Home Care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(145deg, #fbf9f6 0%, #f4f0e8 52%, #e8eee9 100%)",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "3px",
              background: "#c4a35a",
            }}
          />
          <div
            style={{
              display: "flex",
              color: "#1a2744",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Beacon In-Home Care
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              color: "#1a2744",
              fontSize: 58,
              lineHeight: 1.12,
              fontFamily: "Georgia, serif",
              maxWidth: "920px",
            }}
          >
            Care that feels personal. Support that feels like home.
          </div>
          <div
            style={{
              display: "flex",
              color: "#4f4a44",
              fontSize: 26,
              maxWidth: "760px",
              lineHeight: 1.4,
            }}
          >
            Compassionate in-home support for safety, dignity, and independence
            in Oregon.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#5c6f5c",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          beaconihc.com
        </div>
      </div>
    ),
    size,
  );
}

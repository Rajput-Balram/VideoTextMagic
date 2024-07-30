import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const title: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: 100,
  textAlign: "center",
  position: "absolute",
  bottom: 160,
  width: "100%",
};

const word: React.CSSProperties = {
  marginLeft: 10,
  marginRight: 10,
  display: "inline-block",
};

export const Title: React.FC<{
  titleText: string;
  titleColor?: string;
  titleFont: string;
  titleStyle: string;
}> = ({ titleText, titleStyle, titleFont, titleColor = "#000000" }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const words = titleText.split(" ");

  const fadeIn = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const slideIn = interpolate(frame, [0, 30], [50, 0], {
    extrapolateRight: "clamp",
  });
  const scaleUp = spring({ fps: videoConfig.fps, frame, from: 0.5, to: 1 });

  let effectStyle: React.CSSProperties = {};
  switch (titleStyle) {
    case "fadeIn":
      effectStyle = { opacity: fadeIn };
      break;
    case "slideIn":
      effectStyle = { transform: `translateY(${slideIn}px)` };
      break;
    case "scaleUp":
      effectStyle = { transform: `scale(${scaleUp})` };
      break;
    default:
      break;
  }

  return (
    <h1 style={{ ...title, fontFamily: titleFont, color: titleColor }}>
      {words.map((t, i) => {
        return (
          <span
            key={t}
            style={{
              ...word,
              ...effectStyle,
            }}
          >
            {t}
          </span>
        );
      })}
    </h1>
  );
};

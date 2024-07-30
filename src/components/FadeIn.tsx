import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const FadeIn = ({ value }: any) => {
  const frame = useCurrentFrame();

  //   const opacity = Math.min(1, frame / 60);
  const opacity = interpolate(frame, [0, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        fontSize: 80,
      }}
    >
      <div style={{ opacity: opacity }}>Hello World!</div>
      <div style={{ opacity: opacity }}>{value}</div>
    </AbsoluteFill>
  );
};

import { Sequence, useVideoConfig } from "remotion";
import { useVideoContext } from "./VideoContext";
import { Title } from "./Title";

export const Overlay: React.FC = () => {
  const { overlayArray, overlayFontFamily, overlayAnimation } =
    useVideoContext();
  const { fps } = useVideoConfig();
  console.log(overlayAnimation, overlayFontFamily, overlayArray);
  return (
    <>
      {overlayArray.map((overlay) => {
        return (
          <Sequence
            key={overlay.time}
            from={Number(overlay.time) * fps}
            durationInFrames={30}
          >
            <Title
              titleText={overlay.text}
              titleStyle={overlayAnimation}
              titleFont={overlayFontFamily}
            />
          </Sequence>
        );
      })}
    </>
  );
};

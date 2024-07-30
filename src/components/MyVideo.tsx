import { AbsoluteFill, Video } from "remotion";
import { Overlay } from "./Overlay";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        fontSize: 50,
      }}
    >
      <Overlay />
      <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    </AbsoluteFill>
  );
};

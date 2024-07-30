import { Player } from "@remotion/player";
import { MyVideo } from "./MyVideo";
import { AbsoluteFill } from "remotion";

export const MyPlayer: React.FC = () => {
  return (
    <div>
      <AbsoluteFill style={{ backgroundColor: "white" }}>
        <Player
          component={MyVideo}
          durationInFrames={1500}
          compositionWidth={1280}
          compositionHeight={720}
          fps={30}
          controls
        />
      </AbsoluteFill>
    </div>
  );
};

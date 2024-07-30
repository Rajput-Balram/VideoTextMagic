import { Player } from "@remotion/player";

import { OverlayInput } from "./components/OverlayInput";
import { MyVideo } from "./components/MyVideo";
import { VideoProvider } from "./components/VideoContext";

export const MyComponent = () => {
  return (
    <VideoProvider>
      <Player
        component={MyVideo}
        durationInFrames={1500}
        compositionWidth={1280}
        compositionHeight={720}
        fps={30}
        controls
        style={{ width: "100%" }}
      />
      <div style={{ width: "1i00%" }}>
        <OverlayInput />
      </div>
    </VideoProvider>
  );
};

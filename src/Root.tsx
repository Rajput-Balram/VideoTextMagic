import { Composition } from "remotion";
import { MyComponent } from "./MyComponent";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={60}
      fps={30}
      width={1280}
      height={720}
    />
  );
};

import React, { createContext, useContext, useMemo, useState } from "react";

interface VideoContextProps {
  overlayArray: { text: string; time: string }[];
  setOverlayArray: React.Dispatch<
    React.SetStateAction<{ text: string; time: string }[]>
  >;
  overlayFontFamily: string;
  setOverlayFontFamily: React.Dispatch<React.SetStateAction<string>>;
  overlayAnimation: string;
  setOverlayAnimation: React.Dispatch<React.SetStateAction<string>>;
}

const VideoContext = createContext<VideoContextProps | undefined>(undefined);

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [overlayArray, setOverlayArray] = useState<
    { text: string; time: string }[]
  >([]);
  const [overlayFontFamily, setOverlayFontFamily] = useState<string>(
    `'Montserrat', sans-serif`
  );
  const [overlayAnimation, setOverlayAnimation] = useState<string>("fadeIn");

  const providerObj = useMemo(
    () => ({
      overlayArray,
      setOverlayArray,
      overlayFontFamily,
      setOverlayFontFamily,
      overlayAnimation,
      setOverlayAnimation,
    }),
    [overlayArray, overlayFontFamily, overlayAnimation]
  );

  return (
    <VideoContext.Provider value={providerObj}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideoContext must be used within a VideoProvider");
  }
  return context;
};

// import React, { useState } from "react";
// import { downloadFile } from "@remotion/renderer";
// import { MyVideo } from "./MyVideo";

// const renderVideo = async (): Promise<Blob> => {
//   // Set up Remotion rendering configuration
//   const videoConfig = {
//     component: MyVideo,
//     compositionWidth: 1280,
//     compositionHeight: 720,
//     fps: 30,
//     durationInFrames: 1500,
//     outputLocation: "./path-to-local-rendered-video.mp4", // Adjust as needed
//   };

//   // Render video
//   const { outputPath } = await render(videoConfig);

//   // Fetch the rendered video as a Blob
//   const response = await fetch(outputPath);
//   const videoBlob = await response.blob();
//   return videoBlob;
// };

// const generateVideoBlob = async (): Promise<Blob> => {
//   const videoBlob = await renderVideo();
//   return videoBlob;
// };

// export const VideoDownload: React.FC = () => {
//   const [videoUrl, setVideoUrl] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const generateVideo = async () => {
//     setIsLoading(true);
//     try {
//       const videoBlob = await generateVideoBlob();
//       const videoObjectUrl = URL.createObjectURL(videoBlob);
//       setVideoUrl(videoObjectUrl);
//     } catch (error) {
//       console.error("Failed to generate video:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={generateVideo} disabled={isLoading}>
//         {isLoading ? "Generating Video..." : "Generate and Download Video"}
//       </button>
//       {videoUrl && (
//         <a href={videoUrl} download="video.mp4">
//           <button>Download Video</button>
//         </a>
//       )}
//     </div>
//   );
// };

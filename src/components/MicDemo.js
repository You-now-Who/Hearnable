import React from "react";
import { MediaStreamProvider } from "react-mic-waver";
import AudioVisComponent from "./AudioVisComponent";

function MicDemo() {
  return (
    <div>
      <MediaStreamProvider video={false} audio={true}>
        <AudioVisComponent/>
      </MediaStreamProvider>
    </div>
  );
}

export default MicDemo;

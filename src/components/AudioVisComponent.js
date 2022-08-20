import React from 'react'

import AudioVisualiser, { useMediaStream } from "react-mic-waver";


function AudioVisComponent() {

    
  
  const { stream, start, stop } = useMediaStream();

  const toggleMic = () => stream ? stop() : start()

  

  return (
    
      <div className='container my-3'>
       <button className="btn btn-primary" onClick={toggleMic}>
          {stream ? 'Close Microphone' : "Open Microphone"}
        </button>
        <AudioVisualiser className="my-3" stream={stream} onRender={() => console.log("Render!")} style={{background: "white"}}/>
      </div>
    
  );
};
  

export default AudioVisComponent
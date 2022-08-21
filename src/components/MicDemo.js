import React, { useRef, useEffect } from "react";

import WaveSurfer from "wavesurfer.js";
import AudioVisComponent from "./AudioVisComponent";
var cors = require('cors');

let xhr = { cache: 'default', mode: 'no-cors', method: 'GET', credentials: 'same-origin', redirect: 'follow', referrer: 'client'};
function MicDemo() {
    let wavesurfer = useRef(null);
    // useEffect(() => {
    //     if (wavesurfer.current != null) return;
    //     console.log("reached useEffect");
    //     wavesurfer.current = WaveSurfer.create({
    //         container: "#waveform",
    //         waveColor: "grey",
    //         progressColor: "tomato",
    //         height: 140,
    //         cursorWidth: 1,
    //         cursorColor: "lightgrey",
    //         barWidth: 2,
    //         normalize: true,
    //         fillParent: true,
    //         xhr: xhr,
    //         responsive: true
    //         });
    //     wavesurfer.current.load("https://soundcloud.com/ma-suwa/sweet-ballistic-missile?si=68f87de733e74130a03469f4811acbf7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
    //     console.log("Loaded successfully", wavesurfer);
    // }, []);
  return (
    <div>
        <div className="bg-light">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="display-5 text-center">
                            <strong>Hearnable</strong>
                        </h2>
                        <p className="lead text-center">
                            Try it out now!
                        </p>
                    </div>
                    
                    {/* <div id="waveform"></div> */}
                </div>
            </div>
        </div>
      {/* <MediaStreamProvider video={false} audio={true}> */}
        <div className="container">
            <AudioVisComponent/>
        </div>
      {/* </MediaStreamProvider> */}
    </div>
  );
}

export default MicDemo;

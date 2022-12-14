import React, { useState, useRef, useEffect } from "react";
import { ReactMic } from "react-mic";
import WaveSurfer from "wavesurfer.js";
import { DecibelMeter } from 'decibel-meter'


let xhr = { cache: 'default', mode: 'no-cors', method: 'GET', credentials: 'same-origin', redirect: 'follow', referrer: 'client'};
export default function Microphone({ pushFile }) {
  const [record, setRecord] = useState(false);
  
  const [open, setOpen] = React.useState(false);
  const [tempFile, setTempFile] = React.useState(null);

  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);

  const wavesurfer = useRef(null);

        

  useEffect(() => {
        if (wavesurfer.current != null) return;
        console.log("reached useEffect");
        wavesurfer.current = WaveSurfer.create({
            container: "#waveform",
            waveColor: "grey",
            progressColor: "tomato",
            height: 140,
            cursorWidth: 1,
            cursorColor: "lightgrey",
            barWidth: 2,
            normalize: true,
            fillParent: true,
            xhr: xhr,
            responsive: true
            });
        wavesurfer.current.load("https://soundcloud.com/ma-suwa/sweet-ballistic-missile?si=68f87de733e74130a03469f4811acbf7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
        console.log("Loaded successfully", wavesurfer);

        
        wavesurfer.current.on("ready", () => {
        setPlayerReady(true);
        });

        const handleResize = wavesurfer.current.util.debounce(() => {
        wavesurfer.current.empty();
        wavesurfer.current.drawBuffer();
        }, 150);

        wavesurfer.current.on("play", () => setIsPlaying(true));
        wavesurfer.current.on("pause", () => setIsPlaying(false));
        window.addEventListener("resize", handleResize, false);
        }, [open, tempFile]);




  useEffect(() => {
    console.log("tempFile", tempFile);
    if (tempFile != null ) {
        console.log("tempFile", tempFile.blobURL);
        console.log("wavesurfer", wavesurfer);
        wavesurfer.current.load(tempFile);
        wavesurfer.current.load(tempFile.blobURL);
    }
  }, [tempFile]);

  const togglePlayback = () => {
    if (!isPlaying) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
    // meter.on('ready', function (meter, sources) {
    //     audioSources = sources;
    //     });
  };
  const stopPlayback = () => wavesurfer.current.stop();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDone = () => {
    if (tempFile) {
      pushFile(tempFile);
      setTempFile(null);
      setRecord(false);
      setOpen(false);
    }
  };

  const handleCancel = () => {
    setRecord(false);
    setTempFile(null);
    setOpen(false);
  };

  const startRecording = () => {
    setTempFile(null);
    setRecord(true);
    
    // median(audioSources);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = recordedBlob => {
    console.log("chunk of real-time data is: ", recordedBlob);
    setVolumeLevel(969 - recordedBlob.size)
  };

  const onStop = recordedBlob => {
    setTempFile(recordedBlob);
    console.log("recordedBlob was stopped: ", recordedBlob);
    setVolumeLevel(Math.random(30, 60));
    console.log("volumeLevel = ", volumeLevel)
  };
  
  const playAudio = () => {
    if (wavesurfer.current.isPlaying()) {
      wavesurfer.current.pause();
    } else {
      wavesurfer.current.play();
      wavesurfer.current.setVolume(3)
    }
  };
//   const classes = useStyles();

  return (
    <>
        {console.log("record: ", record) }
        
        {/* {record ? (
        <div className="text-center">
            <ReactMic
                record={record}
                className="react-mic"
                onStop={onStop}
                onData={onData}
                strokeColor="grey"
                backgroundColor="white"
            />
        </div>) : (
            <p></p>
        )} */}

        <div>
            <h3 className="display-10">Record:</h3>
            <div className="text-center">
                <ReactMic
                    record={record}
                    className="react-mic"
                    onStop={onStop}
                    onData={onData}
                    strokeColor="grey"
                    backgroundColor="white"
                />
            </div>
        </div>
        

        <div>
            <h3 className="display-10">Playback:</h3>
            <div className="my-2" id="waveform"></div>
        </div>

        {/* <p>Volume: {wavesurfer.current.getVolume()}</p> */}
        
           
        <div className="text-center my-2" width="100%">
            
            <div >
                <button className="btn btn-danger mx-2" m="4" onClick={playAudio}>
                Play / Pause
                </button>
                <button className="btn btn-primary mx-2" m="4" onClick={startRecording}>
                    Record
                </button>
                <button className="btn btn-primary mx-2" m="4" onClick={stopRecording}>
                    Stop Recording
                </button>
            </div>
        </div>
        <div>
            <h3 className="display-7 my-5"><strong>Volume level: </strong> <p className="display-7 text-success"> {volumeLevel}</p></h3>
            {volumeLevel>0.3?
            <h3 className="display-10 text-success">Your enviornment noise seems normal</h3>
            :
            <h3>Your enviornment noise is too loud</h3>
            }
        </div>
    </>
  );
}

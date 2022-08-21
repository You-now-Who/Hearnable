import React, { useState, useRef, useEffect } from "react";
import { ReactMic } from "react-mic";
import WaveSurfer from "wavesurfer.js";
import { Flex, Button } from "@chakar-ui/react";



export default function Microphone({ pushFile }) {
  const [record, setRecord] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [tempFile, setTempFile] = React.useState(null);

  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurfer = useRef(null);


  const waveform = useRef(null);


  useEffect(() => {
    if (!open || (open && !tempFile)) return;

    if(!waveform.current){
        wavesurfer.current = WaveSurfer.create({
        container: "#wavesurfer-id",
        waveColor: "grey",
        progressColor: "tomato",
        height: 140,
        cursorWidth: 1,
        cursorColor: "lightgrey",
        barWidth: 2,
        normalize: true,
        responsive: true
        });
    }

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
    if (tempFile) {
      wavesurfer.current.load(tempFile.blobURL);
    }
  }, [tempFile]);

  const togglePlayback = () => {
    if (!isPlaying) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
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
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = recordedBlob => {
    //console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = recordedBlob => {
    setTempFile(recordedBlob);
  };
  
  const playAudio = () => {
    if (waveform.current.isPlaying()) {
      waveform.current.pause();
    } else {
      waveform.current.play();
    }
  };
//   const classes = useStyles();

  return (
    <>
        <ReactMic
            record={record}
            className="react-mic"
            onStop={onStop}
            onData={onData}
            strokeColor="grey"
            backgroundColor="white"
        />
         <Flex flexDirection="column" w="100%">
            <div id="waveform" />
            <Flex flexDirection="row" justifyContent="center">
                <Button m="4" onClick={playAudio}>
                Play / Pause
                </Button>
            </Flex>
        </Flex>
    </>
  );
}

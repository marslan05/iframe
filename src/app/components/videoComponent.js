import React, { useEffect, useState } from "react";
import VideoPlayer from "./video";

function VideoPlayerComponent({
  screenSize,
  videoUrl,
  videoPoster,
  videoWebm,
  className,
  videoMov,
  id,
}) {
  // const [videoLoaded, setVideoLoaded] = useState(false);
  // useEffect(() => {
  //     const video = document.getElementById("video");

  //     const handleLoadedData = () => {
  //     setVideoLoaded(true);
  //     };

  //     video.addEventListener("loadeddata", handleLoadedData);

  //     return () => {
  //     video.removeEventListener("loadeddata", handleLoadedData);
  //     };
  // }, []);

  // make mp4 video link, when webm is not supported
  // return (
  // );

  return (
    <>
      {/* {screenSize === "desktop" ? ( */}
        <video
          id={id}
          className={className}
          muted
          autoPlay
          playsInline
          loop
          poster={videoPoster}
        >
          <source src={videoMov} />
          <source src={videoWebm} />
          {/* <source src={videoUrlMp4} type="video/mp4" /> */}
        </video>
      {/* // ) : ( */}
        {/* <div
          className={
            id != "background-video" ? "vimeo-wrapper" : "vimeo-wrapper-mobile"
          }
        >
          <iframe
            src={videoUrl}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen={true}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title={id}
          ></iframe>
        </div>
      )} */}
    </>
  );
}

export default VideoPlayerComponent;

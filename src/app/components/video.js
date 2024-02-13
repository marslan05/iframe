import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer({ url, poster, className, mobile = false }) {
  const [playing, setPlaying] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handlePlay = () => {
    setPlaying(true);
    setOverlayVisible(false);
  };
  // const [hasWindow, setHasWindow] = useState(false);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setHasWindow(true);
  //   }
  // }, []);
  
  return (
    <div style={{ position: 'relative' }}>
      <div className='player-wrapper'>
          {/* <ReactPlayer */}
          <ReactPlayer
            url={url}
            muted={true}
            loop={true}
            className={className}
            playing={true}
            // light={poster}
            controls={false}
            width={mobile ? '100wh' : '100vh'}
            height={mobile ? '100vh' : '100vh'}
            volume={0}
            playsInline
            onPlay={handlePlay}
            config={{
              file: {
                attributes: {
                  playsInline: true,
                },
              },
            }}
          />
        </div>
    </div>
  );
}

export default VideoPlayer;

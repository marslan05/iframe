import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

function App() {
  useLayoutEffect(() => {
    // alert("before loading");
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // Get the height of the viewport
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    console.log("Viewport Width: " + viewportWidth);
    console.log("Viewport Height: " + viewportHeight);

    if (viewportWidth > 1100) {
      alert("make changes " + viewportWidth + " x " + viewportHeight);
      setVideoWidth(viewportHeight);
      setSidebarWidth(viewportWidth - viewportHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    // Get the current width of the div
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // Get the height of the viewport
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    console.log("Viewport Width: " + viewportWidth);
    console.log("Viewport Height: " + viewportHeight);

    if (viewportWidth > 1100) {
      setVideoWidth(viewportHeight);
      setSidebarWidth(viewportWidth - viewportHeight);
    }
  };

  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [videorWidth, setVideoWidth] = useState(0);
  const [videoStep, setVideoStep] = useState(1);

  const projects = [
    {
      // video:
      //   "https://player.vimeo.com/video/908328877?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1",
      video: "/mobilecare.mov",
    },
    // {
    //   video:
    //     "https://player.vimeo.com/video/908328829?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1",
    // },
    // {
    //   video:
    //     "https://player.vimeo.com/video/908328805?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1",
    // },
  ];

  return (
    <div className="app">
      <div className="sidebar" style={{ width: sidebarWidth }}>
        <p>Step = {videoStep}</p>
        <br />
        <p>After Loading Sidebar</p>
        <br />
        <button
          onClick={() => {
            if (videoStep !== 1) {
              setVideoStep(videoStep - 1);
            }
          }}
        >
          prev
        </button>
        <br />
        <button
          onClick={() => {
            if (videoStep < 3) {
              setVideoStep(videoStep + 1);
            }
          }}
        >
          Next
        </button>
      </div>
      <div className="video" style={{ width: videorWidth }}>
        <video muted autoPlay playsInline loop>
          <source
            src="/mobilecare.mov"
            // type="video/webm"
          />
        </video>
        {/* {projects?.map((item, index) => {
          if (index + 1 === videoStep) {
            return (
              <iframe
                // style={{ width: videorWidth }}
                src={item?.video}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen={true}
                style={{
                  position: "absolute",
                  top: "0px",
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                // height="100%"
                // width="100%"
                title="MobileCare Project"
              ></iframe>
            );
          }
        })} */}
      </div>
    </div>
  );
}

export default App;

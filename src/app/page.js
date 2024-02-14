"use client";
// @refresh reset
// @useClient
import { useState, useEffect } from "react";
import MobileVideo from "./components/mobileVideo";
import DesktopVideo from "./components/desktopVideo";
import Footer from "./components/footer";

export default function Home() {
  const [videoStep, setVideoStep] = useState(1);
  const [width, setWidth] = useState(0);

  const projects = [
    {
      name: "Mobilecare",
      videoWebm: "/mobilecare.webm",
      videoMov: "/mobilecare.mov",
      iframeVideo:
        "https://player.vimeo.com/video/908328877?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1",
      description:
        "E-shop s obratom 1,7 mil. € ročne expanduje v roku 2024 do ďalšej krajiny a v tejto súvislosti firma prešla redizajnom, ktorý okrem iného zahŕňa úplne nový dizajn e-shopu a prezentačnej webstránky.",
      tags: [
        "Vizuálna identita",
        "Font na mieru",
        "Web",
        "Ikony na mieru",
        "E-shop",
        "UX",
        "Merchandise",
        "Social media",
        "Print",
      ],
    },
    {
      name: "Cirkev bratská",
      videoWebm: "/cbpo.webm",
      videoMov: "/cbpo.mov",
      iframeVideo:
        "https://player.vimeo.com/video/908328829?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1",
      description:
        "Inšpiráciou pri tvorbe loga a plagátov boli dobové fotografie zo stavby modlitebne a samotného chodu cirkevného zboru.",
      tags: ["Redizajn", "Logo", "Print"],
    },
    {
      name: "Apartment Holdings",
      videoWebm: "/ah.webm",
      videoMov: "/ah.mov",
      iframeVideo:
        "https://player.vimeo.com/video/908328805?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&loop=1",
      description:
        "Výsledkom spolupráce so spoločnosťou Apartment Holdings, ktorá spravuje a následne prenajíma 24 nehnuteľností v Českej republike a na Slovensku, je redizajn webstránky, videoprodukcia a online kampaň na sociálnych sieťach.",
      tags: ["Web", "PPC", "Online reklama", "Tvorba videí"],
    },
  ];

  const handleResize = () => {
    // Get the current width of the div
    const currentWidth = document.getElementById("video").clientWidth();
    alert("currentWidth ", currentWidth);
    setWidth(currentWidth);
  };

  useEffect(() => {
    // Initialize the width
    handleResize();
    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main id="video" className="hide-on-mobile w-auto relative">
        {projects?.length > 0 ? (
          projects?.map((item, index) => {
            if (index + 1 === videoStep) {
              return (
                <DesktopVideo
                  key={index}
                  videoWebm={item?.videoWebm}
                  videoMov={item?.videoMov}
                  width={width}
                  videoStep={videoStep}
                  setVideoStep={setVideoStep}
                  projectsLength={projects.length}
                  name={item?.name}
                  tags={item?.tags}
                  description={item?.description}
                  videoUrl={item?.iframeVideo}
                  videoPoster="/placeholder.svg"
                />
              );
            }
          })
        ) : (
          <div className="min-h-svh flex w-full flex-col justify-center items-center align-middle ">
            <p className="text-[#0D0D0D] text-2xl font-medium">No Projects</p>
          </div>
        )}
      </main>

      {/* mobile videos */}
      <main
        id="parentMain"
        className="flex main-wrapper show-on-mobile min-h-svh min-w-svw  remove-height flex-col justify-end relative"
      >
        <div className="show-on-mobile flex flex-col w-full min-w-svw">
          {projects?.length > 0 ? (
            projects?.map((item, index) => {
              return (
                <MobileVideo
                  key={index}
                  name={item?.name}
                  tags={item?.tags}
                  description={item?.description}
                  videoWebm={item?.videoWebm}
                  videoMov={item?.videoMov}
                  videoUrl={item?.iframeVideo}
                  // videoUrl="/sample.MOV"
                  videoPoster="/placeholder.svg"
                />
              );
            })
          ) : (
            <div className="h-[300px] flex w-full flex-col justify-center items-center align-middle ">
              <p className="text-[#0D0D0D] text-2xl font-medium">No Projects</p>
            </div>
          )}
        </div>
      </main>
      {/* mobile videos */}
      {/* footer */}
      <Footer />
      {/* footer */}
    </>
  );
}

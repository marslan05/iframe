import { Suspense, useState } from "react";
import VideoPlayerComponent from "./videoComponent";
const MobileVideo = ({
  name,
  description,
  videoMov,
  videoWebm,
  tags,
  videoUrl,
  videoPoster,
}) => {
  const [showMore, setShowMore] = useState();
  return (
    <div className="relative h-auto flex-col justify-between flex w-full ">
      <Suspense fallback={<div>Loading...</div>}>
        <VideoPlayerComponent
          screenSize="mobile"
          videoUrl={videoUrl}
          videoMov={videoMov}
          videoWebm={videoWebm}
          videoPoster={videoPoster}
          className="w-full h-auto object-contain object-center"
          id="background-video"
        />
      </Suspense>

      {/* <video
        className="w-full h-auto object-contain object-center"
        id="background-video"
        muted
        autoPlay
        playsInline
        loop
        poster={videoPoster}
        // style={{ objectFit: "unset" }}
      >
        <source src={videoUrl} type="video/webm" />
      </video> */}
      {showMore ? (
        <div className="absolute p-6 bg-[#0D0D0D] h-full w-full bottom-0 right-0 z-[1000]">
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-4 ">
              <div className="flex gap-3 flex-col">
                <div className="flex align-middle justify-between ">
                  <h1 className="text-white font-[GeneralSansMedium] font-medium text-[32px]">
                    {name}
                  </h1>
                </div>
                <p className="text-white text-sm font-normal">{description}</p>
              </div>

              {tags?.length > 0 ? (
                <div className="flex align-middle items-center gap-1.5 flex-wrap">
                  {tags?.map((tag, index) => {
                    return (
                      <button
                        key={index}
                        className="px-2.5 py-1 border-2 font-[GeneralSansMedium] border-[#5E79FF] text-white text-sm font-medium"
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <button
              onClick={() => {
                setShowMore(false);
              }}
              className="h-10 cursor-pointer flex align-middle font-[GeneralSansMedium] w-max ml-auto gap-2 items-center text-[#0D0D0D] text-xl bg-white font-medium px-4 border-2 border-white"
            >
              zobraziť menej
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_408_1155)">
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#0D0D0D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_408_1155">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      ) : null}
      <div className="flex align-middle absolute items-center justify-end p-6 bottom-0 z-100 w-full">
        <button
          onClick={() => {
            setShowMore(true);
          }}
          className="h-10 cursor-pointer font-[GeneralSansMedium] flex align-middle items-center text-[#fff] text-xl bg-[#0D0D0D] font-medium px-4 border-2 border-[#0D0D0D]"
        >
          viac o projekte
        </button>
      </div>
    </div>
  );
};

export default MobileVideo;

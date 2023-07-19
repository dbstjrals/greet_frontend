import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Keyboard } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/free-mode";

import deleteImageIcon from "../images/deleteImageIcon.svg";

interface Attachment {
  file: File;
}

interface ImageSwiperProps {
  handleImageDelete: (image: Attachment) => void;
  attachments: Attachment[];
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({
  attachments,
  handleImageDelete,
}) => {
  console.log("rerender");
  return (
    <Swiper
      style={{
        width: "calc(100% - 74px)",
        height: "64px",
        zIndex: "0",
        flexShrink: "0",
      }}
      slidesOffsetBefore={0}
      slidesPerView="auto"
      spaceBetween={10}
      mousewheel
      keyboard
      freeMode
      modules={[FreeMode, Mousewheel, Keyboard]}
      observer={true}
      observeParents={true}
    >
      {attachments.map((image, index) => (
        <SwiperSlide
          style={{
            width: "64px",
            height: "64px",
          }}
        >
          <div
            key={index}
            style={{
              display: "inline-block",
              marginRight: index === attachments.length - 1 ? "" : "10px",
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${URL.createObjectURL(image.file)})`,
                width: "64px",
                height: "64px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            ></div>
            <button
              onClick={() => handleImageDelete(image)}
              style={{
                position: "absolute",
                top: "1px",
                right: "1px",
                background: "transparent",
                padding: "0",
                border: "none",
                cursor: "pointer",
                width: "16px",
                height: "16px",
              }}
            >
              <img
                src={deleteImageIcon}
                alt="x"
                width="16px"
                height="16px"
              ></img>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default React.memo(ImageSwiper);

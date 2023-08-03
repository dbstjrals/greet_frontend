// Module import
import React, { FC } from "react";
import styled from "styled-components";

// Style import

// Image import

interface GradientProfileImageProps {
  userImage: string;
  gradientColor: string;
  size?: number;
}

const GradientProfileImage: FC<GradientProfileImageProps> = ({
  userImage,
  gradientColor,
  size,
}: GradientProfileImageProps) => {
  return (
    <ImageBorder
      key={""}
      style={{
        backgroundImage: `linear-gradient(#fff, #fff), linear-gradient(${gradientColor})`,
        height: size ? size : "",
        minWidth: size ? size : "",
        width: size ? size : "",
        border:
          size === 26
            ? "1.5px solid transparent"
            : size === 80
            ? "3px solid transparent"
            : "",
      }}
    >
      <UserImage
        style={{
          backgroundImage: `url(${userImage})`,
          height: size === 26 ? "24px" : size === 80 ? "74px" : "",
          width: size === 26 ? "24px" : size === 80 ? "74px" : "",
        }}
      ></UserImage>
    </ImageBorder>
  );
};

export default GradientProfileImage;

const ImageBorder = styled.div`
  flex: 40;
  position: relative;
  min-width: 40px;
  flex-grow: 0;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 50%;
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
// linear-gradient(135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%);
// linear-gradient(to right, rgba(252,53,76,1), rgba(0,215,211,1));
const UserImage = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

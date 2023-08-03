// Module import
import React, { FC, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Style import
import { colors } from "../styles/colors";
import { fontStyles } from "../styles/fontStyle";

// Image import
import greetingIcon from "../images/greetingIcon.png";

// Component import
import GradientProfileImage from "./GradientProfileImage";

interface MemberCardContainerProps {
  userId: number;
  userImage: string;
  userColor: string;
  userName: string;
  userCommentary: string;
  userInfo: string;
  userRoleLevel: { role: string; level: number }[];
  isGreet: boolean;
  teamName?: string;
}

const MemberCardContainer: FC<MemberCardContainerProps> = ({
  userId,
  userImage,
  userColor,
  userName,
  userCommentary,
  userInfo,
  userRoleLevel,
  isGreet,
  teamName,
}: MemberCardContainerProps) => {
  const navigate = useNavigate();
  const [hasGreet, setHasGreet] = useState<Boolean>(isGreet);

  return (
    <CardContainer
      onClick={() => {
        console.log("aa");
        navigate(`/profile/${userId}`);
      }}
    >
      <div
        style={{
          display: "flex",
          height: "40px",
          flexWrap: "wrap",
          marginBottom: "10px",
        }}
      >
        <GradientProfileImage userImage={userImage} gradientColor={userColor} />
        <div style={{ flex: "14" }}></div>
        <div style={{ flex: "231", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", position: "relative" }}>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: `${colors.textActive}`,
                height: "17px",
                marginBottom: "8px",
              }}
            >
              {userName}
              <RoundTag
                style={{
                  position: "absolute",
                  marginLeft: "5px",
                  display: teamName ? "" : "none",
                  backgroundColor: `${colors.bgOnSurface}`,
                  color: `${colors.textDefault}`,
                }}
              >
                {teamName}
              </RoundTag>
            </div>
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: `${colors.textActive}`,
              lineHeight: "13px",
            }}
          >
            {userCommentary}
          </div>
        </div>
        <div style={{ flex: "17" }}></div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setHasGreet((prev) => !prev);
          }}
          style={{
            flex: "32",
            backgroundColor: hasGreet ? "" : "#2E2E2E",
            backgroundImage: hasGreet
              ? "linear-gradient(135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%)"
              : "",
            width: "32px",
            height: "32px",
            marginTop: "auto",
            marginBottom: "auto",
            borderRadius: "5.45px",
            minWidth: "32px",
            maxWidth: "32px",
            position: "relative",
          }}
        >
          <img
            src={greetingIcon}
            alt=""
            width="16px"
            height="16px"
            style={{ position: "absolute", top: "7.5px", left: "6.8px" }}
          ></img>
        </div>
      </div>
      <div
        style={{
          ...fontStyles.body3Regular,
          overflow: "hidden",
          height: "35px",
          color: `${colors.textDefault}`,
          lineHeight: "19.2px",
          marginBottom: "12px",
        }}
      >
        {userInfo}
      </div>
      <div style={{ display: "flex" }}>
        {userRoleLevel.map((item) => {
          const levelInText =
            item.level === 1
              ? "최근에 시작했어요"
              : item.level === 2
              ? "열심히 하고 있어요"
              : "자유자재로 해요";
          return (
            <div
              style={{
                display: "inline-block",
                color: `${colors.primary100}`,
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "19.2px",
                marginRight: "8px",
              }}
            >
              <RoundTag
                style={{
                  backgroundColor: `${colors.primary100}`,
                  color: `${colors.textDarken}`,
                  marginRight: "4px",
                }}
              >
                {item.role}
              </RoundTag>
              {levelInText}
            </div>
          );
        })}
      </div>
    </CardContainer>
  );
};

export default MemberCardContainer;

const CardContainer = styled.div`
  width: 100%;
  height: 139px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 12px;
  background-color: ${colors.grey00};
  cursor: pointer;
`;
const RoundTag = styled.div`
  padding: 1px 8px;
  border-radius: 100px;
  display: inline-block;
  height: 18px;
  box-sizing: border-box;
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
`;

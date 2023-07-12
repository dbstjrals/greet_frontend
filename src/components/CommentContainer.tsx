import React, { FC } from "react";
// import styled from "styled-components";
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";
import kebabIcon from "../images/kebabIcon.svg";

interface CommentContainerProps {
  type: boolean;
  profileImage: string;
  name: string;
  commentTime: string;
  commentContent: string;
  profileOnClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  kebabOnClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const CommentContainer: FC<CommentContainerProps> = ({
  type: isMyComment,
  profileImage,
  name,
  commentTime,
  commentContent,
  profileOnClick,
  kebabOnClick,
}: CommentContainerProps) => {
  return (
    <div
      style={{
        padding: isMyComment ? "16px" : "16px 16px 16px 46px",
        backgroundColor: isMyComment ? "" : `${colors.grey00}`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* 케밥 이외 */}
      <div style={{ display: "flex", gap: "10px" }}>
        <img width="30px" height="30px" src={profileImage} alt="프로필 사진" />
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", height: "12px" }}>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: `${colors.textActive}`,
                marginRight: "6px",
              }}
            >
              {name}
            </div>
            <div
              style={{
                ...fontStyles.caption2Medium,
                color: `${colors.textDefault}`,
              }}
            >
              {commentTime}
            </div>
          </div>
          <div
            style={{
              ...fontStyles.body3Regular,
              color: `${colors.textActive}`,
              lineHeight: "19px",
            }}
          >
            {commentContent}
          </div>
        </div>
      </div>
      {/* 케밥 */}
      <div>
        <img
          onClick={kebabOnClick}
          width="16px"
          height="16px"
          src={kebabIcon}
          alt="편집"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default CommentContainer;

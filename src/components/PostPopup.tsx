// Module import
import React, { FC, useState } from "react";
import styled from "styled-components";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";

// Image import

// Component import
import PageContainer from "./PageContainer";

interface PostPopupProps {
  closeOnclick: React.Dispatch<React.SetStateAction<boolean>>;
  handleReReplyClick?: string;
  isPost: boolean;
  isMine: boolean;
}

const PostPopup: FC<PostPopupProps> = ({
  closeOnclick,
  handleReReplyClick,
  isPost,
  isMine,
}: PostPopupProps) => {
  return (
    <div
      onClick={() => {
        closeOnclick(false);
      }}
      style={{
        zIndex: "2",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <PageContainer>
        <div
          onClick={(e) => {
            e.stopPropagation(); // 클릭 이벤트 버블링(stopPropagation)을 막습니다.
          }}
          style={{
            width: "calc(100% - 32px)",
            maxWidth: "468px",
            boxSizing: "border-box",
            color: `${colors.textActive}`,
            position: "fixed",
            margin: "0 auto",
            left: "0",
            right: "0",
            bottom: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {(isMine || !isPost) && (
            <ButtonWrapper
              onClick={
                isPost
                // 게시물 수정
                  ? () => closeOnclick(false)
                  : isMine
                  // 댓글 수정
                  ? () => closeOnclick(false)
                  : () => {
                      closeOnclick(false);
                    }
              }
              style={{ borderRadius: "6px 6px 0 0" }}
            >
              {isPost ? "게시물 수정" : isMine ? "댓글 수정" : "대댓글"}
            </ButtonWrapper>
          )}
          <ButtonWrapper style={{ borderRadius: !isMine && isPost ? "6px" : "0 0 6px 6px"}}>
            {isPost
              ? isMine
                ? "게시물 삭제"
                : "게시물 신고"
              : isMine
              ? "댓글 삭제"
              : "댓글 신고"}
          </ButtonWrapper>
          <ButtonWrapper
            onClick={() => closeOnclick(false)}
            style={{ marginTop: "6px" }}
          >
            취소
          </ButtonWrapper>
        </div>
      </PageContainer>
    </div>
  );
};

export default PostPopup;

const ButtonWrapper = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${colors.bgInputBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.textDefault};
  cursor: pointer;
  border-radius: 6px;
`;

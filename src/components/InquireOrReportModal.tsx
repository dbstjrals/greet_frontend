// Module import
import React, { FC } from "react";

// Style import
import { colors } from "../styles/colors";
import { fontStyles } from "../styles/fontStyle";

// Image import
import xIcon from "../images/xIcon.svg";
import copyIcon from "../images/copyIcon.svg";

/* 문의하기-> true 신고하기-> false */
interface InquireOrReportModalProps {
  isInquire: boolean;
  closeOnclick: React.Dispatch<React.SetStateAction<boolean>>;
}

const InquireOrReportModal: FC<InquireOrReportModalProps> = ({
  isInquire,
  closeOnclick,
}: InquireOrReportModalProps) => {
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
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{
          position: "fixed",
          top: "220px",
          left: "0",
          right: "0",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: `${colors.bgOnSurface}`,
          width: "calc(100% - 32px)",
          maxWidth: "468px",
          borderRadius: "8px",
          padding: "20px 18px",
          boxSizing: "border-box",
          color: `${colors.textActive}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "26px",
          }}
        >
          <div style={{ width: "24px" }}></div>
          <h1
            style={{
              textAlign: "center",
              ...fontStyles.heading3Bold,
            }}
          >
            문의하기
          </h1>
          <img
            onClick={() => closeOnclick(true)}
            width={"24px"}
            height={"24px"}
            src={xIcon}
            alt="문의하기 창 닫기"
            style={{ cursor: "pointer" }}
          />
        </div>
        <p style={{ ...fontStyles.subheadingRegular, marginBottom: "16px" }}>
          이용하면서 불편하시거나 개선할 부분이 있거나 문의하고 싶은 내용이
          있다면 아래 이메일로 해당 내용을 보내주세요. 최대한 빠르게 답변 드릴
          수 있도록 하겠습니다.
        </p>
        <div
          // onClick={() => 링크복사하는 함수}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            backgroundColor: `${colors.bgInputBorder}`,
            borderRadius: "8px",
            height: "60px",
            boxSizing: "border-box",
            cursor: "pointer",
          }}
        >
          <div>official.greet@gmail.com</div>
          <img width="24px" height="24px" src={copyIcon} alt="링크 복사하기" />
        </div>
      </div>
    </div>
  );
};

export default InquireOrReportModal;

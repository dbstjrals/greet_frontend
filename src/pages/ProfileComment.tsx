// Module import
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

// Style import
import { colors } from "../styles/colors";
import { fontStyles } from "../styles/fontStyle";

// Image import
import defaultProfileImage from "../images/defaultProfileImage.png";

// Component import
import BackTextNavigationBar from "../components/BackTextNavigationBar";
import CommentContainer from "../components/CommentContainer";

export default function ProfileComment() {
  // 댓글관련
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const myProfileImage = defaultProfileImage;

  const [showCommentKebabPopup, setShowCommentKebabPopup] =
    useState<boolean>(false);

  useEffect(() => {
    adjustTextareaHeight();
    window.addEventListener("resize", adjustTextareaHeight);
    return () => {
      window.removeEventListener("resize", adjustTextareaHeight);
    };
  }, []);

  const handleTextareaChange = (event: any) => {
    setTextareaValue(event.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    const div = divRef.current;
    if (textarea && div) {
      textarea.style.height = "24px";
      textarea.style.height = `${textarea.scrollHeight}px`;
      div.style.height = `calc(${textarea.scrollHeight}px +  28px)`;
    }
  };
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <BackTextNavigationBar innerText="댓글 10" />
      <CommentContainer
        commentTime="4월 1일 18:02"
        commentContent="혹시 이번달에 개인 레슨 받아볼 수 있나요??"
        kebabOnClick={() => setShowCommentKebabPopup(true)}
        name="두부"
        profileImage={defaultProfileImage}
        profileOnClick={() => alert(2)}
        type={true}
      />
      <CommentContainer
        commentTime="4월"
        commentContent="혹시"
        kebabOnClick={() => setShowCommentKebabPopup(true)}
        name="두부"
        profileImage={defaultProfileImage}
        profileOnClick={() => alert(2)}
        type={false}
      />
      <div ref={divRef} style={{ height: "52px" }}></div>

      <CommentCreator>
        <div style={{ paddingTop: "2px" }}>
          <img
            width="30px"
            height="30px"
            src={myProfileImage}
            alt="내 사진"
            title="프로필로 이동"
          />
        </div>
        <CommentArea
          ref={textareaRef}
          value={textareaValue}
          onChange={handleTextareaChange}
          placeholder="댓글을 작성해보세요."
        />
        <div
          style={{
            ...fontStyles.body2Semibold,
            minWidth: "25px",
            color: `${colors.textMuted}`,
            paddingTop: "6.5px",
            cursor: "pointer",
          }}
        >
          등록
        </div>
      </CommentCreator>
    </div>
  );
}

const CommentCreator = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  gap: 10px;
  max-width: 500px;
  padding: 8px 10px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0px;
  align-items: top;
  border-top: 1px solid ${colors.grey05};
  background-color: ${colors.bgSurface};
  z-index: 1;
`;

const CommentArea = styled.textarea`
  align-items: center;
  width: 100%;
  resize: none;
  height: 34px;
  max-height: 102px;
  box-sizing: border-box;
  padding: 5px 10px;
  background-color: ${colors.bgInput};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: ${colors.textActive};
  font-family: "Pretendard", sans-serif;
  border: none;
  &:focus-visible {
    outline: none;
  }
  ::placeholder {
    color: ${colors.textMuted};
  }
`;

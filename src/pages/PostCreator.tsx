// Module import
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Keyboard } from "swiper";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/free-mode";

// Components import
import PageContainer from "../components/PageContainer";
import InputField from "../components/InputField";
import Button from "../components/Button";

// Images import
import xButton from "../images/xIcon.svg";
import rightArrowButton from "../images/rightArrow.svg";
import deleteImageIcon from "../images/deleteImageIcon.svg";
import attachImageIcon from "../images/attachImageIcon.png";
import dropDownArrow from "../images/dropDownArrow.svg";
import checkIcon from "../images/checkIcon.svg";
import backIcon from "../images/back.svg";
import ImageSwiper from "../components/ImageSwiper";

interface Attachment {
  file: File;
}

export default function PostCreator() {
  const navigate = useNavigate();

  //게시판 이용 규칙
  const [showRulePage, setShowRulePage] = useState<boolean>(false);
  const [preventPopstate, setPreventPopstate] = useState<boolean>(false);

  useEffect(() => {
    if (preventPopstate) {
      window.history.pushState(null, "", ""); // 현재 페이지 history stack 한개 더 쌓기
      window.onpopstate = () => {
        // 브라우저 뒤로가기 시
        setShowRulePage(false);
        setPreventPopstate(!preventPopstate);
      };
    }
  }, [preventPopstate]);

  // 게시글 제목
  const [postTitle, setPostTitle] = useState<string>("");
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(event.target.value);
  };

  // 게시글 내용
  const [postContent, setPostContent] = useState<string>("");
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostContent(event.target.value);
  };

  // 게시글 카테고리
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isCategorySelecting, setIsCategorySelecting] =
    useState<boolean>(false);

  // 게시글 URL
  const [postURL, setPostURL] = useState<string>("");
  const handleURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostURL(event.target.value);
  };

  // 게시글 첨부 사진
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  // const [imageLinks, setImageLinks] = useState([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (attachments.length + files.length > 5) {
      return; // 최대 5개의 사진만 첨부 가능
    }
    const updatedAttachments: Attachment[] = [...attachments];
    files.forEach((file) => {
      files.forEach((file: File) => {
        updatedAttachments.push({ file });
      });
    });
    setAttachments(updatedAttachments);
  };

  // 첨부 사진 삭제
  // const handleImageDelete = (image: Attachment) => {
  //   const updatedAttachments = attachments.filter(
  //     (item: Attachment) => item !== image
  //   );
  //   setAttachments(updatedAttachments);
  // };

  const handleImageDelete = useCallback(
    (image: Attachment) =>
      setAttachments((prev) => prev.filter((item) => item !== image)),
    []
  );

  // 완료 버튼 활성화
  const checkPost = postTitle && postContent && selectedCategory;

  // 게시글 작성 함수

  return (
    <>
      {showRulePage ? (
        // 게시판 이용규칙
        <>
          <StyledNavigation>
            <img
              src={backIcon}
              alt="뒤로 가기"
              onClick={() => navigate(-1)}
              style={{ marginLeft: "9px", cursor: "pointer" }}
              width="24px"
            ></img>
            <h1
              style={{
                ...fontStyles.heading3Semibold,
                flex: "326",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: `${colors.grey100}`,
              }}
            >
              게시판 이용규칙
            </h1>
            <div style={{ marginRight: "8px", flex: "32" }}></div>
          </StyledNavigation>
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              padding: "0 16px 0 16px",
              marginTop: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                ...fontStyles.subheadingMedium,
                color: `${colors.textActive}`,
                height: "24px",
              }}
            >
              이용약관
            </div>
            <div
              style={{
                ...fontStyles.caption2Medium,
                color: `${colors.textDefault}`,
              }}
            >
              어쩌구 저쩌구
            </div>
          </div>
        </>
      ) : (
        <PageContainer style={{ padding: "0", width: "100%" }}>
          {/* 상단 바 */}
          <TopBar>
            <div style={{ flex: "1" }}></div>
            <div
              style={{
                display: "flex",
                flex: "8",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              게시글 작성
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/post-board");
                }}
                src={xButton}
                alt="x"
                width="24px"
                height="24px"
              ></img>
            </div>
          </TopBar>

          <div style={{ padding: "0 16px" }}>
            {/* 이용규칙 안내 문구 */}
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                height: "21px",
                marginBottom: "5px",
                lineHeight: "21px",
              }}
            >
              게시판 이용규칙을 준수하며 작성해주세요.
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                display: "flex",
                height: "24px",
                color: `${colors.textDefault}`,
                position: "relative",
                marginBottom: "30px",
              }}
            >
              <div
                onClick={() => {
                  setShowRulePage(true);
                  setPreventPopstate(!preventPopstate);
                }}
                style={{ lineHeight: "24px", cursor: "pointer" }}
              >
                게시판 이용규칙
              </div>
              <img
                onClick={() => {
                  setShowRulePage(true);
                  setPreventPopstate(!preventPopstate);
                }}
                width="24px"
                height="24px"
                style={{ cursor: "pointer" }}
                src={rightArrowButton}
                alt="게시판 이용규칙 이동"
              ></img>
            </div>

            {/* 제목 */}
            <InputField
              marginBottom="20px"
              onChange={handleTitleChange}
              placeholder="제목을 입력주세요."
              type="title"
              value={postTitle}
              label="제목"
              hasError={false}
            />

            {/* 카테고리 */}
            <PostContentLabel>카테고리</PostContentLabel>
            <div style={{ position: "relative" }}>
              <PostCategoryWrapper
                style={{
                  border: isCategorySelecting
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => setIsCategorySelecting(!isCategorySelecting)}
              >
                <div
                  style={{
                    color: selectedCategory
                      ? `${colors.textActive}`
                      : `${colors.textMuted}`,
                  }}
                >
                  {selectedCategory
                    ? selectedCategory
                    : "게시글의 카테고리를 선택하세요."}
                </div>
                <div>
                  <img src={dropDownArrow} alt="드롭다운"></img>
                </div>
              </PostCategoryWrapper>
              <div
                style={{
                  display: isCategorySelecting ? "flex" : "none",
                  position: "absolute",
                  top: "48px",
                  left: "0px",
                  border: `1px solid ${colors.primary100}`,
                  borderRadius: "8px",
                  width: "100%",
                  height: "128px",
                  backgroundColor: `${colors.bgInput}`,
                  padding: "20px 16px 12px 16px",
                  boxSizing: "border-box",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <CategoryList
                  onClick={() => {
                    setSelectedCategory("개인레슨");
                    setIsCategorySelecting(false);
                  }}
                >
                  개인레슨
                  <img
                    style={{
                      display: selectedCategory === "개인레슨" ? "" : "none",
                    }}
                    src={checkIcon}
                    alt="Checked Category"
                  />
                </CategoryList>
                <CategoryList
                  onClick={() => {
                    setSelectedCategory("구인/구직");
                    setIsCategorySelecting(false);
                  }}
                >
                  구인/구직
                  <img
                    style={{
                      display: selectedCategory === "구인/구직" ? "" : "none",
                    }}
                    src={checkIcon}
                    alt="Checked Category"
                  />
                </CategoryList>
                <CategoryList
                  onClick={() => {
                    setSelectedCategory("악기장터");
                    setIsCategorySelecting(false);
                  }}
                >
                  악기장터
                  <img
                    style={{
                      display: selectedCategory === "악기장터" ? "" : "none",
                    }}
                    src={checkIcon}
                    alt="Checked Category"
                  />
                </CategoryList>
              </div>
            </div>

            {/* 내용 */}
            <PostContentLabel>내용</PostContentLabel>
            <PostContentWrapper
              placeholder="내용을 입력해주세요."
              maxLength={200}
              value={postContent}
              onChange={handleContentChange}
            />
            <div
              style={{
                ...fontStyles.body3Regular,
                marginBottom: "20px",
                color: `${colors.textDefault}`,
                textAlign: "end",
                height: "19px",
              }}
            >
              {postContent.length}/200
            </div>

            {/* URL */}
            <InputField
              marginBottom="40px"
              onChange={handleURLChange}
              placeholder="게시물과 관련있는 URL을 입력해주세요."
              type="text"
              value={postURL}
              label="(선택) URL"
              hasError={false}
            />

            <hr
              style={{
                margin: "15px 0 20px 0",
                border: "none",
                borderTop: `1px solid ${colors.grey05}`,
              }}
            ></hr>
          </div>

          {/* 사진 */}
          <div
            style={{
              width: "calc(100% - 32px)",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
              marginBottom: "70px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "4px",
              }}
            >
              <CameraStyle>
                <label htmlFor="ex_file">
                  <div
                    style={{
                      height: "64px",
                      width: "64px",
                      boxSizing: "border-box",
                      borderRadius: "5px",
                      border: `1px solid ${colors.grey100}`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "39px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <img src={attachImageIcon} alt="btnStart" width="24px" />
                      <div
                        style={{
                          color: `${colors.textActive}`,
                          ...fontStyles.caption1Regular,
                          textAlign: "center",
                          height: "13px",
                        }}
                      >
                        {attachments.length}/5
                      </div>
                    </div>
                  </div>
                </label>
                <input
                  type="file"
                  id="ex_file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleImageUpload}
                  multiple
                  maxLength={5}
                />
              </CameraStyle>
              <ImageSwiper
                handleImageDelete={handleImageDelete}
                attachments={attachments}
              />
            </div>
          </div>

          {/* 버튼 */}
          <div style={{ padding: "0 16px" }}>
            <Button disabled={!checkPost}>완료</Button>
          </div>
          <div style={{ height: "20px" }} />
        </PageContainer>
      )}
    </>
  );
}

const TopBar = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  color: rgba(255, 255, 255, 1);
  height: 44px;
  margin-bottom: 16px;
`;
const PostContentLabel = styled.div`
  height: 21px;
  font-size: 14px;
  color: ${colors.textDefault};
  font-weight: 500;
  line-height: 21px;
  margin-bottom: 4px;
`;
const PostCategoryWrapper = styled.div`
  background-color: rgba(43, 43, 43, 1);
  display: flex;
  width: 100%;
  height: 44px;
  padding: 10px 16px;
  font-weight: 500;
  font-size: 14px;
  font-family: "Pretendard";
  color: rgba(255, 255, 255, 0.95);
  line-height: 150%;
  border: 1px solid #3d3d3d;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 20px;
  justify-content: space-between;
  cursor: pointer;
`;
const PostContentWrapper = styled.textarea`
  font-family: Pretendard;
  background-color: rgba(43, 43, 43, 1);
  width: 100%;
  height: 230px;
  box-sizing: border-box;
  padding: 10px 16px;
  flex-wrap: no-wrap;
  border: 1px solid rgba(61, 61, 61, 1);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${colors.textActive};
  resize: none;
  &::placeholder {
    color: ${colors.textMuted};
  }
  &:focus {
    border: 1px solid ${colors.primary100};
  }
`;
const CameraStyle = styled.div`
  display: inline-block;
  margin-right: 10px;
  img {
    max-width: 100px;
  }
  label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
const CategoryList = styled.div`
  width: 100%;
  height: 24px;
  color: ${colors.textActive};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
const StyledNavigation = styled.div`
  width: 100%;
  max-width: 500px;
  height: 44px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

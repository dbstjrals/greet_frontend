// Module import
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/free-mode";
import "../styles/custom-swiper.css";

// Components import
import GradientProfileImage from "../components/GradientProfileImage";
import CommentContainer from "../components/CommentContainer";
import PostPopup from "../components/PostPopup";

// Images import
import backIcon from "../images/back.svg";
import kebabIcon from "../images/kebabIcon.svg";
import defaultPostThumbnail from "../images/defaultPostThumbnail.png";
import defaultProfileImage from "../images/defaultProfileImage.png";
import likeIcon from "../images/likeIcon.svg";
import filledLikeIcon from "../images/filledLikeIcon.svg";

export default function PostDetail() {
  const navigate = useNavigate();
  // const { postId } = useParams();

  const teamName = "딕키즈";
  const myProfileImage = defaultProfileImage;

  // 게시물 케밥
  const [showPostKebabPopup, setShowPostKebabPopup] = useState<boolean>(false);
  const [showCommentKebabPopup, setShowCommentKebabPopup] =
    useState<boolean>(false);

  // 좋아요 버튼 관련
  const [likeCount, setLikeCount] = useState<number>(10);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (isLiked) setLikeCount(likeCount - 1);
    else setLikeCount(likeCount + 1);
    // api 작성 필요
  };

  // 댓글관련
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

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
  // 댓글관련 끝

  // 게시물 더미데이터
  const postDummyData = {
    postCategory: "개인레슨",
    postedBefore: "1시간 전",
    postTitle: "개인 레슨합니다 !",
    postContent:
      "개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다 개인 레슨 합니다",
    postImage: [
      defaultPostThumbnail,
      defaultPostThumbnail,
      defaultPostThumbnail,
    ],
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      {showPostKebabPopup && (
        <PostPopup
          closeOnclick={() => setShowPostKebabPopup(false)}
          isPost={true}
          isMine={false} // 내 게시물인지 체크해야 함
        />
      )}
      {showCommentKebabPopup && (
        <PostPopup
          closeOnclick={() => setShowCommentKebabPopup(false)}
          isPost={false}
          isMine={false} // 내 게시물인지 체크해야 함
        />
      )}
      <TopBar>
        <img
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
          width="24px"
          height="24px"
          src={backIcon}
          alt="이전 페이지 버튼"
        />
        <img
          onClick={() => setShowPostKebabPopup(true)}
          style={{ cursor: "pointer" }}
          width="24px"
          height="24px"
          src={kebabIcon}
          alt="케밥 버튼"
        />
      </TopBar>
      <PageContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "21px",
            marginBottom: "15px",
          }}
        >
          {/* 게시글 카테고리 */}
          <div
            style={{
              ...fontStyles.caption2Medium,
              display: "flex",
              alignItems: "center",
              width: "51px",
              padding: "0 8px",
              boxSizing: "border-box",
              borderRadius: "100px",
              backgroundColor: `${colors.bgOnSurface}`,
              color: `${colors.textMuted}`,
            }}
          >
            {postDummyData.postCategory}
          </div>
          {/* 게시글 작성시간 */}
          <div
            style={{
              ...fontStyles.caption1Regular,
              color: `${colors.textMuted}`,
              lineHeight: "21px",
            }}
          >
            {postDummyData.postedBefore}
          </div>
        </div>
        {/* 게시글 제목 */}
        <h1
          style={{
            ...fontStyles.heading2Medium,
            color: `${colors.textActive}`,
            marginBottom: "16px",
          }}
        >
          {postDummyData.postTitle}
        </h1>
        {/* 게시글 내용 */}
        <p
          style={{
            ...fontStyles.subheadingRegular,
            color: `${colors.textDefault}`,
            marginBottom: "25px",
          }}
        >
          {postDummyData.postContent}
        </p>
        <Swiper
          id="postImage-swiper"
          style={{
            width: "100%",
            height: "0",
            paddingBottom: "calc(100% + 20px)",
            marginBottom: "20px",
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={8}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
        >
          {postDummyData.postImage.map((item) => {
            return (
              <SwiperSlide>
                <div
                  style={{
                    width: "100%",
                    height: "0",
                    paddingBottom: "100%",
                    borderRadius: "5px",
                    background: `no-repeat center/100% url(${item})`,
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <CenterContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <GradientProfileImage
              gradientColor="135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%"
              userImage={defaultProfileImage}
              size={26}
            />
            <span style={creatorNameStyle}>POL</span>
            <RoundTag
              style={{
                backgroundColor: `${colors.bgOnSurface}`,
                color: `${colors.textMuted}`,
                display: teamName ? "" : "none",
              }}
            >
              {teamName}
            </RoundTag>
          </div>
          <LikeWrapper
            onClick={handleLikeClick}
            style={isLiked ? likedStyle : {}}
          >
            <img
              width="18px"
              height="18px"
              src={isLiked ? filledLikeIcon : likeIcon}
              alt="좋아요"
            />
            {likeCount}
          </LikeWrapper>
        </CenterContainer>
      </PageContainer>
      <hr
        style={{
          maxWidth: "500px",
          margin: "20px auto 16px auto",
          border: "none",
          borderTop: `10px solid ${colors.bgDivider}`,
        }}
      ></hr>
      {/* 댓글 */}
      <PageContainer>
        <div
          style={{
            ...fontStyles.body1Medium,
            color: `${colors.textActive}`,
            marginBottom: "16px",
          }}
        >
          댓글
        </div>
      </PageContainer>
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

const TopBar = styled.div`
  height: 44px;
  display: flex;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px 0 9px;
  margin-bottom: 20px;
`;
const PageContainer = styled.div`
  width: calc(100% - 32px);
  max-width: 500px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;

// const swiperStyle = {
//   width: "100%",
//   height: "0",
//   paddingBottom: "100%",
//   "--swiper-pagination-top": "var(--swiper-width)", // 변수 참조
// };

const creatorNameStyle = {
  ...fontStyles.body2Medium,
  color: `${colors.textActive}`,
  lineHeight: "26px",
  marginLeft: "10px",
  marginRight: "6px",
};

const CenterContainer = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const LikeWrapper = styled.div`
  width: 70px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  border-radius: 100px;
  border: 1px solid ${colors.bgInputBorder};
  color: ${colors.textMuted};
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  transition: 0.2s;
`;
const likedStyle = {
  color: `${colors.textDarken}`,
  backgroundColor: `${colors.primary100}`,
};

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

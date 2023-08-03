// Module import
import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/custom-swiper.css";

// Components import
import PageContainer from "../components/PageContainer";
import MemberCardContainer from "../components/MemberCardContainer";
import PostContainer from "../components/PostContainer";
import SearchContainer from "../components/SearchContainer";
import SideNavigator from "../components/SideNavigator";
import FilterContainer from "../components/FilterContainer";

// Images import
import greetLogo from "../images/greetLogo.svg";
import searchIcon from "../images/searchIcon.svg";
import filterIcon from "../images/filterIcon.svg";
import hamburgerIcon from "../images/hamburgerIcon.svg";
import bannerImage from "../images/bannerImage.png";
import rightArrow from "../images/rightArrow.svg";
import profileImage from "../images/defaultProfileImage.png";

export default function Main() {
  const [preventPopstate, setPreventPopstate] = useState<boolean>(false);
  useEffect(() => {
    if (preventPopstate) {
      window.history.pushState(null, "", ""); // 현재 페이지 history stack 한개 더 쌓기
      window.onpopstate = () => {
        // 브라우저 뒤로가기 시
        setSearchOn(false);
        setFilterOn(false);
        setPreventPopstate(!preventPopstate);
      };
    }
  }, [preventPopstate]);
  const navigate = useNavigate();
  const [showSideNavigator, setShowSideNavigator] = useState<Boolean>(false);

  const [searchOn, setSearchOn] = useState<boolean>(false);
  const [filterOn, setFilterOn] = useState<boolean>(false);

  return (
    <PageContainer style={{ padding: "0", width: "100%" }}>
      {!searchOn && !filterOn && (
        <>
          {/* 상단 바 */}
          <MainNavigationBar>
            <LogoWrapper>
              <img
                src={greetLogo}
                alt="Greet"
                width="60px"
                height="17.25px"
              ></img>
            </LogoWrapper>
            <IconWrapper>
              <img
                src={searchIcon}
                alt="searchIcon"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSearchOn(true);
                  setPreventPopstate(!preventPopstate);
                }}
              ></img>
              <img
                src={filterIcon}
                alt="filterIcon"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setFilterOn(true);
                  setPreventPopstate(!preventPopstate);
                }}
              ></img>
              <img
                src={hamburgerIcon}
                alt="hamburgerIcon"
                style={{ cursor: "pointer" }}
                onClick={() => setShowSideNavigator(true)}
              />
            </IconWrapper>
          </MainNavigationBar>
          {showSideNavigator && (
            <SideNavigator closeOnclick={() => setShowSideNavigator(false)} />
          )}

          {/* 배너 필드 */}
          <BannerContainer />

          {/* 새롭게 등록했어요 */}
          <TitleWrapper>
            <Title>새롭게 등록했어요</Title>
            <FullView onClick={() => navigate("/member-list")}>
              전체보기
              <img src={rightArrow} alt=">"></img>
            </FullView>
          </TitleWrapper>
          <ContentWrapper>
            <Swiper
              id="member-swiper"
              style={{ height: "312px" }}
              modules={[Navigation, Pagination]}
              spaceBetween={32}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <MemberCardContainer
                  userId={1}
                  userImage={profileImage}
                  userColor="135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%"
                  userName="POL"
                  userCommentary="경험많은 힙합 래퍼 찾아요!"
                  userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
                  userRoleLevel={[{ role: "래퍼", level: 1 }]}
                  isGreet={false}
                />
                <div style={{ height: "14px" }}></div>
                <MemberCardContainer
                  userId={2}
                  userImage={profileImage}
                  userColor="to right, rgba(252,53,76,1), rgba(0,215,211,1)"
                  userName="샤로캣"
                  userCommentary="경험많은 힙합 래퍼 찾아요!"
                  userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
                  userRoleLevel={[
                    { role: "래퍼", level: 1 },
                    { role: "작곡/편곡가", level: 2 },
                  ]}
                  isGreet={false}
                />
              </SwiperSlide>
              <SwiperSlide>
                <MemberCardContainer
                  userId={3}
                  userImage={profileImage}
                  userColor="135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%"
                  userName="POL"
                  userCommentary="경험많은 힙합 래퍼 찾아요!"
                  userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
                  userRoleLevel={[{ role: "래퍼", level: 1 }]}
                  isGreet={false}
                />
                <div style={{ height: "14px" }}></div>
                <MemberCardContainer
                  userId={4}
                  userImage={profileImage}
                  userColor="to right, rgba(252,53,76,1), rgba(0,215,211,1)"
                  userName="샤로캣"
                  userCommentary="경험많은 힙합 래퍼 찾아요!"
                  userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
                  userRoleLevel={[
                    { role: "래퍼", level: 1 },
                    { role: "작곡/편곡가", level: 2 },
                  ]}
                  isGreet={false}
                />
              </SwiperSlide>
              <SwiperSlide>
                <MemberCardContainer
                  userId={5}
                  userImage={profileImage}
                  userColor="135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%"
                  userName="POL"
                  userCommentary="경험많은 힙합 래퍼 찾아요!"
                  userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
                  userRoleLevel={[{ role: "래퍼", level: 1 }]}
                  isGreet={false}
                />
                <div style={{ height: "14px" }}></div>
                <MemberCardContainer
                  userId={6}
                  userImage={profileImage}
                  userColor="to right, rgba(252,53,76,1), rgba(0,215,211,1)"
                  userName="샤로캣"
                  userCommentary="경험많은 힙합 래퍼 찾아요!"
                  userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
                  userRoleLevel={[
                    { role: "래퍼", level: 1 },
                    { role: "작곡/편곡가", level: 2 },
                  ]}
                  isGreet={false}
                />
              </SwiperSlide>
            </Swiper>
          </ContentWrapper>
          <div style={{ height: "47px" }}></div>
          <TitleWrapper>
            <Title>새롭게 올라온 글</Title>
            <FullView onClick={() => navigate("/post-board")}>
              전체보기
              <img src={rightArrow} alt=">"></img>
            </FullView>
          </TitleWrapper>
          <Swiper
            id="post-swiper"
            style={{ height: "359px" }}
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <PostContainer
                postId={1}
                userImage={profileImage}
                userName="POL"
                userColor="135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%"
                likeCount={10}
                commentCount={5}
                viewCount={10}
                postTag="개인레슨"
                postedDate="1시간 전"
              />
              <PostContainer
                postId={2}
                userImage={profileImage}
                userName="Rama"
                userColor="98.41deg, #5433FF 0%, #20BDFF 51.87%, #A5FECB 100%"
                postTag="구인/구직"
                postedDate="1시간 전"
                likeCount={6}
                commentCount={2}
                viewCount={4}
                teamName="딕키즈"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PostContainer
                postId={3}
                userImage={profileImage}
                userName="POL"
                userColor="135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%"
                likeCount={10}
                commentCount={5}
                viewCount={10}
                postTag="개인레슨"
                postedDate="1시간 전"
              />
              <PostContainer
                postId={4}
                userImage={profileImage}
                userName="Rama"
                userColor="98.41deg, #5433FF 0%, #20BDFF 51.87%, #A5FECB 100%"
                postTag="구인/구직"
                postedDate="1시간 전"
                likeCount={6}
                commentCount={2}
                viewCount={4}
                teamName="딕키즈"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PostContainer
                postId={5}
                userImage={profileImage}
                userName="Rama"
                userColor="98.41deg, #5433FF 0%, #20BDFF 51.87%, #A5FECB 100%"
                postTag="구인/구직"
                postedDate="1시간 전"
                likeCount={6}
                commentCount={2}
                viewCount={4}
                teamName="딕키즈"
              />
            </SwiperSlide>
          </Swiper>
          <div style={{ height: "65px" }}></div>
        </>
      )}
      {searchOn && (
        <SearchContainer
          searchType="멤버"
          backOnClick={() => setSearchOn(false)}
        />
      )}
      {filterOn && <FilterContainer backOnClick={() => setFilterOn(false)} />}
    </PageContainer>
  );
}

const MainNavigationBar = styled.div`
  width: calc(100% - 32px);
  max-width: 500px;
  padding: 0 16px 0 16px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 44px;
`;
const LogoWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-end;
`;

const BannerContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 140px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 40px;
`;
const TitleWrapper = styled.div`
  padding: 0 8px 0 16px;
  height: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;
const Title = styled.div`
  flex: 7;
  font-size: 16px;
  color: ${colors.textActive};
  font-weight: 700px;
`;
const FullView = styled.div`
  font-size: 12px;
  width: 70px;
  font-weight: 500;
  color: ${colors.textDefault};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;
const ContentWrapper = styled.div`
  width: calc(100% - 32px);
  padding: 0 16px;
`;

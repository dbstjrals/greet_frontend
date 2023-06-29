// Module import
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Components import
import PageContainer from '../components/PageContainer'
import SideNavigator from "../components/SideNavigator";
import PostContainer from "../components/PostContainer";

// Images import
import greetLogo from '../images/greetLogo.svg';
import searchIcon from '../images/searchIcon.svg';
import hamburgerIcon from '../images/hamburgerIcon.svg';
import profileImage from '../images/defaultProfileImage.png';
import defaultPostThumbnail from '../images/defaultPostThumbnail.png';
import postCreateFAB from '../images/postCreateFAB.png';
import SearchContainer from "../components/SearchContainer";

export default function PostBoard() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  const [preventPopstate, setPreventPopstate] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  useEffect(() => {
    if (preventPopstate) {
      window.history.pushState(null, '', ''); // 현재 페이지 history stack 한개 더 쌓기
      window.onpopstate = () => { // 브라우저 뒤로가기 시
        setSearchOn(false);
        setPreventPopstate(!preventPopstate);
      };
    };
  }, [preventPopstate]);

  const [showSideNavigator, setShowSideNavigator] = useState<Boolean>(false);
  const [searchOn, setSearchOn] = useState<boolean>(false);

  const [selectedCategory, setSelectedCategory] = useState<String>('전체');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <PageContainer style={{ padding: '0', width: '100%', position: 'relative' }}>
      {!searchOn && <>
        {/* 상단 바 */}
        <BoardNavigationBar>
          <LogoWrapper>
            <img src={greetLogo} alt='Greet' width='60px' height='17.25px'></img>
          </LogoWrapper>
          <IconWrapper>
            <img
              src={searchIcon}
              alt='searchIcon'
              style={{ cursor: 'pointer' }}
              onClick={() => { setSearchOn(true); setPreventPopstate(!preventPopstate); }}
            ></img>
            <img
              src={hamburgerIcon}
              alt='hamburgerIcon'
              style={{ cursor: 'pointer' }}
              onClick={() => setShowSideNavigator(true)}
            />
          </IconWrapper>
        </BoardNavigationBar>

        {/* 사이드 Navigator 컴포넌트 */}
        {
          showSideNavigator &&
          <SideNavigator closeOnclick={() => setShowSideNavigator(false)} />
        }

        {/* 카테고리 바 */}
        <CategoryContainer>
          <CategoryWrapper
            style={{
              color: selectedCategory === '전체' ? `${colors.primary100}` : '',
              fontWeight: selectedCategory === '전체' ? '600' : '',
              borderBottom: selectedCategory === '전체' ? `1px solid ${colors.primary100}` : '',
            }}
            onClick={() => handleCategoryClick('전체')}
          >
            전체
          </CategoryWrapper>
          <CategoryWrapper
            style={{
              color: selectedCategory === '개인레슨' ? `${colors.primary100}` : '',
              fontWeight: selectedCategory === '개인레슨' ? '600' : '',
              borderBottom: selectedCategory === '개인레슨' ? `1px solid ${colors.primary100}` : '',
            }}
            onClick={() => handleCategoryClick('개인레슨')}
          >
            개인레슨
          </CategoryWrapper>
          <CategoryWrapper
            style={{
              color: selectedCategory === '구인/구직' ? `${colors.primary100}` : '',
              fontWeight: selectedCategory === '구인/구직' ? '600' : '',
              borderBottom: selectedCategory === '구인/구직' ? `1px solid ${colors.primary100}` : '',
            }}
            onClick={() => handleCategoryClick('구인/구직')}
          >
            구인/구직
          </CategoryWrapper>
          <CategoryWrapper
            style={{
              color: selectedCategory === '악기장터' ? `${colors.primary100}` : '',
              fontWeight: selectedCategory === '악기장터' ? '600' : '',
              borderBottom: selectedCategory === '악기장터' ? `1px solid ${colors.primary100}` : '',
            }}
            onClick={() => handleCategoryClick('악기장터')}
          >
            악기장터
          </CategoryWrapper>
        </CategoryContainer>

        <PostContainer
          userImage={profileImage}
          userName="POL"
          userColor="135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%"
          likeCount={10}
          commentCount={5}
          viewCount={10}
          postTag="개인레슨"
          postedDate="1시간 전"
          postThumbnail={defaultPostThumbnail}
        />
        <PostContainer
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
        <PostContainer
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
        <PostContainer
          postThumbnail={defaultPostThumbnail}
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

        <PostCreateFAB
          onClick={() => navigate('/create-post')}
          src={postCreateFAB} alt="게시글 작성" width='60px' height='60px'
          style={{ left: width >= 500 ? 'calc(50% + 160px)' : `76%` }} />
      </>}
      {searchOn && <>
        <SearchContainer
          backOnClick={() => setSearchOn(false)}
          searchType="게시판"
        />
      </>}
    </PageContainer >
  )
}

const BoardNavigationBar = styled.div`
  width: calc(100% - 32px);
  max-width: 500px;
  padding: 0 16px 0 16px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 44px;
`
const LogoWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
`
const IconWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-end;
`
const CategoryContainer = styled.div`
  display: flex;
  height: 36px;
  padding: 4px 0 0 16px;
  border-bottom: 1px solid rgba(61, 61, 61, 1);
  gap: 20px;
  box-sizing: border-box;
`
const CategoryWrapper = styled.div`
  color: rgba(255, 255, 255, 0.95);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  min-width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const PostCreateFAB = styled.img`
  position: fixed;
  top: 80%;
  width: 80px;
  height: 80px;
  cursor: pointer;
`
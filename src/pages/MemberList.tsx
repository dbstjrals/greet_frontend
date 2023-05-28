// Module import
import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/custom-swiper.css';

// Components import
import PageContainer from '../components/PageContainer';
import MemberCardContainer from "../components/MemberCardContainer";
import SideNavigator from "../components/SideNavigator";
import SearchContainer from "../components/SearchContainer";
import FilterContainer from "../components/FilterContainer";

// Images import
import searchIcon from '../images/searchIcon.svg';
import filterIcon from '../images/filterIcon.svg';
import hamburgerIcon from '../images/hamburgerIcon.svg';
import profileImage from '../images/defaultProfileImage.png';


export default function MemberList() {

  // 검색 컴포넌트에서 브라우저 뒤로가기를 막고 검색 컴포넌트를 숨김
  const [preventPopstate, setPreventPopstate] = useState<boolean>(false);
  useEffect(() => {
    if (preventPopstate) {
      window.history.pushState(null, '', ''); // 현재 페이지 history stack 한개 더 쌓기
      window.onpopstate = () => { // 브라우저 뒤로가기 시
        setSearchOn(false);
        setFilterOn(false);
        setPreventPopstate(!preventPopstate);
      };
    };
  }, [preventPopstate]);

  const navigate = useNavigate();
  const [showSideNavigator, setShowSideNavigator] = useState<Boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<String>('추천');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const [searchOn, setSearchOn] = useState<boolean>(false);
  const [fileterOn, setFilterOn] = useState<boolean>(false);

  return (

    <PageContainer style={{ padding: '0', width: '100%' }}>
      {(!searchOn && !fileterOn) && <>
        {/* 상단 바 */}
        <MainNavigationBar>
          <PageNameWrapper>
            멤버리스트
          </PageNameWrapper>
          <IconWrapper>
            <img
              src={searchIcon}
              alt='searchIcon'
              style={{ cursor: 'pointer' }}
              onClick={() => { setSearchOn(true); setPreventPopstate(!preventPopstate); }}
            ></img>
            <img
              src={filterIcon}
              alt='filterIcon'
              style={{ cursor: 'pointer' }}
              onClick={() => { setFilterOn(true); setPreventPopstate(!preventPopstate); }}
            ></img>
            <img
              src={hamburgerIcon}
              alt='hamburgerIcon'
              style={{ cursor: 'pointer' }}
              onClick={() => setShowSideNavigator(true)}
            />
          </IconWrapper>
        </MainNavigationBar>

        {/* 사이드 Navigator 컴포넌트 */}
        {showSideNavigator &&
          <SideNavigator closeOnclick={() => setShowSideNavigator(false)} />}

        {/* 카테고리 바 */}
        <CategoryContainer>
          <CategoryWrapper
            style={{
              color: selectedCategory === '추천' ? `${colors.primary100}` : '',
              fontWeight: selectedCategory === '추천' ? '600' : '',
              borderBottom: selectedCategory === '추천' ? `1px solid ${colors.primary100}` : '',
            }}
            onClick={() => handleCategoryClick('추천')}
          >
            추천
          </CategoryWrapper>
          <CategoryWrapper
            style={{
              color: selectedCategory === '새로운 멤버' ? `${colors.primary100}` : '',
              fontWeight: selectedCategory === '새로운 멤버' ? '600' : '',
              borderBottom: selectedCategory === '새로운 멤버' ? `1px solid ${colors.primary100}` : '',
            }}
            onClick={() => handleCategoryClick('새로운 멤버')}
          >
            새로운 멤버
          </CategoryWrapper>
          <CategoryWrapper
            style={{
              color: selectedCategory === '멤버들의 Pick' ? `${colors.primary100}` : '',
              fontWeight: selectedCategory === '멤버들의 Pick' ? '600' : '',
              borderBottom: selectedCategory === '멤버들의 Pick' ? `1px solid ${colors.primary100}` : '',
            }}
            onClick={() => handleCategoryClick('멤버들의 Pick')}
          >
            멤버들의 Pick
          </CategoryWrapper>
        </CategoryContainer>

        {/* 멤버카드 컴포넌트 리스트 */}
        <div style={{
          padding: '0 16px', marginTop: '20px', marginBottom: '53px', display: 'flex',
          flexDirection: 'column', gap: '14px'
        }}>
          {/* 
            map 형식으로 멤버 cardContainer를 나열해야 하며, 
            카테고리 변경에 따라 나열 데이터를 바꿔야 함
          */}
          <MemberCardContainer
            key={1}
            userImage={profileImage}
            userColor="135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%"
            userName="POL"
            userCommentary="경험많은 힙합 래퍼 찾아요!"
            userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
            userRoleLevel={[{ role: '래퍼', level: 1 }]}
          />
          <MemberCardContainer
            key={2}
            userImage={profileImage}
            userColor="98.41deg, #5433FF 0%, #20BDFF 51.87%, #A5FECB 100%"
            userName="RAMA"
            userCommentary="경험많은 힙합 래퍼 찾아요!"
            userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
            userRoleLevel={[{ role: '래퍼', level: 1 }]}
            teamName="딕키즈"
          />
          <MemberCardContainer
            key={3}
            userImage={profileImage}
            userColor="98.41deg, #FC354C 0%, #00D7D3 100%"
            userName="샤로캣"
            userCommentary="경험많은 힙합 래퍼 찾아요!"
            userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
            userRoleLevel={[{ role: '래퍼', level: 2 }, { role: '작곡/편곡가', level: 2 }]}
          />
          <MemberCardContainer
            key={4}
            userImage={profileImage}
            userColor="98.41deg, #00B09B 0%, #96C93D 100%"
            userName="로켓"
            teamName="키프 클랜"
            userCommentary="경험많은 힙합 래퍼 찾아요!"
            userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
            userRoleLevel={[{ role: '래퍼', level: 3 }, { role: '디제이', level: 2 }]}
          />
          <MemberCardContainer
            key={5}
            userImage={profileImage}
            userColor="98.41deg, #FFF626 0%, #FF6726 52.29%, #FF2674 100%"
            userName="빙빙"
            userCommentary="경험많은 힙합 래퍼 찾아요!"
            userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
            userRoleLevel={[{ role: '래퍼', level: 3 }]}
          />
        </div>
      </>}

      {
        searchOn &&
        <SearchContainer
          searchType="멤버"
          backOnClick={() => setSearchOn(false)}
        />
      }
      {
        fileterOn &&
        <FilterContainer
          backOnClick={() => setFilterOn(false)}
        />
      }

    </PageContainer >
  )
}

const MainNavigationBar = styled.div`
  width: calc(100% - 32px);
  max-width: 500px;
  padding: 0 16px 0 16px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 44px;
`
const PageNameWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
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

// Module import
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Components import
import PageContainer from '../components/PageContainer';
import MemberCardContainer from "../components/MemberCardContainer";

// Images import
import greetLogo from '../images/greetLogo.svg';
import searchIcon from '../images/searchIcon.svg';
import filterIcon from '../images/filterIcon.svg';
import hamburgerIcon from '../images/hamburgerIcon.svg';
import bannerImage from '../images/bannerImage.png';
import rightArrow from '../images/rightArrow.svg';
import naverLogo from '../images/defaultProfileImage.png';

export default function Main() {
  const navigate = useNavigate();

  return (
    <PageContainer style={{ padding: '0', width: '100%' }}>

      {/* 상단 바 */}
      <MainNavigationBar>
        <LogoWrapper>
          <img src={greetLogo} alt='Greet' width='60px' height='17.25px'></img>
        </LogoWrapper>
        <IconWrapper>
          <img src={searchIcon} alt='searchIcon'></img>
          <img src={filterIcon} alt='filterIcon'></img>
          <img src={hamburgerIcon} alt='hamburgerIcon'></img>
        </IconWrapper>
      </MainNavigationBar>

      {/* 배너 필드 */}
      <BannerContainer />

      {/* 새롭게 등록했어요 */}
      <TitleWrapper>
        <Title>새롭게 등록했어요</Title>
        <FullView>
          전체보기
          <img src={rightArrow} alt='>'></img>
        </FullView>
      </TitleWrapper>
      <ContentWrapper>
        <MemberCardContainer
          userImage={naverLogo}
          userName="POL"
          userCommentary="경험많은 힙합 래퍼 찾아요!"
          userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
          userRoleLevel={[{ role: '래퍼', level: 1 }]}
        />
        <div style={{ height: '14px' }}></div>
        <MemberCardContainer
          userImage={naverLogo}
          userName="샤로캣"
          userCommentary="경험많은 힙합 래퍼 찾아요!"
          userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
          userRoleLevel={[{ role: '래퍼', level: 1 }, { role: '작곡/편곡가', level: 2 }]}
        />
      </ContentWrapper>
    </PageContainer>
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

const BannerContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 140px;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 40px;
`
const TitleWrapper = styled.div`
  padding: 0 8px 0 16px;
  height: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`
const Title = styled.div`
  flex: 7;
  font-size: 16px;
  color: ${colors.textActive};
  font-weight: 700px;
`
const FullView = styled.div`
  flex: 3;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.textDefault};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
`
const ContentWrapper = styled.div`
  width: calc(100% - 32px);
  padding: 0 16px;
`

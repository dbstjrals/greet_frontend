// Module import

// Style import
import { colors } from "../styles/colors";

// Image import
import greetingIconSmall from "../images/greetingIconSmall.svg";

// Components import
import ProfilePageHeader from "../components/ProfilePageHeader";
import ProfileMainSection from "../components/ProfileMainSection";
import ProfileIntroductionSection from "../components/ProfileIntroductionSection";
import styled from "styled-components";
import ProfileCareerSection from "../components/ProfileCareerSection";
import ProfileGenreSection from "../components/ProfileGenreSection";
import ProfilePortfolioSection from "../components/ProfilePortfolioSection";
import ProfileCommentSection from "../components/ProfileCommentSection";

export default function MyPage() {
  return (
    <div
      style={{
        color: "white",
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ProfilePageHeader isMyPage={true} />
      <ProfileMainSection isMyPage={true} />
      <ProfileIntroductionSection isMyPage={true} />
      <ProfileCareerSection
        isMyPage={true}
        careerContent="OOO앨범에 OOO로 참여한 적 있고,
        OOO프로그램에 OO로 방송 출연한 적 있습니다!"
      />
      <ProfileGenreSection isMyPage={true} />
      <ProfilePortfolioSection isMyPage={true} />
      <ProfileCommentSection isMyPage={true} />
      <hr
        style={{
          border: `10px solid ${colors.bgDivider}`,
          margin: "0 0 40px 0",
        }}
      />
      <section
        style={{
          padding: "0 16px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginBottom: "47px",
        }}
      >
        <MyPageMenu>
          <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
            <img src={greetingIconSmall} alt="그릿 아이콘"></img>
            <MenuName>나의 Greet 리스트</MenuName>
          </div>
          <MenuDetail>20명</MenuDetail>
        </MyPageMenu>
        <MyPageMenu>
          <MenuName>나의 연락수단</MenuName>
          <MenuDetail>인스타그램 ID/전화번호</MenuDetail>
        </MyPageMenu>
        <SectionSeparator />
        <MyPageMenu>
          <MenuName>공지사항</MenuName>
        </MyPageMenu>
        <MyPageMenu>
          <MenuName>문의하기</MenuName>
        </MyPageMenu>
        <SectionSeparator />
        <MyPageMenu>
          <MenuName>설정</MenuName>
        </MyPageMenu>
        <MyPageMenu>
          <MenuName>약관 및 정책</MenuName>
        </MyPageMenu>
        <MyPageMenu>
          <MenuName>버전 정보</MenuName>
          <MenuDetail>1.0.0</MenuDetail>
        </MyPageMenu>
        <SectionSeparator />
        <MyPageMenu>
          <MenuName>로그아웃</MenuName>
        </MyPageMenu>
        <MyPageMenu>
          <MenuName>탈퇴하기</MenuName>
        </MyPageMenu>
      </section>
    </div>
  );
}

const SectionSeparator = styled.hr`
  border: 1px solid ${colors.grey05};
  margin: 0px;
`;

const MyPageMenu = styled.div`
  display: flex;
  height: 22px;
  color: ${colors.textActive};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  justify-content: space-between;
`;

const MenuName = styled.span`
  cursor: pointer;
`;

const MenuDetail = styled.span`
  color: ${colors.textMuted};
`;

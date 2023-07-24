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
      <section>이력사항</section>
      <section>선호하는 음악 장르</section>
      <section>포트폴리오</section>
      <section>댓글</section>
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
            <span>나의 Greet 리스트</span>
          </div>
          <MenuDetail>20명</MenuDetail>
        </MyPageMenu>
        <MyPageMenu>
          <span>나의 연락수단</span>
          <MenuDetail>인스타그램 ID/전화번호</MenuDetail>
        </MyPageMenu>
        <SectionSeparator />
        <MyPageMenu>공지사항</MyPageMenu>
        <MyPageMenu>문의하기</MyPageMenu>
        <SectionSeparator />
        <MyPageMenu>설정</MyPageMenu>
        <MyPageMenu>약관 및 정책</MyPageMenu>
        <MyPageMenu>
          <span>버전 정보</span>
          <MenuDetail>1.0.0</MenuDetail>
        </MyPageMenu>
        <SectionSeparator />
        <MyPageMenu>로그아웃</MyPageMenu>
        <MyPageMenu>탈퇴하기</MyPageMenu>
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

const MenuDetail = styled.span`
  color: ${colors.textMuted};
`;

// Module import
import styled from "styled-components";

// Style import
import { colors } from "../styles/colors";

// Image import
import greetingIconSmall from "../images/greetingIconSmall.svg";

// Components import
import ProfilePageHeader from "../components/ProfilePageHeader";
import ProfileMainSection from "../components/ProfileMainSection";
import ProfileIntroductionSection from "../components/ProfileIntroductionSection";
import ProfileCareerSection from "../components/ProfileCareerSection";
import ProfileGenreSection from "../components/ProfileGenreSection";
import ProfilePortfolioSection from "../components/ProfilePortfolioSection";
import ProfileCommentSection from "../components/ProfileCommentSection";

export default function Profile() {
  return (
    <div
      style={{
        color: "white",
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ProfilePageHeader isMyPage={false} />
      <ProfileMainSection isMyPage={false} />
      <ProfileIntroductionSection isMyPage={false} />
      <ProfileCareerSection
        isMyPage={false}
        careerContent="OOO앨범에 OOO로 참여한 적 있고,
        OOO프로그램에 OO로 방송 출연한 적 있습니다!"
      />
      <ProfileGenreSection isMyPage={false} />
      <ProfilePortfolioSection isMyPage={false} />
      <ProfileCommentSection isMyPage={false} />
      <hr
        style={{
          border: `10px solid ${colors.bgDivider}`,
          margin: "0 0 40px 0",
        }}
      />
    </div>
  );
}

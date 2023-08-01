// Module import
import styled from "styled-components";
import { useState } from "react";

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
import { fontStyles } from "../styles/fontStyle";

export default function Profile() {
  const [isGreet, setIsGreet] = useState<boolean>(false);
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
      <ProfileCommentSection />
      <div style={{ height: "60px" }}></div>
      <ProfileInteractSection>
        <div
          onClick={() => {
            setIsGreet((prev) => !prev);
          }}
          style={{
            display: "flex",
            height: "47px",
            width: "47px",
            backgroundColor: isGreet ? "" : `${colors.bgOnSurface}`,
            backgroundImage: isGreet
              ? `linear-gradient(135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%)`
              : "",
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            width="24px"
            height="24px"
            src={greetingIconSmall}
            alt="그릿하기"
          />
        </div>
        <div
          style={{
            flexGrow: "1",
            ...fontStyles.body1Semibold,
            display: "flex",
            backgroundColor: `${colors.primary100}`,
            height: "100%",
            color: `${colors.textDarken}`,
            boxSizing: "border-box",
            padding: "15px 20px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          연락하기
        </div>
      </ProfileInteractSection>
    </div>
  );
}

const ProfileInteractSection = styled.section`
  position: fixed;
  display: flex;
  bottom: 0;
  width: calc(100% - 32px);
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  height: 60px;
  padding: 6px 0px 7px 0px;
  box-sizing: border-box;
  background-color: ${colors.bgSurface};
  align-items: center;
  gap: 10px;
`;

// Module import
import styled from "styled-components";
import { useState, FC } from "react";

// Style import
import { colors } from "../styles/colors";
import { fontStyles } from "../styles/fontStyle";

// Image import
import greetingIconSmall from "../images/greetingIconSmall.svg";
import xIcon from "../images/xIcon.svg";
import copyIcon from "../images/copyIcon.svg";

// Components import
import ProfilePageHeader from "../components/ProfilePageHeader";
import ProfileMainSection from "../components/ProfileMainSection";
import ProfileIntroductionSection from "../components/ProfileIntroductionSection";
import ProfileCareerSection from "../components/ProfileCareerSection";
import ProfileGenreSection from "../components/ProfileGenreSection";
import ProfilePortfolioSection from "../components/ProfilePortfolioSection";
import ProfileCommentSection from "../components/ProfileCommentSection";

// 연락 수단 component S
interface ContactMethodProps {
  methodName: string;
  methodValue: string;
}
const ContactMethod: FC<ContactMethodProps> = ({ methodName, methodValue }) => {
  return (
    <div>
      <div
        style={{
          ...fontStyles.subheadingMedium,
          color: `${colors.textDefault}`,
          marginBottom: "4px",
        }}
      >
        {methodName}
      </div>
      <div
        style={{
          padding: "18px 20px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: `${colors.bgInputBorder}`,
          borderRadius: "8px",
          ...fontStyles.body1Regular,
          color: `${colors.textActive}`,
        }}
      >
        <span>{methodValue}</span>
        <img
          onClick={() => {
            // copy or contact
          }}
          style={{ cursor: "pointer" }}
          width={"24px"}
          height={"24px"}
          src={copyIcon}
          alt="복사하기"
        />
      </div>
    </div>
  );
};
// 연락 수단 component E

export default function Profile() {
  const [isGreet, setIsGreet] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  return (
    <div
      style={{
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ProfilePageHeader isMyPage={false} />
      <div style={{ height: "44px" }}></div>
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
          onClick={() => setShowContactModal((prev) => !prev)}
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

      {showContactModal && (
        <>
          <div
            onClick={() => setShowContactModal((prev) => !prev)}
            style={{
              zIndex: "1",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          ></div>
          <ContactModal>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2
                  style={{
                    ...fontStyles.heading2Medium,
                    color: `${colors.textActive}`,
                  }}
                >
                  연락 수단으로 연락해주세요.
                </h2>
                <img
                  onClick={() => setShowContactModal((prev) => !prev)}
                  width="24px"
                  height="24px"
                  src={xIcon}
                  alt="연락 수단 닫기"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <span
                style={{
                  ...fontStyles.subheadingRegular,
                  color: `${colors.textDefault}`,
                }}
              >
                "Greet에서 보고 연락드렸어요" 라고 보내주세요!
              </span>
            </div>

            <ContactMethod
              methodName="오픈채팅방 링크"
              methodValue="https://open.kakao.com/o/sfJqp7ef"
            />
            <ContactMethod methodName="전화번호" methodValue="010-7710-3706" />
          </ContactModal>
        </>
      )}
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
  max-width: 468px;
  height: 60px;
  padding: 6px 0px 7px 0px;
  box-sizing: border-box;
  background-color: ${colors.bgSurface};
  align-items: center;
  gap: 10px;
`;

const ContactModal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  max-width: 500px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${colors.bgOnSurface};
  border-radius: 16px 16px 0 0;
  box-sizing: border-box;
  padding: 20px 20px 30px 20px;
  z-index: 2;
`;

// Module import
import { FC } from "react";
import styled from "styled-components";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";

// Image import
import rightArrowIcon from "../images/rightArrow.svg";
import MemberCardContainer from "./MemberCardContainer";

interface ProfileIntroductionSectionProps {
  isMyPage: boolean;
}

const ProfileIntroductionSection: FC<ProfileIntroductionSectionProps> = ({
  isMyPage,
}: ProfileIntroductionSectionProps) => {
  return (
    <section
      style={{
        maxWidth: "500px",
        boxSizing: "border-box",
        padding: "0 16px",
        margin: "0 auto 49px auto",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "24px",
          marginBottom: "1px",
        }}
      >
        <h3 style={{ ...fontStyles.heading3Semibold, height: "22px" }}>
          나를 소개해요
        </h3>
        {isMyPage && (
          <img
            style={{ cursor: "pointer" }}
            src={rightArrowIcon}
            alt="나를 소개해요 수정하기"
          />
        )}
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <RoleContainer>작곡/편곡가</RoleContainer>
        <RoleLevel>최근에 시작했어요</RoleLevel>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <RoleContainer>래퍼</RoleContainer>
        <RoleLevel>열심히 하고 있어요</RoleLevel>
      </div>
    </section>
  );
};

const RoleContainer = styled.div`
  display: inline-block;
  border-radius: 100px;
  height: 33px;
  padding: 0 16px;
  background-color: ${colors.primary100};
  color: ${colors.textDarken};
  font-size: 14px;
  font-weight: 500;
  line-height: 33px;
`;

const RoleLevel = styled.span`
  display: inline-block;
  height: 33px;
  font-size: 14px;
  font-weight: 500;
  line-height: 33px;
`;

export default ProfileIntroductionSection;

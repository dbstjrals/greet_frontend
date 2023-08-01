// Module import
import { FC } from "react";
import styled from "styled-components";

// Style import
import { colors } from "../styles/colors";
import { fontStyles } from "../styles/fontStyle";

// Image import
import rightArrowIcon from "../images/rightArrow.svg";

interface ProfileGenreSectionProps {
  isMyPage: boolean;
}

const ProfileGenreSection: FC<ProfileGenreSectionProps> = ({
  isMyPage,
}: ProfileGenreSectionProps) => {
  return (
    <section
      style={{
        padding: "0 16px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "9px",
        }}
      >
        <h3
          style={{
            ...fontStyles.heading3Semibold,
            height: "22px",
            cursor: isMyPage ? "pointer" : "",
          }}
        >
          선호하는 음악 장르
        </h3>
        {isMyPage && (
          <img
            style={{ cursor: isMyPage ? "pointer" : "" }}
            src={rightArrowIcon}
            alt="선호 장르 수정하기"
          />
        )}
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px 6px",
          flexWrap: "wrap",
          cursor: isMyPage ? "pointer" : "",
        }}
      >
        <GenreBox>팝</GenreBox>
        <GenreBox>댄스/일렉트로닉/하우스</GenreBox>
        <GenreBox>락</GenreBox>
        <GenreBox>힙합/랩/트랩</GenreBox>
        <GenreBox>싱어/송라이터</GenreBox>
        <GenreBox>클래식/오페라</GenreBox>
        <GenreBox>R&B</GenreBox>
        <GenreBox>소울/블루스</GenreBox>
        <GenreBox>사운드트랙</GenreBox>
        <GenreBox>메탈</GenreBox>
      </div>
    </section>
  );
};

export default ProfileGenreSection;

const GenreBox = styled.div`
  color: ${colors.textLighten};
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${colors.grey20};
  background-color: ${colors.bgSurface};
  border-radius: 100px;
  box-sizing: border-box;
  padding: 0 16px;
  height: 33px;
  text-align: center;
  line-height: 33px;
`;

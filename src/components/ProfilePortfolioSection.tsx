// Module import
import { FC } from "react";

// Style import
import { colors } from "../styles/colors";
import { fontStyles } from "../styles/fontStyle";

// Image import
import rightArrowIcon from "../images/rightArrow.svg";

interface ProfilePortfolioSectionProps {
  isMyPage: boolean;
}

const ProfilePortfolioSection: FC<ProfilePortfolioSectionProps> = ({
  isMyPage,
}: ProfilePortfolioSectionProps) => {
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
            cursor: "pointer",
          }}
        >
          포트폴리오
        </h3>
        {isMyPage && (
          <img
            style={{ cursor: "pointer" }}
            src={rightArrowIcon}
            alt="포트폴리오 수정하기"
          />
        )}
      </div>
      <div
        style={{
          boxSizing: "border-box",
          height: "44px",
          padding: "10px 16px",
          backgroundColor: `${colors.bgInput}`,
          border: `1px solid ${colors.bgInputBorder}`,
          borderRadius: "6px",
          ...fontStyles.body2Medium,
          color: `${colors.textActive}`,
          cursor: "pointer",
        }}
      >
        www.notion.so/23-06-01-b689fe7c98e24des3d...
      </div>
    </section>
  );
};

export default ProfilePortfolioSection;

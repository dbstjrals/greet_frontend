// Module import
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
          onClick={isMyPage ? () => navigate("edit/portfolio") : undefined}
          style={{
            ...fontStyles.heading3Semibold,
            height: "22px",
            cursor: isMyPage ? "pointer" : "",
            color: `${colors.textActive}`,
          }}
        >
          포트폴리오
        </h3>
        {isMyPage && (
          <img
            onClick={isMyPage ? () => navigate("edit/portfolio") : undefined}
            style={{ cursor: "pointer" }}
            src={rightArrowIcon}
            alt="포트폴리오 수정하기"
          />
        )}
      </div>
      <div
        onClick={isMyPage ? () => navigate("edit/portfolio") : undefined}
        style={{
          boxSizing: "border-box",
          height: "44px",
          padding: "10px 16px",
          backgroundColor: `${colors.bgInput}`,
          border: `1px solid ${colors.bgInputBorder}`,
          borderRadius: "8px",
          ...fontStyles.body2Medium,
          color: `${colors.textActive}`,
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ overflow: "hidden", width: "100%" }}>
          www.notion.so/23-06-01-b689fe7c98e24des3d.adsfasfd
        </div>
      </div>
    </section>
  );
};

export default ProfilePortfolioSection;

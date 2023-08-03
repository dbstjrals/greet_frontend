// Module import
import { FC } from "react";
import { useNavigate } from "react-router-dom";

// Style import
import { colors } from "../styles/colors";
import { fontStyles } from "../styles/fontStyle";

// Image import
import rightArrowIcon from "../images/rightArrow.svg";

interface ProfileCareerSectionProps {
  isMyPage: boolean;
  careerContent?: string;
}

const ProfileCareerSection: FC<ProfileCareerSectionProps> = ({
  isMyPage,
  careerContent,
}: ProfileCareerSectionProps) => {
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
          marginBottom: "10px",
        }}
      >
        <h3
          onClick={isMyPage ? () => navigate("edit/career") : undefined}
          style={{
            ...fontStyles.heading3Semibold,
            height: "22px",
            cursor: isMyPage ? "pointer" : "",
            color: `${colors.textActive}`,
          }}
        >
          이력사항
        </h3>
        {isMyPage && (
          <img
            onClick={isMyPage ? () => navigate("edit/career") : undefined}
            style={{ cursor: isMyPage ? "pointer" : "" }}
            src={rightArrowIcon}
            alt="이력사항 수정하기"
          />
        )}
      </div>
      <div
        onClick={isMyPage ? () => navigate("edit/career") : undefined}
        style={{
          ...fontStyles.body2Medium,
          padding: "10px 16px",
          backgroundColor: `${colors.bgInput}`,
          border: `1px solid ${colors.bgInputBorder}`,
          borderRadius: "8px",
          color: careerContent ? `${colors.textActive}` : `${colors.textMuted}`,
          wordBreak: "keep-all",
          cursor: isMyPage ? "pointer" : "",
        }}
      >
        {careerContent}
      </div>
    </section>
  );
};

export default ProfileCareerSection;

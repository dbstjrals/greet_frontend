// Module import
import { FC } from "react";

// Style import
import { colors } from "../styles/colors";
import { fontStyles } from "../styles/fontStyle";

// Image import
import rightArrowIcon from "../images/rightArrow.svg";
import defaultProfileImage from "../images/defaultProfileImage.png";

interface ProfileCommentSectionProps {
  isMyPage: boolean;
}

const ProfileCommentSection: FC<ProfileCommentSectionProps> = ({
  isMyPage,
}: ProfileCommentSectionProps) => {
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
          style={{
            ...fontStyles.heading3Semibold,
            height: "22px",
            cursor: "pointer",
          }}
        >
          댓글&nbsp;30
        </h3>
        {isMyPage && (
          <img
            style={{ cursor: "pointer" }}
            src={rightArrowIcon}
            alt="댓글 수정하기"
          />
        )}
      </div>
      <div
        style={{
          ...fontStyles.body2Medium,
          padding: "14.5px 50px 14.5px 12px",
          backgroundColor: `${colors.bgInput}`,
          border: `1px solid ${colors.bgInputBorder}`,
          borderRadius: "8px",
          cursor: "pointer",
          boxSizing: "border-box",
          height: "50px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <img
          width="22px"
          height="22px"
          src={defaultProfileImage}
          alt="댓글 작성자 프로필 사진"
        />
        <span
          style={{
            ...fontStyles.body2Medium,
            color: `${colors.textActive}`,
            whiteSpace: "nowrap",
          }}
        >
          가나다라마바사
        </span>
        <span
          style={{
            ...fontStyles.body2Regular,
            color: `${colors.textMuted}`,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          혹시 이번 달에 개인 레슨 받...
        </span>
      </div>
    </section>
  );
};

export default ProfileCommentSection;

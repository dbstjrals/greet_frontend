// Module import
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";

// Image import
import backIcon from "../images/back.svg";
import shareIcon from "../images/shareIcon.svg";
import hamburgerIcon from "../images/hamburgerIcon.svg";

// Component import
import SideNavigator from "./SideNavigator";

interface ProfilePageHeaderProps {
  isMyPage: boolean;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({
  isMyPage,
}: ProfilePageHeaderProps) => {
  const navigate = useNavigate();
  const [showSideNavigator, setShowSideNavigator] = useState<Boolean>(false);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: isMyPage ? "10px 21px 10px 16px" : "10px 21px 10px 9px",
        height: "44px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{ ...fontStyles.body1Semibold, color: `${colors.textActive}` }}
      >
        {isMyPage ? (
          "마이페이지"
        ) : (
          <img
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
            src={backIcon}
            alt="뒤로 가기"
          />
        )}
      </div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <img style={{ cursor: "pointer" }} src={shareIcon} alt="공유하기" />
        <img
          style={{ cursor: "pointer" }}
          src={hamburgerIcon}
          alt="사이드 메뉴 열기"
          onClick={() => setShowSideNavigator(true)}
        />
      </nav>
      {showSideNavigator && (
        <SideNavigator closeOnclick={() => setShowSideNavigator(false)} />
      )}
    </header>
  );
};

export default ProfilePageHeader;

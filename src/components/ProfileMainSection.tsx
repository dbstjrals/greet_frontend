// Module import
import { FC } from "react";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";

// Image import
import testProfileImage from "../images/moomin.png";
import modifyIcon from "../images/modifyIcon.svg";
import greetedIconSmall from "../images/greetedIconSmall.png";
import rightArrowIcon from "../images/rightArrow.svg";

// Component import

interface ProfileMainSectionProps {
  isMyPage: boolean;
}

const ProfileMainSection: FC<ProfileMainSectionProps> = ({
  isMyPage,
}: ProfileMainSectionProps) => {
  return (
    <section
      style={{ maxWidth: "500px", margin: "0 auto 20px auto", height: "275px" }}
    >
      <div
        style={{
          position: "relative",
          height: "150px",
          background:
            "linear-gradient(135deg, #FFF626 0%, #FF6726 52.29%, #FF2674 100%)",
        }}
      >
        {/* 한줄 멘트 */}
        <h2
          style={{
            ...fontStyles.body1Semibold,
            color: `${colors.grey100}`,
            position: "absolute",
            left: "calc(50% - 94px)",
            top: "40px",
          }}
        >
          " 경험많은 힙합 래퍼 찾아요! "
        </h2>
        {/* 프로필 사진 */}
        <div
          style={{
            width: "124px",
            height: "124px",
            position: "absolute",
            left: "calc(50% - 62px)",
            top: "87px",
          }}
        >
          <img
            style={{
              cursor: isMyPage ? "pointer" : "",
              width: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              aspectRatio: "1/1",
            }}
            src={testProfileImage}
            alt=""
          />
        </div>
        {/* 배경화면 수정 */}
        {isMyPage && (
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              height: "16px",
              position: "absolute",
              right: "16px",
              bottom: "10px",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <img src={modifyIcon} alt="배경화면 수정하기" />
            <span
              style={{
                ...fontStyles.body3Medium,
                color: `${colors.textActive}`,
              }}
            >
              수정
            </span>
          </div>
        )}
        {/* Greet 수 */}
        <div
          style={{
            cursor: isMyPage ? "" : "pointer",
            display: "flex",
            height: "32px",
            position: "absolute",
            left: "16px",
            top: "164px",
            gap: "8px",
            boxSizing: "border-box",
            padding: "4px 12px 4px 4px",
            alignItems: "center",
            backgroundColor: `${colors.bgOnSurface}`,
            borderRadius: "100px",
          }}
        >
          <img
            width="24px"
            height="24px"
            src={greetedIconSmall}
            alt="그릿하기"
          />
          <span
            style={{
              ...fontStyles.caption1Medium,
              color: `${colors.textActive}`,
            }}
          >
            999+
          </span>
        </div>
        {/* 이름 & 팀 */}
        <div
          style={{
            cursor: isMyPage ? "pointer" : "",
            display: "flex",
            width: "150px",
            height: "51px",
            flexDirection: "column",
            position: "absolute",
            left: "calc(50% - 75px)",
            top: "229px",
            gap: "8px",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            // onClick={()=> "프로필 수정"}
            style={{
              ...fontStyles.heading2Medium,
              position: "relative",
              cursor: isMyPage ? "pointer" : "",
              color: `${colors.textActive}`,
              height: "24px",
              lineHeight: "24px",
            }}
          >
            윤석민
            {isMyPage && (
              <div
                style={{
                  height: "24px",
                  position: "absolute",
                  top: "0",
                  display: "flex",
                  alignItems: "center",
                  right: "-24px",
                }}
              >
                <img src={rightArrowIcon} alt="프로필 수정하기" />
              </div>
            )}
          </div>
          <div
            // onClick={()=> "프로필 수정"}
            style={{
              ...fontStyles.body3Medium,
              display: "flex",
              gap: "2px",
              cursor: isMyPage ? "pointer" : "",
              height: "19px",
            }}
          >
            <span style={{ color: `${colors.primary100}` }}>Greet</span>
            <span style={{ color: `${colors.textDefault}` }}>팀 소속</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileMainSection;

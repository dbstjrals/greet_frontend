// Module import
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";

// Images import

// Components import
import BackTextNavigationBar from "../components/BackTextNavigationBar";

export default function Announcement() {
  const navigate = useNavigate();

  return (
    <>
      <BackTextNavigationBar innerText="공지사항" />
      <AnnouncementWrapper hasCheck={true}>
        <div
          style={{
            ...fontStyles.subheadingRegular,
            color: `${colors.textActive}`,
            height: "21px",
            marginBottom: "1px",
          }}
        >
          그릿 업데이트 안내입니다.
        </div>
        <div
          style={{
            ...fontStyles.caption1Regular,
            color: "rgba(255, 255, 255, 0.55)",
            height: "19px",
          }}
        >
          4월 13일
        </div>
      </AnnouncementWrapper>
      <AnnouncementWrapper hasCheck={false}>
        <div
          style={{
            ...fontStyles.subheadingRegular,
            color: `${colors.textActive}`,
            height: "21px",
            marginBottom: "1px",
          }}
        >
          그릿 업데이트 안내입니다.
        </div>
        <div
          style={{
            ...fontStyles.caption1Regular,
            color: "rgba(255, 255, 255, 0.55)",
            height: "19px",
          }}
        >
          4월 13일
        </div>
      </AnnouncementWrapper>
      <AnnouncementWrapper hasCheck={false}>
        <div
          style={{
            ...fontStyles.subheadingRegular,
            color: `${colors.textActive}`,
            height: "21px",
            marginBottom: "1px",
          }}
        >
          그릿 업데이트 안내입니다.
        </div>
        <div
          style={{
            ...fontStyles.caption1Regular,
            color: "rgba(255, 255, 255, 0.55)",
            height: "19px",
          }}
        >
          4월 13일
        </div>
      </AnnouncementWrapper>
    </>
  );
}

const AnnouncementWrapper = styled.div<{ hasCheck: boolean }>`
  width: 100%;
  height: 70px;
  cursor: pointer;
  padding: 14px 16px 15px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.grey05};
  background-color: ${(props: { hasCheck: boolean }) =>
    props.hasCheck ? `${colors.bgSurface}` : `${colors.grey00}`};
`;

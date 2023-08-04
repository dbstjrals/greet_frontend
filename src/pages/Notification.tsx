// Module import

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";

// Components import
import PageContainer from "../components/PageContainer";

// Images import
import BackTextNavigationBar from "../components/BackTextNavigationBar";
import styled from "styled-components";

export default function Notification() {
  return (
    <PageContainer style={{ width: "100%", padding: "0" }}>
      <BackTextNavigationBar innerText="알림" />
      <NotificationWrapper>
        <div
          style={{
            ...fontStyles.subheadingRegular,
            color: `${colors.textActive}`,
            height: "21px",
            marginBottom: "1px",
          }}
        >
          POL님이 나의 페이지에 댓글을 남겼어요.
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
      </NotificationWrapper>
      <SectionSeparator />
      <NotificationWrapper>
        <div
          style={{
            ...fontStyles.subheadingRegular,
            color: `${colors.textActive}`,
            height: "21px",
            marginBottom: "1px",
          }}
        >
          POL님이 나의 페이지에 댓글을 남겼어요.
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
      </NotificationWrapper>
      <SectionSeparator />
      <NotificationWrapper>
        <div
          style={{
            ...fontStyles.subheadingRegular,
            color: `${colors.textActive}`,
            height: "21px",
            marginBottom: "1px",
          }}
        >
          POL님이 나의 페이지에 댓글을 남겼어요.
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
      </NotificationWrapper>
      <SectionSeparator />
    </PageContainer>
  );
}

const NotificationWrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 14px 16px 15px 16px;
  box-sizing: border-box;
`;
// border-bottom: 0.5px solid ${colors.grey05};
const SectionSeparator = styled.hr`
  border: none;
  border-top: 1px solid ${colors.grey05};
  margin: 0px;
`;

// Module import
import styled from "styled-components";
import { FC, useState } from "react";

// Style import
import { colors } from "../../styles/colors";
import { fontStyles } from "../../styles/fontStyle";

// Image import

// Component import
import BackTextNavigationBar from "../../components/BackTextNavigationBar";
import Button from "../../components/Button";

export default function EditCareer() {
  const [career, setCareer] = useState<string>("");

  const handleCareerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCareer(event.target.value);
  };

  return (
    <>
      <BackTextNavigationBar innerText="이력사항" />
      <div style={{ padding: "0 16px" }}>
        <div
          style={{
            ...fontStyles.subheadingMedium,
            color: `${colors.textDefault}`,
            marginTop: "30px",
            marginBottom: "4px",
          }}
        >
          이력 사항
        </div>
        <TextArea
          value={career}
          onChange={handleCareerChange}
          placeholder="다음 예시를 참고해서 작성해주세요!&#13;&#10;ex. 대표 연주 스타일&#13;&#10;ex. 참여한 앨범 목록&#13;&#10;ex. 수상 내역&#13;&#10;ex. 세션 연주로 참여한 콘서트&#13;&#10;ex. 방송 출연 정보"
          style={{
            ...fontStyles.body2Medium,
            fontFamily: "Pretendard",
            color: `${colors.textActive}`,
            width: "100%",
            height: "150px",
            resize: "none",
            padding: "10px 16px",
            boxSizing: "border-box",
            backgroundColor: `${colors.bgInput}`,
            borderRadius: "8px",
            border: `1px solid ${colors.bgInputBorder}`,
            outline: "none",
            marginBottom: "437px",
          }}
        ></TextArea>
        <Button
          children="확인"
          disabled={false}
          onClick={() => alert("완료")}
        />
      </div>
    </>
  );
}

const TextArea = styled.textarea`
  &::placeholder {
    color: ${colors.textMuted};
  }
`;

// Module import
import styled from "styled-components";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

// Style import
import { colors } from "../../styles/colors";
import { fontStyles } from "../../styles/fontStyle";

// Image import
import theme1 from "../../images/theme1.svg";
import theme2 from "../../images/theme2.svg";
import theme3 from "../../images/theme3.svg";
import theme4 from "../../images/theme4.svg";
import theme5 from "../../images/theme5.svg";
import checkIcon from "../../images/checkIconBlack.svg";

// Component import
import BackTextNavigationBar from "../../components/BackTextNavigationBar";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function EditPortfolio() {
  const [url, setUrl] = useState<string>("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <>
      <BackTextNavigationBar innerText="포트폴리오" />
      <div style={{ padding: "0 16px" }}>
        <div
          style={{
            ...fontStyles.heading2Medium,
            color: `${colors.textActive}`,
            marginTop: "16px",
          }}
        >
          공유하고 싶은 작품이나 페이지가 있나요?
        </div>
        <div
          style={{
            ...fontStyles.subheadingRegular,
            color: `${colors.textDefault}`,
            marginTop: "4px",
            marginBottom: "31px",
          }}
        >
          사운드클라우드, 포트폴리오 등 링크를 공유해주세요.
        </div>
        <InputField
          type="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="www."
          label="URL"
          marginBottom="440px"
        ></InputField>
        <Button
          children="확인"
          onClick={() => alert("수정완료")}
          disabled={false}
        />
      </div>
    </>
  );
}

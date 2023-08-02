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

export default function EditTheme() {
  const navigate = useNavigate();

  const [selectedTheme, setSelectedTheme] = useState<string>("색상 1");

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTheme(event.target.value);
  };
  const themeData = [
    { src: theme1, alt: "색상 1" },
    { src: theme2, alt: "색상 2" },
    { src: theme3, alt: "색상 3" },
    { src: theme4, alt: "색상 4" },
    { src: theme5, alt: "색상 5" },
  ];

  const [commentary, setCommentary] = useState<string>("");

  const handleCommentaryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommentary(event.target.value);
  };

  return (
    <>
      <BackTextNavigationBar innerText="배경화면" />
      <div style={{ padding: "0 16px" }}>
        <h2
          style={{
            ...fontStyles.heading2Medium,
            color: `${colors.textActive}`,
            marginTop: "32px",
          }}
        >
          배경화면 색상
        </h2>
        <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
          {themeData.map((theme) => (
            <ThemeSelector
              key={theme.alt}
              src={theme.src}
              alt={theme.alt}
              onChange={handleThemeChange}
              checked={selectedTheme === theme.alt}
            />
          ))}
        </div>
        <h2
          style={{
            ...fontStyles.heading2Medium,
            color: `${colors.textActive}`,
            marginTop: "60px",
            marginBottom: "16px",
          }}
        >
          이런 뮤지션을 찾고 있어요
        </h2>
        <InputField
          type="text"
          marginBottom="335px"
          value={commentary}
          onChange={handleCommentaryChange}
          placeholder="ex) 힙합 래퍼 찾습니다."
          label="한 줄 멘트"
          isNecessary={false}
          maxCount={30}
          maxLength={30}
          currentCount={
            commentary.length < 30 ? (commentary.length as number) : 30
          }
          helpMessage="한글, 영어, 숫자만 가능해요. (특수문자 X)"
          helpMessageColor={`${colors.textMuted}`}
        />
        <Button children="확인" onClick={() => alert("수정완료")} disabled={false} />
      </div>
    </>
  );
}

interface ThemeSelectorProps {
  src: string;
  alt: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const ThemeSelector: FC<ThemeSelectorProps> = ({
  src,
  alt,
  onChange,
  checked,
}: ThemeSelectorProps) => {
  return (
    <>
      <label style={{ position: "relative" }}>
        <input
          style={{ position: "absolute", display: "none" }}
          type="radio"
          name="theme"
          value={alt}
          onChange={onChange}
          checked={checked}
        />
        <img src={src} alt={alt} />
        {checked && (
          <img
            style={{ position: "absolute", top: "6px", left: "6px" }}
            src={checkIcon}
            alt="선택됨"
          />
        )}
      </label>
    </>
  );
};

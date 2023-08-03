// Module import
import styled from "styled-components";
import { FC, useState } from "react";

// Style import
import { colors } from "../../styles/colors";
import { fontStyles } from "../../styles/fontStyle";

// Image import
import genreImagePop from "../../images/genreImagePop.png";
import genreImageDance from "../../images/genreImageDance.png";
import genreImageRock from "../../images/genreImageRock.png";
import genreImageHiphop from "../../images/genreImageHiphop.png";
import genreImageSinger from "../../images/genreImageSinger.png";
import genreImageClassic from "../../images/genreImageClassic.png";
import genreImageRnB from "../../images/genreImageRnB.png";
import genreImageSoul from "../../images/genreImageSoul.png";
import genreImageSoundtrack from "../../images/genreImageSoundtrack.png";
import genreImageMetal from "../../images/genreImageMetal.png";

// Component import
import BackTextNavigationBar from "../../components/BackTextNavigationBar";
import Button from "../../components/Button";

export default function EditGenre() {
  const everyGenre = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [preferredGenre, setPreferredGenre] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);

  const handleSelectedAllGenre = () => {
    const updatedPreferredGenre = everyGenre;
    if (isSelectedAll === true) {
      setPreferredGenre([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setIsSelectedAll(false);
    } else {
      setPreferredGenre(updatedPreferredGenre);
      setIsSelectedAll(true);
    }
  };

  const handleGenreSelect = (index: number) => {
    let updatedPreferredGenre = [...preferredGenre];
    if (updatedPreferredGenre[index] === 0) updatedPreferredGenre[index] = 1;
    else updatedPreferredGenre[index] = 0;
    setPreferredGenre(updatedPreferredGenre);
  };
  return (
    <>
      <BackTextNavigationBar innerText="선호하는 음악 장르" />
      <div style={{ padding: "0 16px" }}>
        <h2
          style={{
            ...fontStyles.heading2Medium,
            color: `${colors.textActive}`,
            marginTop: "32px",
            marginBottom: "8px",
          }}
        >
          선호하는 음악 장르를 선택해주세요.
        </h2>
        <p
          style={{
            ...fontStyles.subheadingRegular,
            color: `${colors.textDefault}`,
            marginBottom: "5px",
          }}
        >
          1개 이상 선택해주세요.
        </p>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={isSelectedAll}
            onChange={handleSelectedAllGenre}
            style={{ display: isSelectedAll ? "" : "none" }}
          ></CheckboxInput>
          <MyCheckBox
            style={{ display: isSelectedAll ? "none" : "" }}
          ></MyCheckBox>
          <CheckboxText>전체선택</CheckboxText>
        </CheckboxWrapper>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px 18px",
            justifyContent: "space-between",
          }}
        >
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImagePop})`,
              border: preferredGenre[0] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(0)}
          >
            팝
          </GenreWrapper>
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImageDance})`,
              border: preferredGenre[1] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(1)}
          >
            댄스/일레트로닉/하우스
          </GenreWrapper>
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImageRock})`,
              border: preferredGenre[2] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(2)}
          >
            락
          </GenreWrapper>
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImageHiphop})`,
              border: preferredGenre[3] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(3)}
          >
            힙합/랩/트랩
          </GenreWrapper>
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImageSinger})`,
              border: preferredGenre[4] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(4)}
          >
            싱어/송라이터
          </GenreWrapper>
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImageClassic})`,
              border: preferredGenre[5] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(5)}
          >
            클래식/오페라
          </GenreWrapper>
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImageRnB})`,
              border: preferredGenre[6] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(6)}
          >
            R&B
          </GenreWrapper>
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImageSoul})`,
              border: preferredGenre[7] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(7)}
          >
            소울/블루스
          </GenreWrapper>
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImageSoundtrack})`,
              border: preferredGenre[8] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(8)}
          >
            사운드트랙
          </GenreWrapper>
          <GenreWrapper
            style={{
              backgroundImage: `url(${genreImageMetal})`,
              border: preferredGenre[9] ? `1px solid ${colors.primary100}` : "",
            }}
            onClick={() => handleGenreSelect(9)}
          >
            메탈
          </GenreWrapper>
        </div>
        <div style={{ height: "55px" }}></div>
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

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 8px;
  cursor: pointer;
`;

// 선택된 체크박스
const CheckboxInput = styled.input`
  margin: 0px;
  accent-color: yellow;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  margin-right: 11px;
  border-radius: 4px;
  cursor: pointer;
`;

// 선택되지 않은 체크박스
const MyCheckBox = styled.span`
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  background-color: ${colors.bgInput};
  border: 1px ${colors.bgInputBorder} solid;
  border-radius: 4px;
  margin-right: 11px;
`;

const CheckboxText = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;

// 5페이지 장르 wrapper
const GenreWrapper = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  width: calc(50% - 9px);
  height: 82px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  border: 1px solid #1b1b1b;
  border-radius: 8px;
  justify-content: center;
`;

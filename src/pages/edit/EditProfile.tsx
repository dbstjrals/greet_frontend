// Module import
import { FC, useState } from "react";
import styled from "styled-components";

// Style import
import { colors } from "../../styles/colors";
import { fontStyles } from "../../styles/fontStyle";

// Image import
import defaultProfileImage from "../../images/defaultProfileImage.png";
import checkIcon from "../../images/checkIconBlack.svg";
import cameraIcon from "../../images/cameraIcon.png";

// Component import
import BackTextNavigationBar from "../../components/BackTextNavigationBar";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function EditProfile() {
  const [image, setImage] = useState(defaultProfileImage);
  const [files, setFiles] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFiles(reader.result as string);
        setImage(reader.result as string);
      };
    }
  };

  const [nickname, setNickname] = useState<string>("윤석민");
  const [isDuplicateNickname, setIsDuplicateNickname] =
    useState<boolean>(false);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const [teamName, setTeamName] = useState<string>("");

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
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
          프로필
        </h2>
        {/* 프로필 사진 변경 */}
        <div style={{ position: "relative", marginBottom: "63px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={image}
              alt=""
              width="124px"
              height="124px"
              style={{ objectFit: "cover", borderRadius: "62px" }}
            ></img>
          </div>
          <CameraStyle>
            <label htmlFor="ex_file">
              <img src={cameraIcon} alt="프로필 사진 변경" width="34px" />
            </label>
            <input
              type="file"
              id="ex_file"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </CameraStyle>
        </div>

        {/* 닉네임 입력란 */}
        <InputField
          type="nickname"
          value={nickname}
          onChange={handleNicknameChange}
          placeholder="닉네임을 입력해주세요."
          label="닉네임"
          marginBottom="32px"
          isNecessary={true}
          maxCount={8}
          maxLength={8}
          currentCount={nickname.length < 8 ? (nickname.length as number) : 8}
          helpMessage={
            isDuplicateNickname
              ? "이미 사용중인 닉네임입니다."
              : "한글, 영어, 숫자만 가능해요. (특수문자 X)"
          }
          helpMessageColor={
            isDuplicateNickname ? `${colors.negative}` : `${colors.textMuted}`
          }
          border={isDuplicateNickname ? `1px solid ${colors.negative}` : ""}
        />
        <InputField
          type="teamname"
          value={teamName}
          onChange={handleTeamNameChange}
          placeholder="팀 이름을 입력해주세요."
          label="팀 이름 (선택)"
          marginBottom="204px"
          maxCount={10}
          maxLength={10}
          currentCount={teamName.length < 10 ? (teamName.length as number) : 10}
          helpMessage={"한글, 영어, 숫자만 가능해요. (특수문자 X)"}
          helpMessageColor={colors.textMuted}
        />
        <Button
          children="확인"
          onClick={() => alert("수정완료")}
          disabled={false}
        />
      </div>
    </>
  );
}

const CameraStyle = styled.div`
  position: absolute;
  top: 90px;
  left: 207px;
  img {
    max-width: 325px;
  }
  label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

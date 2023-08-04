// Module import
import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";

// Components import
import BackNumberNavigationBar from "../components/BackNumberNavigationBar";
import PageContainer from "../components/PageContainer";
import InputField from "../components/InputField";
import { useState } from "react";
import Button from "../components/Button";
import Roles from "../components/Roles";
import SettingLevel from "../components/SettingLevel";

// Images import
import defaultProfileImage from "../images/defaultProfileImage.png";
import cameraIcon from "../images/cameraIcon.png";
import genreImagePop from "../images/genreImagePop.png";
import genreImageDance from "../images/genreImageDance.png";
import genreImageRock from "../images/genreImageRock.png";
import genreImageHiphop from "../images/genreImageHiphop.png";
import genreImageSinger from "../images/genreImageSinger.png";
import genreImageClassic from "../images/genreImageClassic.png";
import genreImageRnB from "../images/genreImageRnB.png";
import genreImageSoul from "../images/genreImageSoul.png";
import genreImageSoundtrack from "../images/genreImageSoundtrack.png";
import genreImageMetal from "../images/genreImageMetal.png";

export default function Onboarding() {
  const navigate = useNavigate();

  // 현재 페이지 저장 변수
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 1페이지 관련 변수 및 함수
  const [image, setImage] = useState(defaultProfileImage);
  const [files, setFiles] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const [nickname, setNickname] = useState<string>("");
  const [isDuplicateNickname, setIsDuplicateNickname] =
    useState<boolean>(false);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    setIsDuplicateNickname(false);
  };

  const checkPage1 = () => {
    //중복 확인 api 전송
    if (nickname === "석민") {
      // 중복일 경우
      setIsDuplicateNickname(true);
    } else {
      setCurrentPage(2);
    }
  };

  // 2페이지 관련 변수 및 함수
  const [teamName, setTeamName] = useState<string>("");

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
  };

  const checkPage2 = () => {
    // 팀명 전송 api
    if (teamName === "") {
      alert("팀명없음");
      setCurrentPage(3);
    } else {
      alert("팀명전송");
      setCurrentPage(3);
    }
  };

  // 3페이지 관련 변수 및 함수
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [otherRole, setOtherRole] = useState<string>("");
  // 그 외 직군 이라는 것이 포함되어 있으면 selectedRoles에서 그 외 직군을 빼고, otherRole을 추가
  const [selectedRolesForApi, setSelectedRolesForApi] = useState<string[]>([]);

  const handleSelectRoles = (selectedRoles: string[]) => {
    setSelectedRoles(selectedRoles);
  };

  const handleOtherRole = (otherRole: string) => {
    setOtherRole(otherRole);
  };

  // role과 level을 저장하는 array (4페이지에서 사용되지만, 3페이지에서 생성되어야 함)
  const [roleLevel, setRoleLevel] = useState<{ role: string; level: number }[]>(
    []
  );

  const checkPage3 = () => {
    let array;
    let roleLevelArray: { role: string; level: number }[] = [];
    if (selectedRoles.includes("그 외 직군")) {
      array = selectedRoles;
      array.splice(array.indexOf("그 외 직군"), 1);
      array.push(otherRole);
    } else {
      array = selectedRoles;
      if (array.includes(otherRole)) array.splice(array.indexOf(otherRole));
    }
    roleLevelArray = selectedRoles.map((role) => ({ role, level: 0 }));
    setSelectedRolesForApi(array);
    setCurrentPage(currentPage + 1);
    setRoleLevel(roleLevelArray);
  };

  // 4페이지 관련 변수 및 함수
  const handleSettingLevel = (
    roleLevel: { role: string; level: number }[],
    index: number,
    selectedLevel: number
  ) => {
    const updatedArray = [...roleLevel];
    updatedArray[index] = { ...updatedArray[index], level: selectedLevel };
    setRoleLevel(updatedArray);
  };

  const isPage4ButtonDisabled = roleLevel.every((item) => item.level !== 0);
  const checkPage4 = () => {
    setCurrentPage(currentPage + 1);
  };

  // 5페이지 관련 변수 및 함수
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

  const isPage5ButtonDisabled = preferredGenre.every((item) => item === 0);
  const checkPage5 = () => {
    setCurrentPage(currentPage + 1);
  };

  // 6페이지 관련 변수 및 함수
  const [url, setUrl] = useState<string>("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const checkPage6 = () => {
    setCurrentPage(currentPage + 1);
  };

  // 7페이지 관련 변수 및 함수
  const [commentary, setCommentary] = useState<string>("");

  const handleCommentaryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommentary(event.target.value);
  };

  const checkPage7 = () => {
    setCurrentPage(currentPage + 1);
    // navigate()
  };

  // 8페이지 관련 변수 및 함수
  const [openChatLink, setOpenChatLink] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [instagramId, setInstagramId] = useState<string>("");

  const handleOpenChatLinkChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOpenChatLink(event.target.value);
  };
  const handleContactEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactEmail(event.target.value);
  };
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };
  const handleInstagramIdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInstagramId(event.target.value);
  };

  const isPage8ButtonDisabled =
    openChatLink.length === 0 &&
    contactEmail.length === 0 &&
    phoneNumber.length === 0 &&
    instagramId.length === 0;

  return (
    <>
      <BackNumberNavigationBar
        currentPage={currentPage}
        maxPage={8}
        setCurrentPage={setCurrentPage}
      />
      <PageContainer>
        {currentPage === 1 && (
          <>
            {/* 안내 문구 */}
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                marginTop: "16px",
                marginBottom: "48px",
              }}
            >
              <b style={{ color: `${colors.primary100}` }}>Greet &nbsp;</b>
              에서 사용할
              <br /> 닉네임을 입력해주세요.
            </div>
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
              marginBottom="231px"
              isNecessary={true}
              maxCount={8}
              maxLength={8}
              currentCount={nickname.length as number}
              helpMessage={
                isDuplicateNickname
                  ? "이미 사용중인 닉네임입니다."
                  : "한글, 영어, 숫자만 가능해요. (특수문자 X)"
              }
              helpMessageColor={
                isDuplicateNickname
                  ? `${colors.negative}`
                  : `${colors.textMuted}`
              }
              border={isDuplicateNickname ? `1px solid ${colors.negative}` : ""}
            ></InputField>
            <Button disabled={nickname.length === 0} onClick={checkPage1}>
              다음
            </Button>
          </>
        )}
        {currentPage === 2 && (
          <>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                marginTop: "16px",
              }}
            >
              혹시 소속된 팀이 있으신가요?
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                marginTop: "4px",
                marginBottom: "31px",
              }}
            >
              없다면 다음 버튼을 눌러주세요
            </div>
            <InputField
              type="teamname"
              value={teamName}
              onChange={handleTeamNameChange}
              placeholder="팀 이름을 입력해주세요."
              label="팀 이름 (선택)"
              marginBottom="436px"
              maxCount={10}
              maxLength={10}
              currentCount={teamName.length as number}
              helpMessage={"한글, 영어, 숫자만 가능해요. (특수문자 X)"}
              helpMessageColor={colors.textMuted}
            ></InputField>
            <Button disabled={false} onClick={checkPage2}>
              다음
            </Button>
          </>
        )}
        {currentPage === 3 && (
          <>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                marginTop: "16px",
              }}
            >
              어떤 뮤지션으로 활동하세요?
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                marginTop: "4px",
                marginBottom: "31px",
              }}
            >
              1개 이상 선택해주세요.
            </div>
            <Roles
              onSelectRoles={handleSelectRoles}
              otherRole={handleOtherRole}
            />
            <Button
              // 직군 선택 정책 검사 (1개 이상 선택했는지, 그 외 직군을 선택하고 공백으로 전송하지 않았는지)
              disabled={
                selectedRoles.length < 1 ||
                (selectedRoles.includes("그 외 직군") && otherRole === "")
              }
              onClick={checkPage3}
            >
              다음
            </Button>
          </>
        )}
        {currentPage === 4 && (
          <>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                marginTop: "16px",
              }}
            >
              본인이 생각하는 수준을 선택해주세요.
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                marginTop: "4px",
                marginBottom: "31px",
              }}
            >
              나중에 변경할 수 있어요.
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "34px",
              }}
            >
              <div style={{ flexBasis: "539px" }}>
                {selectedRolesForApi.map((role, index) => (
                  <div style={{ marginBottom: "30px" }}>
                    <SettingLevel
                      key={index}
                      labelNum={index + 1}
                      label={role}
                      roleLevel={roleLevel}
                      handleSettingLevel={handleSettingLevel}
                    />
                  </div>
                ))}
              </div>
              <Button disabled={!isPage4ButtonDisabled} onClick={checkPage4}>
                다음
              </Button>
            </div>
          </>
        )}
        {currentPage === 5 && (
          <>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                marginTop: "16px",
              }}
            >
              선호하는 음악 장르를 선택해 주세요
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                marginTop: "4px",
                marginBottom: "9px",
              }}
            >
              1개 이상 선택해주세요.
            </div>
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
                  border: preferredGenre[0]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(0)}
              >
                팝
              </GenreWrapper>
              <GenreWrapper
                style={{
                  backgroundImage: `url(${genreImageDance})`,
                  border: preferredGenre[1]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(1)}
              >
                댄스/일레트로닉/하우스
              </GenreWrapper>
              <GenreWrapper
                style={{
                  backgroundImage: `url(${genreImageRock})`,
                  border: preferredGenre[2]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(2)}
              >
                락
              </GenreWrapper>
              <GenreWrapper
                style={{
                  backgroundImage: `url(${genreImageHiphop})`,
                  border: preferredGenre[3]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(3)}
              >
                힙합/랩/트랩
              </GenreWrapper>
              <GenreWrapper
                style={{
                  backgroundImage: `url(${genreImageSinger})`,
                  border: preferredGenre[4]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(4)}
              >
                싱어/송라이터
              </GenreWrapper>
              <GenreWrapper
                style={{
                  backgroundImage: `url(${genreImageClassic})`,
                  border: preferredGenre[5]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(5)}
              >
                클래식/오페라
              </GenreWrapper>
              <GenreWrapper
                style={{
                  backgroundImage: `url(${genreImageRnB})`,
                  border: preferredGenre[6]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(6)}
              >
                R&B
              </GenreWrapper>
              <GenreWrapper
                style={{
                  backgroundImage: `url(${genreImageSoul})`,
                  border: preferredGenre[7]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(7)}
              >
                소울/블루스
              </GenreWrapper>
              <GenreWrapper
                style={{
                  backgroundImage: `url(${genreImageSoundtrack})`,
                  border: preferredGenre[8]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(8)}
              >
                사운드트랙
              </GenreWrapper>
              <GenreWrapper
                style={{
                  backgroundImage: `url(${genreImageMetal})`,
                  border: preferredGenre[9]
                    ? `1px solid ${colors.primary100}`
                    : "",
                }}
                onClick={() => handleGenreSelect(9)}
              >
                메탈
              </GenreWrapper>
            </div>
            <div style={{ height: "55px" }}></div>
            <Button disabled={isPage5ButtonDisabled} onClick={checkPage5}>
              다음
            </Button>
          </>
        )}
        {currentPage === 6 && (
          <>
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
              label="URL(선택)"
              marginBottom="440px"
            ></InputField>
            <Button onClick={checkPage6} disabled={false}>
              다음
            </Button>
          </>
        )}
        {currentPage === 7 && (
          <>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                marginTop: "16px",
              }}
            >
              어떤 뮤지션을 찾고 있나요?
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                marginTop: "4px",
                marginBottom: "31px",
              }}
            >
              분야, 실력, 경험 등을 포함해주세요.
            </div>
            <InputField
              type="commentary"
              value={commentary}
              onChange={handleCommentaryChange}
              placeholder="ex) 힙합 래퍼 찾습니다."
              helpMessage="한글, 영어, 숫자만 가능해요 (특수문자 X)"
              helpMessageColor={colors.textMuted}
              maxCount={30}
              maxLength={30}
              currentCount={commentary.length as number}
              label="한 줄 멘트"
              marginBottom="440px"
            ></InputField>
            <Button onClick={checkPage7} disabled={commentary.length === 0}>
              다음
            </Button>
          </>
        )}
        {currentPage === 8 && (
          <>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                marginTop: "16px",
              }}
            >
              어디로 연락하면 되나요?
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                marginTop: "4px",
                marginBottom: "31px",
              }}
            >
              1개 이상 작성해 주세요
            </div>
            <InputField
              type="link"
              value={openChatLink}
              onChange={handleOpenChatLinkChange}
              placeholder="카카오톡 오픈채팅방을 만들고 링크를 입력해주세요."
              label="오픈채팅방 링크"
              marginBottom="0px"
            ></InputField>
            <InputField
              type="email"
              value={contactEmail}
              onChange={handleContactEmailChange}
              placeholder="ex) greet@gmail.com"
              label="이메일"
              marginBottom="0px"
            ></InputField>
            <InputField
              type="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="010-0000-0000"
              label="전화번호"
              marginBottom="0px"
            ></InputField>
            <InputField
              type="id"
              value={instagramId}
              onChange={handleInstagramIdChange}
              placeholder="ID"
              label="인스타그램 ID"
              marginBottom="143px"
            ></InputField>
            <Button onClick={checkPage7} disabled={isPage8ButtonDisabled}>
              완료
            </Button>
          </>
        )}
      </PageContainer>
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

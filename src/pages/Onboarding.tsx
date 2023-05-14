// Module import
import React, { ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Components import
import BackNumberNavigationBar from "../components/BackNumberNavigationBar";
import PageContainer from '../components/PageContainer'
import InputField from "../components/InputField";
import { useState } from "react";
import Button from "../components/Button";
import Roles from '../components/Roles';

// Images import
import defaultProfileImage from "../images/defaultProfileImage.png"
import cameraIcon from "../images/cameraIcon.png"
import SettingLevel from '../components/SettingLevel';


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

export default function Onboarding() {
  const navigate = useNavigate();

  // 현재 페이지 저장 변수
  const [currentPage, setCurrentPage] = useState<number>(3);

  // 1페이지 관련 변수 및 함수
  const [image, setImage] = useState(defaultProfileImage);
  const [files, setFiles] = useState('');

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

  const [nickname, setNickname] = useState<string>('');
  const [isDuplicateNickname, setIsDuplicateNickname] = useState<boolean>(false);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    setIsDuplicateNickname(false);
  }

  const checkPage1 = () => {
    //중복 확인 api 전송
    if (nickname === '석민') { // 중복일 경우
      setIsDuplicateNickname(true);
    } else {
      setCurrentPage(2);
    }
  }

  // 2페이지 관련 변수 및 함수
  const [teamName, setTeamName] = useState<string>('');

  const handleTeamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(event.target.value);
  }

  const checkPage2 = () => {
    // 팀명 전송 api
    if (teamName === '') {
      alert("팀명없음");
      setCurrentPage(3);
    } else {
      alert("팀명전송");
      setCurrentPage(3);
    }
  }

  // 3페이지 관련 변수 및 함수
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [otherRole, setOtherRole] = useState<string>('');
  // 그 외 직군 이라는 것이 포함되어 있으면 selectedRoles에서 그 외 직군을 빼고, otherRole을 추가
  const [selectedRolesForApi, setSelectedRolesForApi] = useState<string[]>([]);

  const handleSelectRoles = (selectedRoles: string[]) => {
    setSelectedRoles(selectedRoles);
  };

  const handleOtherRole = (otherRole: string) => {
    setOtherRole(otherRole);
  }

  const checkPage3 = () => {
    let array;
    if (selectedRoles.includes('그 외 직군')) {
      array = selectedRoles;
      array.splice(array.indexOf('그 외 직군'), 1);
      array.push(otherRole);
    } else {
      array = selectedRoles;
      if (array.includes(otherRole)) array.splice(array.indexOf(otherRole));
    }
    setSelectedRolesForApi(array);
    setCurrentPage(currentPage + 1);
  };

  // 4페이지 관련 변수 및 함수

  return (
    <>
      <BackNumberNavigationBar currentPage={currentPage} maxPage={8} setCurrentPage={setCurrentPage} />
      <PageContainer>
        {currentPage === 1 && (
          <>
            {/* 안내 문구 */}
            <div
              style={{
                ...fontStyles.heading2Medium, color: `${colors.textActive}`
                , marginTop: '16px', marginBottom: '48px'
              }}>
              <b style={{ color: `${colors.primary100}` }}>Greet &nbsp;</b>
              에서 사용할<br /> 닉네임을 입력해주세요.
            </div>
            {/* 프로필 사진 변경 */}
            <div style={{ position: 'relative', marginBottom: '63px' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={image} alt="" width='124px' height='124px'
                  style={{ objectFit: 'cover', borderRadius: '62px' }}></img>
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
                  ? '이미 사용중인 닉네임입니다.'
                  : '한글, 영어, 숫자만 가능해요. (특수문자 X)'
              }
              helpMessageColor={
                isDuplicateNickname
                  ? `${colors.negative}`
                  : `${colors.textMuted}`
              }
              border={
                isDuplicateNickname
                  ? `1px solid ${colors.negative}`
                  : ''
              }
            ></InputField>
            <Button
              disabled={nickname.length === 0}
              onClick={checkPage1}
            >다음</Button>
          </>
        )}
        {currentPage === 2 && (
          <>
            <div style={{
              ...fontStyles.heading2Medium, color: `${colors.textActive}`, marginTop: '16px'
            }}>
              혹시 소속된 팀이 있으신가요?
            </div>
            <div style={{
              ...fontStyles.subheadingRegular, color: `${colors.textDefault}`, marginTop: '4px',
              marginBottom: '31px'
            }}>
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
              helpMessage={'한글, 영어, 숫자만 가능해요. (특수문자 X)'
              }
            ></InputField>
            <Button
              disabled={false}
              onClick={checkPage2}
            >다음</Button>
          </>
        )}
        {currentPage === 3 && (
          <>
            <div style={{
              ...fontStyles.heading2Medium, color: `${colors.textActive}`, marginTop: '16px'
            }}>
              어떤 뮤지션으로 활동하세요?
            </div>
            <div style={{
              ...fontStyles.subheadingRegular, color: `${colors.textDefault}`, marginTop: '4px',
              marginBottom: '31px'
            }}>
              1개 이상 선택해주세요.
            </div>
            <Roles onSelectRoles={handleSelectRoles} otherRole={handleOtherRole} />
            <Button
              // 직군 선택 정책 검사 (1개 이상 선택했는지, 그 외 직군을 선택하고 공백으로 전송하지 않았는지)
              disabled={
                selectedRoles.length < 1 ||
                (selectedRoles.includes('그 외 직군') && otherRole === '')}
              onClick={checkPage3}
            >다음</Button>
          </>
        )}
        {currentPage === 4 && (
          <>
            <div style={{
              ...fontStyles.heading2Medium, color: `${colors.textActive}`, marginTop: '16px'
            }}>
              본인이 생각하는 수준을 선택해주세요.
            </div>
            <div style={{
              ...fontStyles.subheadingRegular, color: `${colors.textDefault}`, marginTop: '4px',
              marginBottom: '31px'
            }}>
              나중에 변경할 수 있어요.
            </div>
            {selectedRolesForApi.map((role, index) => (
              <div style={{marginBottom: '30px'}}>
              <SettingLevel key={index} labelNum={index+1} label={role} />
              </div>
            ))}
          </>
        )}

      </PageContainer >
    </>
  )
}


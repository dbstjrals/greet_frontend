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
import Roles from "../../components/Roles";
import SettingLevel from "../../components/SettingLevel";

export default function EditIntroduction() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [otherRole, setOtherRole] = useState<string>("");
  // 그 외 직군 이라는 것이 포함되어 있으면 selectedRoles에서 그 외 직군을 빼고, otherRole을 추가

  const handleSelectRoles = (selectedRoles: string[]) => {
    setSelectedRoles(selectedRoles);
  };

  const handleOtherRole = (otherRole: string) => {
    setOtherRole(otherRole);
  };

  const [roleLevel, setRoleLevel] = useState<{ role: string; level: number }[]>(
    []  
  );

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
  const [selectedRolesForApi, setSelectedRolesForApi] = useState<string[]>([]);

  return (
    <>
      <BackTextNavigationBar innerText="배경화면" />
      <div style={{ padding: "0 16px" }}>
        <h2
          style={{
            ...fontStyles.heading2Medium,
            color: `${colors.textActive}`,
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          분야
        </h2>
        <Roles onSelectRoles={handleSelectRoles} otherRole={handleOtherRole} />
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
          <Button
            disabled={!isPage4ButtonDisabled}
            // onClick={checkPage4}
          >
            다음
          </Button>
        </div>
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

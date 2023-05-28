import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface LevelProps {
  label: string;
  labelNum: number;
  level?: number;
  roleLevel: { role: string; level: number; }[];
  handleSettingLevel: (roleLevel: { role: string; level: number; }[], index: number, selectedLevel: number) => void;
}

const SettingLevel: FC<LevelProps> = ({
  label,
  labelNum,
  roleLevel,
  level,
  handleSettingLevel,
}: LevelProps) => {

  const [selectedLevel, setSelectedLevel] = useState<number>(level ? level : 0);

  return (
    <>
      <LabelDiv>{labelNum}.&nbsp;{label}</LabelDiv>
      <LevelboxContainer>
        <LevelboxWrapper
          onClick={() => {
            if (selectedLevel === 1) {
              handleSettingLevel(roleLevel, labelNum - 1, 0);
              setSelectedLevel(0);
            }
            else {
              handleSettingLevel(roleLevel, labelNum - 1, 1);
              setSelectedLevel(1);
            }
          }}
          style={{
            backgroundColor: selectedLevel === 1
              ? `${colors.primary100}`
              : '',
            color: selectedLevel === 1
              ? `${colors.grey00}`
              : '',
          }}
        >
          최근에 시작했어요
        </LevelboxWrapper>
        <LevelboxWrapper
          onClick={() => {
            if (selectedLevel === 2) {
              handleSettingLevel(roleLevel, labelNum - 1, 0);
              setSelectedLevel(0);
            }
            else {
              handleSettingLevel(roleLevel, labelNum - 1, 2);
              setSelectedLevel(2);
            }
          }}
          style={{
            backgroundColor: selectedLevel === 2
              ? `${colors.primary100}`
              : '',
            color: selectedLevel === 2
              ? `${colors.grey00}`
              : '',
          }}
        >열심히 하고 있어요</LevelboxWrapper>
        <LevelboxWrapper
          onClick={() => {
            if (selectedLevel === 3) {
              handleSettingLevel(roleLevel, labelNum - 1, 0);
              setSelectedLevel(0);
            }
            else {
              handleSettingLevel(roleLevel, labelNum - 1, 3);
              setSelectedLevel(3);
            }
          }}
          style={{
            backgroundColor: selectedLevel === 3
              ? `${colors.primary100}`
              : '',
            color: selectedLevel === 3
              ? `${colors.grey00}`
              : '',
          }}
        >자유자재로 해요</LevelboxWrapper>
      </LevelboxContainer>
    </>
  );
};

const LabelDiv = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 7px;
`

const LevelboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  justify-content: space-between;
`;

const LevelboxWrapper = styled.label`
  font-size: 12px;
  line-height: 46px;
  font-weight: 500;
  color: ${colors.textActive};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  background-color: ${colors.bgInput};
  border-radius: 8px;
  width: calc(33% - 5px);
  cursor: pointer;
`;


export default SettingLevel;
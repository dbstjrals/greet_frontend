import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface LevelProps {
  label: string;
  labelNum: number;
}

const SettingLevel: FC<LevelProps> = ({
  label,
  labelNum,
}: LevelProps) => {

  const [selectedLevel, setSelectedLevel] = useState<number>();

  return (
    <>
      <LabelDiv>{labelNum}.&nbsp;{label}</LabelDiv>
      <LevelboxContainer>
        <LevelboxWrapper
          onClick={() => {
            if (selectedLevel === 0)
              setSelectedLevel(undefined);
            else
              setSelectedLevel(0);
          }}
          style={{
            backgroundColor: selectedLevel === 0
              ? `${colors.primary100}`
              : '',
            color: selectedLevel === 0
            ? `${colors.grey00}`
            : '',
          }}
        >
          최근에 시작했어요
        </LevelboxWrapper>
        <LevelboxWrapper
          onClick={() => {
            if (selectedLevel === 1)
              setSelectedLevel(undefined);
            else
              setSelectedLevel(1);
          }}
          style={{
            backgroundColor: selectedLevel === 1
              ? `${colors.primary100}`
              : '',
            color: selectedLevel === 1
            ? `${colors.grey00}`
            : '',
          }}
        >열심히 하고 있어요</LevelboxWrapper>
        <LevelboxWrapper
          onClick={() => {
            if (selectedLevel === 2)
              setSelectedLevel(undefined);
            else
              setSelectedLevel(2);
          }}
          style={{
            backgroundColor: selectedLevel === 2
              ? `${colors.primary100}`
              : '',
            color: selectedLevel === 2
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
`

const LevelboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const LevelboxWrapper = styled.label`
  font-size: 12px;
  line-height: 46px;
  font-weight: 500;
  color: ${colors.textActive}
  display: flex;
  align-items: center;
  text-align: center;
  height: 46px;
  background-color: ${colors.bgInput};
  border-radius: 8px;
  width: calc(33% - 7px);
  cursor: pointer;
`;


export default SettingLevel;
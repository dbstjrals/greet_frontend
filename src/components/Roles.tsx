import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import InputField from './InputField';

interface RolesProps {
  onSelectRoles: (selectedRoles: string[]) => void;
  otherRole: (otherRole: string) => void;
}

const Roles: React.FC<RolesProps> = ({ onSelectRoles, otherRole }) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [otherRoles, setOtherRoles] = useState<string>('');

  const handleRoleChange = (role: string) => {
    const updatedRoles = [...selectedRoles];

    if (updatedRoles.includes(role)) {
      if (role === '그 외 직군') {
        setOtherRoles('');
        updatedRoles.splice(updatedRoles.indexOf(role), 1);
      } else {
        updatedRoles.splice(updatedRoles.indexOf(role), 1);
      }
    } else {
      updatedRoles.push(role);
    }

    setSelectedRoles(updatedRoles);
    onSelectRoles(updatedRoles);
  };

  const handleOtherRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOtherRoles = event.target.value;
    setOtherRoles(updatedOtherRoles);
    otherRole(updatedOtherRoles);
  }


  return (
    <div>
      <CheckboxContainer>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('작곡/편곡가')}
            onChange={() => handleRoleChange('작곡/편곡가')}
            style={{ display: selectedRoles.includes('작곡/편곡가') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('작곡/편곡가') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>작곡/편곡가</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('작사가')}
            onChange={() => handleRoleChange('작사가')}
            style={{ display: selectedRoles.includes('작사가') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('작사가') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>작사가</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('보컬리스트')}
            onChange={() => handleRoleChange('보컬리스트')}
            style={{ display: selectedRoles.includes('보컬리스트') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('보컬리스트') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>보컬리스트</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('베이시스트')}
            onChange={() => handleRoleChange('베이시스트')}
            style={{ display: selectedRoles.includes('베이시스트') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('베이시스트') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>베이시스트</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('기타리스트')}
            onChange={() => handleRoleChange('기타리스트')}
            style={{ display: selectedRoles.includes('기타리스트') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('기타리스트') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>기타리스트</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('싱어송라이터')}
            onChange={() => handleRoleChange('싱어송라이터')}
            style={{ display: selectedRoles.includes('싱어송라이터') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('싱어송라이터') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>싱어송라이터</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('드러머')}
            onChange={() => handleRoleChange('드러머')}
            style={{ display: selectedRoles.includes('드러머') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('드러머') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>드러머</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('래퍼')}
            onChange={() => handleRoleChange('래퍼')}
            style={{ display: selectedRoles.includes('래퍼') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('래퍼') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>래퍼</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('세션 연주가')}
            onChange={() => handleRoleChange('세션 연주가')}
            style={{ display: selectedRoles.includes('세션 연주가') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('세션 연주가') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>세션 연주가</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('디제이')}
            onChange={() => handleRoleChange('디제이')}
            style={{ display: selectedRoles.includes('디제이') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('디제이') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>디제이</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('음향 엔지니어')}
            onChange={() => handleRoleChange('음향 엔지니어')}
            style={{ display: selectedRoles.includes('음향 엔지니어') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('음향 엔지니어') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>음향 엔지니어</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('프로듀서')}
            onChange={() => handleRoleChange('프로듀서')}
            style={{ display: selectedRoles.includes('프로듀서') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('프로듀서') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>프로듀서</CheckboxText>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={selectedRoles.includes('그 외 직군')}
            onChange={() => handleRoleChange('그 외 직군')}
            style={{ display: selectedRoles.includes('그 외 직군') ? '' : 'none' }}
          />
          <MyCheckBox style={{ display: selectedRoles.includes('그 외 직군') ? 'none' : '' }}></MyCheckBox>
          <CheckboxText>그 외 직군</CheckboxText>
        </CheckboxWrapper>
      </CheckboxContainer>
      {selectedRoles.includes('그 외 직군')
        ? (
          <InputField
            type='role'
            marginBottom='183px'
            onChange={handleOtherRoleChange}
            placeholder='본인의 음악 유형을 입력해주세요.'
            value={otherRoles}
            helpMessage='한글, 영어, 숫자만 가능해요. (특수문자 X)'
            helpMessageColor={colors.textMuted}
            maxCount={10}
            maxLength={10}
            currentCount={otherRoles.length}
          />
        )
        : (
          <div style={{ height: '255px' }}></div>
        )
      }
    </div>
  );
};


const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  width: 50%; /* 두 개의 체크박스를 한 줄에 표시하기 위해 50%의 너비 설정 */
  cursor: pointer;
`;

// 선택된 체크박스
const CheckboxInput = styled.input`
  margin: 0px;
  accent-color: yellow;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  margin-right: 16px;
  border-radius: 4px;
`;

// 선택되지 않은 체크박스
const MyCheckBox = styled.span`
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  background-color: ${colors.bgInput};
  border: 1px ${colors.bgInputBorder} solid;
  border-radius: 4px;
  margin-right: 16px;
`

const CheckboxText = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
`;

export default Roles;

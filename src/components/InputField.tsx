import React from 'react';
import styled from 'styled-components';
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

interface InputProps {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  marginBottom: string;
  helpMessage?: string;
  helpMessageColor?: string;
  border?: string;
  readOnly?: boolean;
  maxCount?: number;
  currentCount?: number;
  hasError?: boolean; // 에러 메세지가 없는 입력 요소 일 경우 (false)
  maxLength?: number;
  isNecessary?: boolean;
}

interface LabelProps {
  htmlFor: string;
}

interface InputFieldProps extends InputProps {
  label?: string;
}

const Input = styled.input`
  display: block;
  width: 100%;
  height: 44px;
  padding: 10px 16px;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Pretendard';
  color: rgba(255, 255, 255, 0.95);
  line-height: 150%;
  border: 1px solid #3D3D3D;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #2B2B2B;
  &[type="password"] {
    font-size: 14px;
    font-weight: 900;
  };
  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.55);
  };
  &:focus {
    outline: none;
    border-color: ${colors.bgInputBorderFocus};
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  display: block;
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.75);
`;

const InputField: React.FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  placeholder,
  label,
  marginBottom,
  helpMessage,
  helpMessageColor,
  border,
  readOnly,
  maxCount,
  currentCount,
  hasError = true,
  maxLength,
  isNecessary = false,
}) => (
  <div style={{ marginBottom: marginBottom }}>
    <Label style={{display: label ? '' : 'none'}} htmlFor={label}>
      {label}
      <span style={{ display: isNecessary ? '' : 'none', color: `${colors.primary100}` }}>&nbsp;*</span>
    </Label>
    <Input
      style={{ border: border, opacity: readOnly ? '0.65' : '' }}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={label}
      autoComplete="off"
      readOnly={readOnly}
      maxLength={maxLength}
    />
    <div style={{ display: 'flex', height: hasError ? '30px' : '0px' }}>
      <div style={{
        ...fontStyles.caption1Regular, color: `${helpMessageColor}`, marginTop: '4px',
        height: '30px', lineHeight: '30px', display: helpMessage ? 'block' : 'none',
        flex: '8'
      }}>
        {helpMessage}
      </div>
      <div style={{
        marginTop: '4px', color: `${colors.textDefault}`, fontWeight: '500',
        fontSize: '12px', height: '30px', lineHeight: '30px', flex: '2', textAlign: 'end',
        display: typeof maxCount === 'number' && typeof currentCount === 'number' ? 'block' : 'none'
      }}>
        {currentCount}/{maxCount}
      </div>
    </div>
  </div>
);

export default InputField;
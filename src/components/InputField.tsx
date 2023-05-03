import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  marginBottom: string;
}

interface LabelProps {
  htmlFor: string;
}

interface InputFieldProps extends InputProps {
  label: string;
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
}) => (
  <div style={{ marginBottom: marginBottom }}>
    <Label htmlFor={label}>{label}</Label>
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={label}
      autoComplete="off"
    />
  </div>
);

export default InputField;
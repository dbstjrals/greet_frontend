// Module import
import styled from 'styled-components';
import React, { useState } from 'react';

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Components import
import PageContainer from '../components/PageContainer'
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function EmailLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const maskPassword = (password: string) => {
    return password.replace(/./g, '●');
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission here
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isFormValid = email !== '' && emailRegex.test(email) && password !== '';

  return (
    <PageContainer>
      <h1 style={{
        ...fontStyles.heading1Medium, paddingTop: '70px',
        marginBottom: '53px'
      }}>
        이메일과 비밀번호를<br />
        입력해주세요.
      </h1>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="이메일을 입력해주세요."
          label="이메일"
          marginBottom="20px"
        />
        <InputField
          type="password"
          value={maskPassword(password)}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해주세요."
          label="비밀번호"
          marginBottom="271px"
        />
        <div style={{
          ...fontStyles.caption1Medium, marginBottom: '40px', width: 'fit-content',
          color: `${colors.textDefault}`, cursor: 'pointer',
          marginLeft: 'auto', marginRight: 'auto'
        }}>
          혹시 비밀번호를 잊으셨나요?
        </div>
        <Button
          type='submit'
          onClick={() => console.log("Button clicked!")}
          disabled={!isFormValid}
        >
          로그인
        </Button>
      </form>
    </PageContainer>
  )
};
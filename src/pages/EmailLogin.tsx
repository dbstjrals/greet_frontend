// Module import
import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Components import
import PageContainer from '../components/PageContainer'
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function EmailLogin() {
  const navigate = useNavigate();
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState(true);

  // 이메일 입력 처리 함수
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setLoginStatus(true);
  };

  // 비밀번호 입력 처리 함수
  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
    setLoginStatus(true);
  };

  // 로그인 클릭 시
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // handle form submission here
    if (password !== 'todnxnlrla') {
      setLoginStatus(false);
    } else {
      alert('good');
    }
  };

  // 이메일 정규 표현식 검사
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isFormValid = email !== '' && emailRegex.test(email) && password.length >= 8;

  return (
    <PageContainer>
      <h1 style={{
        ...fontStyles.heading1Medium, paddingTop: '70px',
        marginBottom: '53px', color: `${colors.textActive}`
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
          hasError={false}
          border={!loginStatus ? `1px solid ${colors.negative}` : ''}
        />
        <InputField
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해주세요."
          border={!loginStatus ? `1px solid ${colors.negative}` : ''}
          helpMessage={!loginStatus ? '잘못된 이메일/비밀번호 입니다.' : ''}
          helpMessageColor={colors.negative}
          label="비밀번호"
          marginBottom="271px"
        />
        <div
          onClick={() => navigate('/forgot-password')}
          style={{
            ...fontStyles.caption1Medium, marginBottom: '40px', width: 'fit-content',
            color: `${colors.textDefault}`, cursor: 'pointer',
            marginLeft: 'auto', marginRight: 'auto'
          }}>
          혹시 비밀번호를 잊으셨나요?
        </div>
        <Button
          type='submit'
          disabled={!isFormValid}
        >
          로그인
        </Button>
      </form>
    </PageContainer>
  )
};
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
import BackTextNavigationBar from '../components/BackTextNavigationBar';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [emailAuthNum, setEmailAuthNum] = useState<string>('');
  const [emailCorrectAuthNum, setEmailCorrectAuthNum] = useState<string>('auth');
  
  // 인증번호가 올바르게 입력됐는지 저장
  const [isAuthNumRight, setIsAuthNumRight] = useState<boolean>();

  // 인증번호 확인 후 help message를 띄우고 인증번호란을 모두 비우면 help message를 끔
  const [showAuthHelpMessage, setShowAuthHelpMessage] = useState<boolean>(false);

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [checkAuthNumBtnDisable, setCheckAuthNumBtnDisable] = useState<boolean>(false);

  // 이메일 입력 처리 함수
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // 이메일 중복 확인 api 호출 함수
  const checkEmailVerify = () => {
    setEmailCheck(!emailCheck);
  }

  // 이메일 인증번호 입력 함수
  const handleEmailAuthNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAuthNum(event.target.value);
    if (event.target.value.length === 0) {
      setShowAuthHelpMessage(false);
      console.log(showAuthHelpMessage);
    }
  };

  // 이메일 인증번호 확인 함수
  const checkAuthNum = () => {
    if (emailAuthNum === emailCorrectAuthNum) {
      setIsAuthNumRight(true);
      setShowAuthHelpMessage(true);
      console.log("correct");
      setCheckAuthNumBtnDisable(true);
      return isAuthNumRight;
    }
    else {
      setIsAuthNumRight(false);
      setShowAuthHelpMessage(true);
      console.log("wrong");
      return isAuthNumRight;
    }
  }

  // 비밀번호 입력 처리 함수
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // 비밀번호 마스킹
  const maskPassword = (password: string) => {
    return password.replace(/./g, '●');
  }

  // 비밀번호 확인 입력 처리 함수
  const handlePasswordCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(event.target.value);
  }

  // 로그인 클릭 시
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission here
  };

  // 이메일 정규 표현식 검사
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = email !== '' && emailRegex.test(email);
  const isFormValid = email !== '' && emailRegex.test(email) && password !== '';

  return (
    <>
      <BackTextNavigationBar innerText='회원가입' />
      <PageContainer>
        <div style={{ marginTop: '30px' }}></div>
        <form onSubmit={handleSubmit}>
          <InputField
            type='email'
            value={email}
            label='이메일'
            marginBottom='16px'
            onChange={handleEmailChange}
            placeholder='이메일을 입력해주세요.'
            helpMessage='이메일 입력 후 이메일 중복 확인을 해주세요.'
            helpMessageColor={colors.textMuted}
            readOnly={checkAuthNumBtnDisable}
          />
          {!emailCheck ?
            <>
              <Button
                disabled={!isEmailValid}
                onClick={checkEmailVerify}
              >중복 확인</Button>
              <div style={{ height: '66px' }}></div>
            </>
            :
            <>
              <InputField
                type='string'
                value={emailAuthNum}
                label='이메일 인증번호'
                marginBottom={showAuthHelpMessage ? '20px' : '54px'}
                onChange={handleEmailAuthNumChange}
                placeholder='이메일로 보내진 인증번호를 입력해주세요.'
                helpMessage={!showAuthHelpMessage ? '' : isAuthNumRight ? '인증이 완료되었어요.' : '잘못된 인증번호입니다.'}
                helpMessageColor={!showAuthHelpMessage ? '' : isAuthNumRight ? '#43FF78' : `${colors.negative}`}
                border={!showAuthHelpMessage ? '' : isAuthNumRight ? '1px solid #43FF78' : `1px solid ${colors.negative}`}
                readOnly={checkAuthNumBtnDisable}
              />
              <Button
                disabled={checkAuthNumBtnDisable}
                onClick={() => checkAuthNum()}
              >인증번호 확인</Button>
              <div style={{ height: '66px' }}></div>
            </>
          }
          <InputField
            type='password'
            value={password}
            label='비밀번호'
            marginBottom='10px'
            onChange={handlePasswordChange}
            placeholder='비밀번호를 입력해주세요.'
            helpMessage='8-16자 한글, 영어, 숫자, 특수문자만 가능해요.'
            helpMessageColor={password.length < 8 ? colors.negative : colors.textMuted}
          // border={}
          />
          <InputField
            type='password'
            value={passwordCheck}
            label='비밀번호 확인'
            marginBottom='10px'
            onChange={handlePasswordChange}
            placeholder='비밀번호를 입력해주세요.'
            helpMessage='8-16자 한글, 영어, 숫자, 특수문자만 가능해요.'
            helpMessageColor={password.length < 8 ? colors.negative : colors.textMuted}
          // border={}
          />
        </form>

      </PageContainer>
    </>
  )
};
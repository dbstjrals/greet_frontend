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
import BackTextNavigationBar from '../components/BackTextNavigationBar';
import Popup from '../components/Popup';

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [emailAuthNum, setEmailAuthNum] = useState<string>('');
  const [emailCorrectAuthNum, setEmailCorrectAuthNum] = useState<string>('auth');

  const [showPopup, setShowPopup] = useState<boolean>(false);

  // 인증번호가 올바르게 입력됐는지 저장
  const [isAuthNumRight, setIsAuthNumRight] = useState<boolean>();

  // 인증번호 확인 후 help message를 띄우고 인증번호란을 모두 비우면 help message를 끔
  const [showAuthHelpMessage, setShowAuthHelpMessage] = useState<boolean>(false);

  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [isEmailDuplicated, setIsEmailDuplicated] = useState<boolean>(false);
  const [checkAuthNumBtnDisable, setCheckAuthNumBtnDisable] = useState<boolean>(false);

  // 이메일 입력 처리 함수
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsEmailDuplicated(false);
  };

  // 이메일 중복 확인 api 호출 함수
  const checkEmailVerify = () => {
    if (email === 'aa@aa.aa') {
      setIsEmailDuplicated(true);
    } else {
      // setEmailCheck(true);
      setShowPopup(true);
    }
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

  // 회원가입 클릭 시
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    alert("good");
    navigate('/onboarding', { replace: true });
    // handle button click event here
  }

  // 이메일 정규 표현식 검사
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = email !== '' && emailRegex.test(email);
  const isFormValid = email !== '' && emailRegex.test(email) && password !== '';

  return (
    <>
      <BackTextNavigationBar innerText='회원가입' />
      <PageContainer>
        {showPopup && (
          <Popup
            showPopup={showPopup}
            onClose={() => setShowPopup(false)}
            onAdmit={() => { setShowPopup(false); setEmailCheck(true); }}
            popupTitle='인증번호 전송'
            popupContent='입력한 이메일로 인증번호를 보냈습니다.'
          />)}
        <div style={{ marginTop: '30px' }}></div>
        <InputField
          type='email'
          value={email}
          label='이메일'
          marginBottom='16px'
          onChange={handleEmailChange}
          placeholder='이메일을 입력해주세요.'
          helpMessage={
            emailCheck ? '' :
              isEmailDuplicated ? '중복된 이메일 주소입니다.' :
                email.length === 0 ? '이메일 입력 후 이메일 중복 확인을 해주세요.' :
                  !emailRegex.test(email) ? '잘못된 유형의 이메일 주소입니다.'
                    : !isAuthNumRight ? '회원가입 진행을 위해 이메일 중복 확인을 해주세요.' :
                      ''}
          helpMessageColor={
            isEmailDuplicated ? `${colors.negative}` :
              email.length === 0 ? `${colors.textMuted}` :
                !emailRegex.test(email) ? `${colors.negative}`
                  : `${colors.textMuted}`}
          readOnly={checkAuthNumBtnDisable}
          border={
            email.length === 0 ? '' :
              isEmailDuplicated || !emailRegex.test(email) ?
                `1px solid ${colors.negative}` :
                isAuthNumRight && checkAuthNumBtnDisable ? '1px solid #43FF78' : ''
          }
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
              marginBottom='20px'
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
          helpMessage={
            !/^[a-zA-Z0-9!@#$%^&*()_+\-=]*$/.test(password) ?
              '사용할 수 없는 특수문자입니다.'
              : (password.length < 8 || password.length > 16) ?
                '8-16자 한글, 영어, 숫자, 특수문자만 가능해요.'
                : passwordCheck.length !== 0 ? ''
                  : '8-16자 한글, 영어, 숫자, 특수문자만 가능해요.'
          }
          helpMessageColor={
            !/^[a-zA-Z0-9!@#$%^&*()_+\-=]*$/.test(password) ||
              ((password.length !== 0) && (password.length < 8 || password.length > 16))
              ? colors.negative : colors.textMuted}
          border={
            !/^[a-zA-Z0-9!@#$%^&*()_+\-=]*$/.test(password)
              || ((password.length !== 0) && (password.length < 8 || password.length > 16))
              || ((password !== passwordCheck) && passwordCheck.length !== 0)
              ? `1px solid ${colors.negative}` : ''}
          maxLength={16}
          maxCount={password !== passwordCheck ? 16 : password.length === 0 ? 16 : undefined}
          currentCount={password.length as number}
        />
        <InputField
          type='password'
          value={passwordCheck}
          label='비밀번호 확인'
          marginBottom='10px'
          onChange={handlePasswordCheckChange}
          placeholder='비밀번호를 입력해주세요.'
          helpMessage={passwordCheck.length !== 0 && password !== passwordCheck ? '비밀번호가 일치하지 않습니다.' : ''}
          helpMessageColor={colors.negative}
          maxLength={16}
          border={passwordCheck.length !== 0 && password !== passwordCheck ? `1px solid ${colors.negative}` : ''}
        />
        <Button
          onClick={handleSubmit}
          disabled={
            !(/^[a-zA-Z0-9!@#$%^&*()_+\-=]*$/.test(password) &&
              (password.length >= 8 && password.length <= 16) &&
              password === passwordCheck)
          }
        >회원가입</Button>
      </PageContainer>
    </>
  )
};
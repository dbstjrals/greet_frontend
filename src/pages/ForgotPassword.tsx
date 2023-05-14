// Module import
import { useNavigate } from "react-router-dom";

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Components import
import PageContainer from '../components/PageContainer'
import InputField from "../components/InputField";
import { useState } from "react";
import Button from "../components/Button";

// Images import
import forgotPasswordEmailImage from "../images/forgotPasswordEmailImage.png"

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [message, setMessage] = useState<string>('임시 비밀번호를 보내드릴게요');
  const [email, setEmail] = useState<string>('');
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  // 이메일 입력 처리 함수
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // 임시 비밀번호 발송 api 호출
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert("good !");
    setMessage('임시 비밀번호를 보내드렸어요.');
    setIsEmailSent(true);
  }
  return (
    <PageContainer>
      {/* 안내 문구 */}
      <div
        style={{
          ...fontStyles.heading1Medium, color: `${colors.textActive}`
          , marginTop: '70px', marginBottom: '53px'
        }}>
        가입했던 이메일로 <br /> {message}
      </div>
      {/* 이메일 전송 이전 */}
      {!isEmailSent && (
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일을 입력해주세요."
            label="이메일"
            marginBottom="381px"
            helpMessage={
              email.length !== 0 && !emailRegex.test(email)
                ? '잘못된 유형의 이메일 주소입니다.'
                : ''
            }
            helpMessageColor={
              email.length !== 0 && !emailRegex.test(email)
                ? `${colors.negative}`
                : ''
            }
            border={
              email.length !== 0 && !emailRegex.test(email)
                ? `1px solid ${colors.negative}`
                : ''}
          />
          <Button
            type="submit"
            disabled={email.length === 0 || !emailRegex.test(email)}
          >확인</Button>
        </form>
      )}

      {/* 이메일 전송 이후 */}
      {isEmailSent && (
        <>
          {/* 이메일 이미지 */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '345px' }}>
            <img src={forgotPasswordEmailImage} alt="" width='139px'></img>
          </div>
          {/* 확인 버튼 -> 로그인 화면으로 이동 */}
          <Button
            disabled={!isEmailSent}
            onClick={() => navigate('/email-login')}
          >확인</Button>
        </>
      )}
    </PageContainer>
  )
}


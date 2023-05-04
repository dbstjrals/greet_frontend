// Module import
import { useNavigate } from "react-router-dom";

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Components import
import PageContainer from '../components/PageContainer'

// Images import
import loginLogo from '../images/loginLogo.svg';
import naverLogo from '../images/naverLogo.png';
import kakaoLogo from '../images/kakaoLogo.png';
import googleLogo from '../images/googleLogo.png';
import SocialLoginBtn from '../components/SocialLoginBtn';

export default function Login() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      {/* 로고 */}
      <img src={loginLogo} alt='Greet Logo'
        style={{ marginTop: '87px', marginBottom: '27.76px' }}>
      </img>

      {/* 캐치프레이즈 */}
      <div
        style={{
          ...fontStyles.heading1Medium, color: `${colors.textActive}`
          , marginBottom: '114px'
        }}>
        캐치프레이즈가 들어갈 자리 <br />입니다.
      </div>

      {/* 소셜 로그인 */}
      <SocialLoginBtn
        btnBgc="#FEE500"
        fontStyle={{ ...fontStyles.body1Semibold }}
        fontColor="#0D0D0D"
        logoSrc={kakaoLogo}
        logoHeight="17px"
        logoMargin="8px"
        loginSentence="카카오톡으로 시작하기"
        marginBottom="14px"
      />
      <SocialLoginBtn
        btnBgc="#03C75A"
        fontStyle={{ ...fontStyles.body1Semibold }}
        fontColor="#FFFFFF"
        logoSrc={naverLogo}
        logoHeight="22px"
        logoMargin="15px"
        loginSentence="네이버로 시작하기"
        marginBottom="14px"
      />
      <SocialLoginBtn
        btnBgc="#FFFFFF"
        fontStyle={{ ...fontStyles.body1Semibold }}
        fontColor="#0D0D0D"
        logoSrc={googleLogo}
        logoHeight="25px"
        logoMargin="14px"
        loginSentence="Google로 시작하기"
        marginBottom="30px"
      />

      {/* 로그인 및 회원가입 */}
      <div
        style={{
          ...fontStyles.caption1Medium, color: `${colors.textActive}`,
          textAlign: 'center'
        }}>
        <span
          style={{ padding: '0 14px', cursor: 'pointer' }}
          onClick={() => navigate('/email-login')}
        >로그인</span>
        |
        <span
          style={{ padding: '0 16px', cursor: 'pointer' }}
          onClick={() => navigate('/sign-up')}
        >다른 방법으로 회원가입</span>
      </div>

    </PageContainer>
  )
}


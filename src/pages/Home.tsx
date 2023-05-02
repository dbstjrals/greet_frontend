// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Components import
import PageContainer from '../components/PageContainer'

// Images import
import loginLogo from '../images/loginLogo.svg';

export default function Home() {
  return (
    <PageContainer>
      {/* 로고 */}
      <img src={loginLogo} alt='Greet Logo'
        style={{ marginTop: '87px', marginBottom: '27.76px' }}>
      </img>

      {/* 캐치프레이즈 */}
      <div
        style={{ ...fontStyles.heading1Medium, color: `${colors.textActive}` }}>
        캐치프레이즈가 들어갈 자리 <br />입니다.
      </div>

      {/* 소셜 로그인 */}
    </PageContainer>
  )
}


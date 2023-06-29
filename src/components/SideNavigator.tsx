// Module import
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Image import
import alertIcon from '../images/alertIcon.svg';
import hasAlertIcon from '../images/hasAlertIcon.svg'
import rightIcon from '../images/rightArrow.svg';
import defaultProfileImage from '../images/defaultProfileImage.png'

// Component import 
import PageContainer from './PageContainer';
import GradientProfileImage from './GradientProfileImage';

interface SideNavigatorProps {
  closeOnclick: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavigator: FC<SideNavigatorProps> = ({
  closeOnclick,
}: SideNavigatorProps) => {
  const navigate = useNavigate();
  const [hasAlert, setHasAlert] = useState<boolean>(true);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      onClick={() => {
        closeOnclick(false);
      }}
      style={{
        zIndex: '2', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}>
      <PageContainer style={{ position: 'relative' }}>
        <div
          onClick={(e) => {
            e.stopPropagation(); // 클릭 이벤트 버블링(stopPropagation)을 막습니다.
          }}
          style={{
            width: '79.49%', height: '100%', backgroundColor: "#101010", boxSizing: 'border-box',
            position: 'absolute', right: '0', zIndex: '3', padding: '30px 24px 0 24px'
          }}>
          {/* 알림 상단 */}
          <div
            onClick={() => navigate('/notification')}
            style={{
              display: 'flex', backgroundColor: `${colors.grey00}`, height: '32px', cursor: 'pointer',
              boxSizing: 'border-box', padding: '5px 5px 5px 10px', alignItems: 'center',
              borderRadius: '8px', justifyContent: 'space-between', marginBottom: '28px'
            }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={hasAlert ? hasAlertIcon : alertIcon} alt="알림"></img>
              <span style={{
                ...fontStyles.body1Medium, color: `${colors.textActive}`, marginLeft: '10px'
              }}>{hasAlert ? '알림이 있어요 !' : '알림'}</span>
            </div>
            <div>
              <img src={rightIcon} alt=">"></img>
            </div>

          </div>
          {/* 프로필 */}
          <div style={{
            height: '80px', display: 'flex', alignItems: 'center', marginBottom: '20px'
          }}>
            <div
              // onClick = {()=>navigate('프로필 수정')}
              style={{ cursor: 'pointer' }}>
              <GradientProfileImage
                gradientColor='135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%'
                userImage={defaultProfileImage}
                size={80}
              ></GradientProfileImage>
            </div>
            <div style={{
              marginLeft: '30px', height: '39px', display: 'flex', flexDirection: 'column'
            }}>
              <div style={{
                ...fontStyles.heading2Medium, color: `${colors.textActive}`, display: 'flex',
                marginBottom: '6px'
              }}>
                <span style={{ marginRight: '5px' }}>박세원님</span>
                <img
                  // onClick = {()=>navigate('프로필 수정')}
                  style={{
                    cursor: 'pointer'
                  }} src={rightIcon} alt=">"></img>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '500', color: `${colors.textDefault}` }}>
                <b style={{ marginRight: '2px', color: `${colors.primary100}`, fontWeight: '500' }}>
                  Greet</b>팀 소속
              </div>
            </div>
          </div>
          {/* 메뉴 리스트 */}
          <MenuWrapper
            onClick={() => {
              if (pathname === '/main') closeOnclick(true);
              else navigate('/main');
            }}>메인 홈</MenuWrapper>
          <MenuWrapper
            onClick={() => {
              if (pathname === '/member-list') closeOnclick(true);
              else navigate('/member-list');
            }}>멤버리스트</MenuWrapper>
          <MenuWrapper
            onClick={() => {
              if (pathname === '/post-board') closeOnclick(true);
              else navigate('/post-board');
            }}>게시판</MenuWrapper>
          <MenuWrapper>공지사항</MenuWrapper>
          <MenuWrapper>나의 Greet 리스트</MenuWrapper>
          <MenuWrapper>문의하기</MenuWrapper>
          <MenuWrapper>마이페이지</MenuWrapper>
        </div>
      </PageContainer >
    </div >
  );
};

export default SideNavigator;

const MenuWrapper = styled.div`
  height: 50px;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  color: rgba(255, 255, 255, 0.95);
  cursor: pointer;
`
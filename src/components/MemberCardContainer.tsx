// Module import
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

// Style import
import { colors } from '../styles/colors';
import { fontStyles } from '../styles/fontStyle';

// Image import
import greetingIcon from '../images/greetingIcon.png';

interface MemberCardContainerProps {
  userImage: string,
  userName: string,
  userCommentary: string,
  userInfo: string,
  userRoleLevel: { role: string, level: number }[];
  teamName?: string,
}

const MemberCardContainer: FC<MemberCardContainerProps> = ({
  userImage,
  userName,
  userCommentary,
  userInfo,
  userRoleLevel,
  teamName,
}: MemberCardContainerProps) => {
  return (
    <CardContainer>
      <div style={{ display: 'flex', height: '40px', flexWrap: 'wrap', marginBottom: '10px' }}>
        <ImageBorder>
          <UserImage style={{ backgroundImage: `url(${userImage})` }}></UserImage>
        </ImageBorder>
        <div style={{ flex: '14' }}></div>
        <div style={{ flex: '231', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', position: 'relative' }}>
            <div style={{
              fontSize: '16px', fontWeight: '700', color: `${colors.textActive}`, height: '17px',
              marginBottom: '8px'
            }}>
              {userName}
              <RoundTag style={{
                position: 'absolute', marginLeft: '5px', display: teamName ? '' : 'none',
                backgroundColor: `${colors.bgOnSurface}`, color: `${colors.textDefault}`
              }}>
                {teamName}</RoundTag>
            </div>
          </div>
          <div style={{
            fontSize: '14px', fontWeight: '600', color: `${colors.textActive}`, lineHeight: '13px'
          }}>{userCommentary}</div>
        </div>
        <div style={{ flex: '17' }}></div>
        <div style={{
          flex: '32', backgroundColor: '#2E2E2E', width: '32px', height: '32px',
          marginTop: 'auto', marginBottom: 'auto', borderRadius: '5.45px',
          minWidth: '32px', maxWidth: '32px', position: 'relative'
        }}>
          <img src={greetingIcon} alt='' width='16px' height='16px'
            style={{ position: 'absolute', top: '7.5px', left: '6.8px' }}
          ></img>
        </div>
      </div>
      <div style={{
        ...fontStyles.body3Regular, overflow: 'hidden', height: '35px', color: `${colors.textDefault}`
        , lineHeight: '19.2px', marginBottom: '12px'
      }}>{userInfo}</div>
      <div style={{ display: 'flex' }}>
        {userRoleLevel.map((item) => {
          const levelInText = item.level === 1 ? '최근에 시작했어요' :
            item.level === 2 ? '열심히 하고 있어요' : '자유자재로 해요'
          return (
            <div style={{
              display: 'inline-block', color: `${colors.primary100}`, fontSize: '12px', fontWeight: '400',
              lineHeight: '19.2px', marginRight: '8px'
            }}>
              <RoundTag style={{
                backgroundColor: `${colors.primary100}`, color: `${colors.textDarken}`, marginRight: '4px'
              }}>{item.role}</RoundTag>
              {levelInText}
            </div>
          )
        })}
      </div>
    </CardContainer >
  );
};


export default MemberCardContainer;

const CardContainer = styled.div`
  width: 100%;
  height: 139px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 12px;
  background-color: ${colors.grey00}
`
const ImageBorder = styled.div`
  flex: 40;
  position: relative;
  min-width: 40px;
  flex-grow: 0;  
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
  linear-gradient(135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  `
  // linear-gradient(to right, rgba(252,53,76,1), rgba(0,215,211,1));
const UserImage = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const RoundTag = styled.div`
  padding: 1px 8px;
  border-radius: 100px;
  display: inline-block;
  height: 18px;
  box-sizing: border-box;
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
`
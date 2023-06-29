// Module import
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

// Style import
import { colors } from '../styles/colors';
import { fontStyles } from '../styles/fontStyle';

// Image import
import greetingIcon from '../images/greetingIcon.png';
import likeIcon from '../images/likeIcon.svg';
import commentIcon from '../images/commentIcon.svg';
import viewIcon from '../images/viewIcon.svg';
import defaultPostThumbnail from '../images/defaultPostThumbnail.png';

// Component import
import GradientProfileImage from './GradientProfileImage';

interface PostContainerProps {
  userImage: string,
  userName: string,
  userColor: string,
  teamName?: string,
  postTag: string,
  postedDate: string,
  postThumbnail?: string,
  likeCount: number,
  commentCount: number,
  viewCount: number,
}

const PostContainer: FC<PostContainerProps> = ({
  userImage,
  userName,
  userColor,
  teamName,
  postTag,
  postedDate,
  postThumbnail,
  likeCount,
  commentCount,
  viewCount,
}: PostContainerProps) => {
  return (
    <PostWrapper>
      <div style={{
        height: '18px', display: 'flex', marginBottom: '9px', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <RoundTag style={{
          backgroundColor: `${colors.bgOnSurface}`, color: `${colors.textMuted}`
        }}>{postTag}</RoundTag>
        <span style={{
          fontSize: '10px', fontWeight: '400', color: `${colors.textMuted}`
        }}>{postedDate}</span>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{
          display: postThumbnail ? 'flex' : '', flexDirection: 'column',
          marginRight: postThumbnail ? '16px' : ''
        }}>
          <div style={{
            ...fontStyles.subheadingSemibold, height: '21px', display: 'flex', marginBottom: '4px', color: `${colors.textActive}`,
            lineHeight: '1.5'
          }}>개인 레슨 합니다</div>
          <div style={{
            ...fontStyles.body3Regular, height: '38px', display: 'flex', marginBottom: '17px', color: `${colors.textDefault}`,
            lineHeight: '19.2px', overflow: 'hidden'
          }}>개인 레슨합니다 개인 레슨합니다 개인 레슨합니다 개인 레슨합니다 개인 레슨합니다 개인 레슨합니다 개인 레슨합니다 개인 레슨합니다 ... 더보기</div>
        </div>
        <div style={{ display: postThumbnail ? '' : 'none', borderRadius: '5px' }}>
          <img src={postThumbnail} alt='썸네일' width='64px' height='64px'></img>
        </div>
      </div>
      <div style={{
        height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <GradientProfileImage
            userImage={userImage} gradientColor={userColor} size={26}
          ></GradientProfileImage>
          <span style={{
            ...fontStyles.subheadingMedium, color: `${colors.textActive}`,
            marginLeft: '10px', marginRight: '8px'
          }}>{userName}</span>
          <RoundTag style={{
            backgroundColor: `${colors.bgOnSurface}`, color: `${colors.textMuted}`, display: teamName ? '' : 'none'
          }}>{teamName}</RoundTag>
        </div>
        <div style={{ display: 'flex', gap: '8px', height: '19px' }}>
          <div style={{ ...fontStyles.caption1Regular, display: 'flex', alignItems: 'center', color: `${colors.textMuted}` }}>
            <img style={{ marginRight: '3px' }} src={likeIcon} alt='likeIcon'></img>
            <span>{likeCount}</span>
          </div>
          <div style={{ ...fontStyles.caption1Regular, display: 'flex', alignItems: 'center', color: `${colors.textMuted}` }}>
            <img style={{ marginRight: '3px' }} src={commentIcon} alt='likeIcon'></img>
            <span>{commentCount}</span>
          </div>
          <div style={{ ...fontStyles.caption1Regular, display: 'flex', alignItems: 'center', color: `${colors.textMuted}` }}>
            <img style={{ marginRight: '3px' }} src={viewIcon} alt='likeIcon'></img>
            <span>{viewCount}</span>
          </div>
        </div>
      </div>
    </PostWrapper>
  );
};


export default PostContainer;

const PostWrapper = styled.div`
  width: 100%;
  height: 170px;
  box-sizing: border-box;
  padding: 17px 16px 20px 16px;
  background-color: #101010;
  border-bottom: 1px solid #1F1F1F;
  display: flex;
  flex-direction: column;
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
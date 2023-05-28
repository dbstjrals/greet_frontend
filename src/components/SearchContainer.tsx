// Module import
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Image import
import backIcon from '../images/back.svg';
import searchIcon from '../images/searchIcon.svg';
import xIcon from '../images/xIcon.svg';

// Component import 
import PageContainer from './PageContainer';


interface SearchContainerProps {
  searchType: string,
  backOnClick: React.Dispatch<React.SetStateAction<boolean>>,
}

const SearchContainer: FC<SearchContainerProps> = ({
  searchType,
  backOnClick,
}: SearchContainerProps) => {

  const navigate = useNavigate();
  const [recentKeyword, setRecentKeyword] = useState<string[]>(['작곡', '힙합', '작곡', '힙합', '작곡']);
  const [recommendKeyword, setRecommendContainer] = useState<string[]>([
    '작곡/편곡가', '작사가', '보컬리스트', '래퍼', '베이시스트', '기타리스트', '싱어송라이터', '드러머'
    , '래퍼', '세션 연주가', '디제이', '음향 엔지니어', '프로듀서', '그 외 직군'
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDeleteMemberRecentKeywordOne = (index: number) => {
    const updatedKeywords = recentKeyword.filter((_, i) => i !== index);
    console.log(index);
    setRecentKeyword(updatedKeywords);
  };


  const handleDeleteMemberRecentKeywordAll = () => {
    setShowModal(false);
    setRecentKeyword([]);
    // 쿠키 내에 최근 검색어 지우기 (멤버 관련 최근 검색어만)
  };

  return (
    <PageContainer style={{ padding: '0', width: '100%' }}>
      <SearchBarContainer>
        <img
          src={backIcon}
          alt="<"
          width='24px' height='24px'
          style={{ cursor: 'pointer' }}
          onClick={() => backOnClick(true)}
        />
        <SearchInputWrapper>
          <img
            src={searchIcon}
            alt="검색"
            style={{ cursor: 'pointer', marginRight: '10px' }}
          />
          <SearchInput
            placeholder={searchType === '멤버' ? '뮤지션 종류나 장르를 검색해보세요.'
              : '게시물의 키워드를 입력해보세요.'
            }
          />
        </SearchInputWrapper>
      </SearchBarContainer>
      {searchType === '멤버' &&
        <>
          <RecentKeywordContainer>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{
                ...fontStyles.heading3Semibold, color: `${colors.textActive}`
              }}>최근 검색어</div>
              <div
                onClick={() => setShowModal(true)}
                style={{
                  ...fontStyles.subheadingRegular, color: `${colors.textDefault}`,
                  cursor: 'pointer'
                }}>모두 지우기</div>
            </div>

            {recentKeyword.length === 0 ?
              <div style={{
                ...fontStyles.subheadingRegular, color: `${colors.textDefault}`
              }}>
                최근 검색어가 없습니다.
              </div>
              :
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', width: '270px' }}>
                {recentKeyword.map((item, index) => {
                  return (
                    <RecentKewordTag>
                      <div
                        style={{ cursor: 'pointer' }}>
                        {item}
                      </div>
                      <img
                        onClick={() => handleDeleteMemberRecentKeywordOne(index)}
                        src={xIcon} alt="x"
                        style={{ cursor: 'pointer' }}
                      />
                    </RecentKewordTag>
                  )
                })}
              </div>
            }
          </RecentKeywordContainer>

          <RecommendKeywordContainer>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{
                ...fontStyles.heading3Semibold, color: `${colors.textActive}`
              }}>추천 검색어</div>
            </div>
            <div style={{
              display: 'flex', gap: '8px', flexWrap: 'wrap'
            }}>
              {recommendKeyword.map((item) => {
                return (
                  <RecommendKewordTag>{item}</RecommendKewordTag>
                )
              })}
            </div>
          </RecommendKeywordContainer>
        </>}
      {showModal &&
        <>
          <div style={{
            zIndex: '1', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}></div>
          <div style={{
            position: 'fixed', top: '36%', left: 'calc(50% - 170px)', boxSizing: 'border-box',
            backgroundColor: `${colors.bgOnSurface}`, width: '340px', height: '135px',
            paddingTop: '16px', borderRadius: '8px', zIndex: '2', textAlign: 'center'
          }}>
            <div style={{
              ...fontStyles.body1Bold, color: `${colors.textActive}`, marginBottom: '4px',
              height: '27px', lineHeight: '27px'
            }}>모두 지우기</div>
            <div style={{
              ...fontStyles.subheadingRegular, color: `${colors.textDefault}`, marginBottom: '20px'
              , lineHeight: '21px'
            }}>최근 검색어를 모두 지우시겠습니까?</div>
            <div style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              ...fontStyles.subheadingRegular, color: `${colors.textActive}`,
              width: '100%', borderTop: `1px solid ${colors.bgInputBorder}`,
              boxSizing: 'border-box'
            }}>
              <div
                onClick={() => setShowModal(false)}
                style={{
                  width: '50%', borderRight: `1px solid ${colors.bgInputBorder}`
                  , height: '47px', lineHeight: '47px', cursor: 'pointer'
                }}>취소</div>
              <div
                onClick={() => handleDeleteMemberRecentKeywordAll()}
                style={{
                  width: '50%', height: '47px', lineHeight: '47px', cursor: 'pointer'
                }}>확인</div>
            </div>
          </div>
        </>
      }
    </PageContainer>
  );
};

export default SearchContainer;

const SearchBarContainer = styled.div`
  display: flex;
  padding: 5px 16px 5px 9px;
  align-items: center;
  box-sizing: border-box;
  height: 44px;
  margin-bottom: 27px;
`
const SearchInputWrapper = styled.div`
  width: calc(100% - 36px);
  margin-left: 12px;
  height: 34px;
  padding: 0 21px 0 10px;
  box-sizing: border-box;
  background-color: rgba(46, 46, 46, 1);
  border-radius: 100px; 
  display: flex;
  align-items: center;
`
const SearchInput = styled.input`
  width: 100%;
  height: 21px;
  box-sizing: border-box;
  background-color: transparent;
  font-family: Pretendard;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(255, 255, 255, 0.95);
  &::placeholder{
    color: rgba(255, 255, 255, 0.55);
  };
`
const RecentKeywordContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  margin-bottom: 50px;
`
const RecentKewordTag = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  background-color: rgba(46, 46, 46, 1);
  padding: 6px 16px;
  box-sizing: border-box;
  border-radius: 100px;
  gap: 8px;
  align-items: center;
`

const RecommendKeywordContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`
const RecommendKewordTag = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  padding: 6px 16px;
  box-sizing: border-box;
  border-radius: 100px;
  border: 1px solid #7C7C7C;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
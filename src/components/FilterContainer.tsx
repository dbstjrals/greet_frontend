// Module import
import React, { FC, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Style import
import { fontStyles } from "../styles/fontStyle";
import { colors } from "../styles/colors";

// Image import
import backIcon from "../images/back.svg";
import filterIcon from "../images/filterIcon.svg";
import profileImage from "../images/defaultProfileImage.png";

// Component import
import PageContainer from "./PageContainer";
import Button from "./Button";
import SettingLevel from "./SettingLevel";
import MemberCardContainer from "./MemberCardContainer";

interface FilterContainerProps {
  backOnClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterContainer: FC<FilterContainerProps> = ({
  backOnClick,
}: FilterContainerProps) => {
  const navigate = useNavigate();
  const [filterKeyword, setFilterKeyword] = useState<string[]>([
    "작곡/편곡가",
    "작사가",
    "보컬리스트",
    "베이시스트",
    "기타리스트",
    "싱어송라이터",
    "드러머",
    "래퍼",
    "세션 연주가",
    "디제이",
    "음향 엔지니어",
    "프로듀서",
    "그 외 직군",
  ]);
  const [selectedFilterKeyword, setSelectedFilterKeyword] = useState<string[]>(
    []
  );

  const handleTagClick = (item: string) => {
    if (selectedFilterKeyword.includes(item)) {
      const updatedKeywords = selectedFilterKeyword.filter(
        (keyword) => keyword !== item
      );
      setSelectedFilterKeyword(updatedKeywords);
    } else {
      setSelectedFilterKeyword([...selectedFilterKeyword, item]);
    }
  };

  const handleFirstButtonClick = () => {
    let roleLevelArray: { role: string; level: number }[] = [];
    roleLevelArray = selectedFilterKeyword.map((role) => ({ role, level: 0 }));
    setRoleLevel(roleLevelArray);
    setFilterPageNum(1);
  };

  const [filterPageNum, setFilterPageNum] = useState<number>(0);
  const [roleLevel, setRoleLevel] = useState<{ role: string; level: number }[]>(
    []
  );

  const handleSettingLevel = (
    roleLevel: { role: string; level: number }[],
    index: number,
    selectedLevel: number
  ) => {
    const updatedArray = [...roleLevel];
    updatedArray[index] = { ...updatedArray[index], level: selectedLevel };
    setRoleLevel(updatedArray);
  };

  const handlePage3TagClick = (item: string) => {
    const index = roleLevel.findIndex((roleItem) => roleItem.role === item);
    if (index !== -1) {
      // role이 존재하는 경우
      roleLevel.splice(index, 1); // 해당 요소를 배열에서 삭제
    } else {
      // role이 존재하지 않는 경우
      roleLevel.push({ role: item, level: 0 }); // 새로운 요소를 배열에 추가
    }
    if (selectedFilterKeyword.includes(item)) {
      const updatedKeywords = selectedFilterKeyword.filter(
        (keyword) => keyword !== item
      );
      setSelectedFilterKeyword(updatedKeywords);
    } else {
      setSelectedFilterKeyword([...selectedFilterKeyword, item]);
    }
  };

  const filterSearchBtnDisable = roleLevel.every((item) => item.level !== 0);

  return (
    <PageContainer style={{ padding: "0", width: "100%" }}>
      {/* 상단 바 */}
      {filterPageNum === 0 && (
        <>
          <FilterBarContainer>
            <img
              src={backIcon}
              alt="<"
              width="24px"
              height="24px"
              style={{ cursor: "pointer", flex: "1" }}
              onClick={() => backOnClick(true)}
            />
            <div
              style={{
                ...fontStyles.heading3Semibold,
                color: `${colors.grey100}`,
                flex: "8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              필터로 검색
            </div>
            <div style={{ flex: "1" }}></div>
          </FilterBarContainer>
          {/* 뮤지션 종류 Container */}
          <MusicianFilterContainer>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                height: "27px",
                lineHeight: "27px",
                marginBottom: "4px",
              }}
            >
              찾고 싶은 뮤지션 종류를 선택해주세요.
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                height: "21px",
                lineHeight: "21px",
                marginBottom: "24px",
              }}
            >
              다중 선택 할 수 있어요.
            </div>
            <MusicianFilterWrapper>
              {filterKeyword.map((item) => {
                return (
                  <MusicianFilterTag
                    style={{
                      backgroundColor: selectedFilterKeyword.includes(item)
                        ? `${colors.primary100}`
                        : "",
                      color: selectedFilterKeyword.includes(item)
                        ? `${colors.textDarken}`
                        : "",
                      border: selectedFilterKeyword.includes(item)
                        ? `1px solid ${colors.primary100}`
                        : "",
                    }}
                    onClick={() => handleTagClick(item)}
                  >
                    {item}
                  </MusicianFilterTag>
                );
              })}
            </MusicianFilterWrapper>
            <Button
              disabled={selectedFilterKeyword.length === 0}
              onClick={handleFirstButtonClick}
            >
              다음
            </Button>
          </MusicianFilterContainer>
        </>
      )}

      {filterPageNum === 1 && (
        <>
          <FilterBarContainer>
            <img
              src={backIcon}
              alt="<"
              width="24px"
              height="24px"
              style={{ cursor: "pointer", flex: "1" }}
              onClick={() => setFilterPageNum(0)}
            />
            <div
              style={{
                ...fontStyles.heading3Semibold,
                color: `${colors.grey100}`,
                flex: "8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              필터로 검색
            </div>
            <div style={{ flex: "1" }}></div>
          </FilterBarContainer>
          <MusicianFilterContainer>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                height: "27px",
                lineHeight: "27px",
                marginBottom: "4px",
              }}
            >
              찾고 싶은 뮤지션의 수준을 선택해주세요.
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                height: "21px",
                lineHeight: "21px",
                marginBottom: "28px",
              }}
            >
              하나만 선택 할 수 있어요.
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ flexBasis: "542px" }}>
                {roleLevel.map((item, index) => (
                  <div style={{ marginBottom: "30px", zIndex: "" }}>
                    <SettingLevel
                      key={index}
                      labelNum={index + 1}
                      label={item.role}
                      level={item.level}
                      roleLevel={roleLevel}
                      handleSettingLevel={handleSettingLevel}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button
              disabled={!filterSearchBtnDisable}
              onClick={() => setFilterPageNum(2)}
            >
              확인
            </Button>
          </MusicianFilterContainer>
        </>
      )}

      {filterPageNum === 2 && (
        <>
          <FilterBarContainer>
            <img
              src={backIcon}
              alt="<"
              width="24px"
              height="24px"
              style={{ cursor: "pointer", flex: "1" }}
              onClick={() => backOnClick(true)}
            />
            <div
              style={{
                ...fontStyles.heading3Semibold,
                color: `${colors.grey100}`,
                flex: "8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              필터 결과
            </div>
            <img
              style={{ flex: "1", cursor: "pointer" }}
              src={filterIcon}
              alt="filter"
              width="24px"
              height="24px"
              onClick={() => setFilterPageNum(3)}
            ></img>
          </FilterBarContainer>
          {/* 필터 결과 멤버 카드 컴포넌트 리스트 */}
          <div
            style={{
              padding: "0 16px",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {/* 
            map 형식으로 멤버 cardContainer를 나열해야 하며, 
            카테고리 변경에 따라 나열 데이터를 바꿔야 함
          */}
            <MemberCardContainer
              userId={1}
              userImage={profileImage}
              userColor="135deg, #FFF626 0%, #FF9B26 51.04%, #FF4D26 100%"
              userName="POL"
              userCommentary="경험많은 힙합 래퍼 찾아요!"
              userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
              userRoleLevel={[{ role: "래퍼", level: 1 }]}
              isGreet={false}
            />
            <MemberCardContainer
              userId={2}
              userImage={profileImage}
              userColor="98.41deg, #5433FF 0%, #20BDFF 51.87%, #A5FECB 100%"
              userName="RAMA"
              userCommentary="경험많은 힙합 래퍼 찾아요!"
              userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
              userRoleLevel={[{ role: "래퍼", level: 1 }]}
              isGreet={false}
              teamName="딕키즈"
            />
            <MemberCardContainer
              userId={3}
              userImage={profileImage}
              userColor="98.41deg, #FC354C 0%, #00D7D3 100%"
              userName="샤로캣"
              userCommentary="경험많은 힙합 래퍼 찾아요!"
              userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
              userRoleLevel={[
                { role: "래퍼", level: 2 },
                { role: "작곡/편곡가", level: 2 },
              ]}
              isGreet={false}
            />
            <MemberCardContainer
              userId={4}
              userImage={profileImage}
              userColor="98.41deg, #00B09B 0%, #96C93D 100%"
              userName="로켓"
              teamName="키프 클랜"
              userCommentary="경험많은 힙합 래퍼 찾아요!"
              userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
              userRoleLevel={[
                { role: "래퍼", level: 3 },
                { role: "디제이", level: 2 },
              ]}
              isGreet={false}
            />
            <MemberCardContainer
              userId={5}
              userImage={profileImage}
              userColor="98.41deg, #FFF626 0%, #FF6726 52.29%, #FF2674 100%"
              userName="빙빙"
              userCommentary="경험많은 힙합 래퍼 찾아요!"
              userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
              userRoleLevel={[{ role: "래퍼", level: 3 }]}
              isGreet={false}
            />
          </div>
          <div style={{ height: "25px" }}></div>
        </>
      )}

      {filterPageNum === 3 && (
        <>
          <FilterBarContainer>
            <img
              src={backIcon}
              alt="<"
              width="24px"
              height="24px"
              style={{ cursor: "pointer", flex: "1" }}
              onClick={() => setFilterPageNum(2)}
            />
            <div
              style={{
                ...fontStyles.heading3Semibold,
                color: `${colors.grey100}`,
                flex: "8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              필터로 검색
            </div>
            <div style={{ flex: "1" }}></div>
          </FilterBarContainer>
          <MusicianFilterContainer>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                height: "27px",
                lineHeight: "27px",
                marginBottom: "4px",
              }}
            >
              찾고 싶은 뮤지션 종류를 선택해주세요.
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                height: "21px",
                lineHeight: "21px",
                marginBottom: "24px",
              }}
            >
              다중 선택 할 수 있어요.
            </div>
            <MusicianFilterWrapper style={{ marginBottom: "60px" }}>
              {filterKeyword.map((item) => {
                return (
                  <MusicianFilterTag
                    style={{
                      backgroundColor: selectedFilterKeyword.includes(item)
                        ? `${colors.primary100}`
                        : "",
                      color: selectedFilterKeyword.includes(item)
                        ? `${colors.textDarken}`
                        : "",
                      border: selectedFilterKeyword.includes(item)
                        ? `1px solid ${colors.primary100}`
                        : "",
                    }}
                    onClick={() => handlePage3TagClick(item)}
                  >
                    {item}
                  </MusicianFilterTag>
                );
              })}
            </MusicianFilterWrapper>
            <div
              style={{
                ...fontStyles.heading2Medium,
                color: `${colors.textActive}`,
                height: "27px",
                lineHeight: "27px",
                marginBottom: "4px",
              }}
            >
              찾고 싶은 뮤지션의 수준을 선택해주세요.
            </div>
            <div
              style={{
                ...fontStyles.subheadingRegular,
                color: `${colors.textDefault}`,
                height: "21px",
                lineHeight: "21px",
                marginBottom: "28px",
              }}
            >
              하나만 선택 할 수 있어요.
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ flexBasis: "329px" }}>
                {roleLevel.map((item, index) => (
                  <div style={{ marginBottom: "30px", zIndex: "" }}>
                    <SettingLevel
                      key={index}
                      labelNum={index + 1}
                      label={item.role}
                      level={item.level}
                      roleLevel={roleLevel}
                      handleSettingLevel={handleSettingLevel}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button
              disabled={!filterSearchBtnDisable}
              onClick={() => setFilterPageNum(2)}
            >
              확인
            </Button>
          </MusicianFilterContainer>
        </>
      )}
    </PageContainer>
  );
};

export default FilterContainer;

const FilterBarContainer = styled.div`
  display: flex;
  padding: 5px 16px 5px 9px;
  align-items: center;
  box-sizing: border-box;
  height: 44px;
  margin-bottom: 16px;
`;
const MusicianFilterContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  margin-bottom: 390px;
`;
const MusicianFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 390px;
`;
const MusicianFilterTag = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  padding: 6px 16px;
  height: 33px;
  box-sizing: border-box;
  border-radius: 100px;
  border: 1px solid #7c7c7c;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const FilterResultContainer = styled.div``;

// Module import
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FC, useState } from "react";

// Style import
import { colors } from "../../styles/colors";
import { fontStyles } from "../../styles/fontStyle";

// Image import
import backIcon from "../../images/back.svg";
import greetIcon from "../../images/greetingIconSmall.svg";
import profileImage from "../../images/defaultProfileImage.png";

// Component import
import MemberCardContainer from "../../components/MemberCardContainer";

export default function EditMyGreetList() {
  const navigate = useNavigate();
  return (
    <>
      <header
        style={{
          display: "flex",
          height: "44px",
          marginBottom: "20px",
        }}
      >
        <img
          src={backIcon}
          alt="뒤로 가기"
          onClick={() => navigate(-1)}
          style={{ marginLeft: "8px", flex: "32", cursor: "pointer" }}
          width="24px"
        ></img>
        <div
          style={{
            position: "relative",
            ...fontStyles.heading3Semibold,
            flex: "326",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: `${colors.textActive}`,
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "12px",
              left: "calc(50% - 80px)",
            }}
            width={"16px"}
            height={"16px"}
            src={greetIcon}
            alt="그릿 아이콘"
          />
          <span>나의 Greet 리스트</span>
        </div>
        <div style={{ marginRight: "8px", flex: "32" }}></div>
      </header>
      <div
        style={{
          padding: "0 16px",
          marginBottom: "23px",
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
          isGreet={true}
        />
        <MemberCardContainer
          userId={2}
          userImage={profileImage}
          userColor="98.41deg, #5433FF 0%, #20BDFF 51.87%, #A5FECB 100%"
          userName="Rama"
          userCommentary="경험많은 힙합 래퍼 찾아요!"
          userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
          userRoleLevel={[{ role: "래퍼", level: 1 }]}
          isGreet={true}
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
          isGreet={true}
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
          isGreet={true}
        />
        <MemberCardContainer
          userId={5}
          userImage={profileImage}
          userColor="98.41deg, #FFF626 0%, #FF6726 52.29%, #FF2674 100%"
          userName="빙빙"
          userCommentary="경험많은 힙합 래퍼 찾아요!"
          userInfo="OOO앨범에 OOO로 참여한 적 있고, OOOO프로그램에 OO로 방송 출연한 적 있습니다! OOO앨범에 OOO로 참여한 적 있고 OOOO... 더보기"
          userRoleLevel={[{ role: "래퍼", level: 3 }]}
          isGreet={true}
        />
      </div>
    </>
  );
}

// Module import
import styled from "styled-components";
import { FC, useState } from "react";

// Style import
import { colors } from "../../styles/colors";
import { fontStyles } from "../../styles/fontStyle";

// Image import

// Component import
import BackTextNavigationBar from "../../components/BackTextNavigationBar";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

export default function EditContact() {
  const [openChatLink, setOpenChatLink] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [instagramId, setInstagramId] = useState<string>("");

  const handleOpenChatLinkChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOpenChatLink(event.target.value);
  };
  const handleContactEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactEmail(event.target.value);
  };
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };
  const handleInstagramIdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInstagramId(event.target.value);
  };

  return (
    <>
      <BackTextNavigationBar innerText="나의 연락수단" />
      <div style={{ padding: "0 16px" }}>
        <div
          style={{
            ...fontStyles.heading2Medium,
            color: `${colors.textActive}`,
            marginTop: "16px",
            marginBottom: "30px",
          }}
        >
          최소 1개 이상의 연락수단을
          <br />
          입력해주세요.
        </div>
        <InputField
          type="link"
          value={openChatLink}
          onChange={handleOpenChatLinkChange}
          placeholder="카카오톡 오픈채팅방을 만들고 링크를 입력해주세요."
          label="오픈채팅방 링크"
          marginBottom="0px"
        ></InputField>
        <InputField
          type="email"
          value={contactEmail}
          onChange={handleContactEmailChange}
          placeholder="ex) greet@gmail.com"
          label="이메일"
          marginBottom="0px"
        ></InputField>
        <InputField
          type="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="010-0000-0000"
          label="전화번호"
          marginBottom="0px"
        ></InputField>
        <InputField
          type="id"
          value={instagramId}
          onChange={handleInstagramIdChange}
          placeholder="ID"
          label="인스타그램 ID"
          marginBottom="143px"
        ></InputField>
        <Button
          children="확인"
          disabled={false}
          onClick={() => alert("수정 완료")}
        />
      </div>
    </>
  );
}

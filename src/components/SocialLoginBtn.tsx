import React, { FC, ReactElement } from "react";

interface SocialLoginBtnProps {
  btnBgc: string;
  fontStyle: object;
  fontColor: string;
  logoSrc: string;
  logoHeight: string;
  logoMargin: string;
  loginSentence: string;
  marginBottom: string;
}

const SocialLoginBtn: FC<SocialLoginBtnProps> = ({
  btnBgc,
  fontStyle,
  fontColor,
  logoSrc,
  logoHeight,
  logoMargin,
  loginSentence,
  marginBottom,
}): ReactElement => {
  return (
    <div
      style={{
        ...fontStyle,
        width: "100%",
        height: "45px",
        borderRadius: "6px",
        backgroundColor: btnBgc,
        color: fontColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: `${marginBottom}`,
        cursor: "pointer"
      }}
    >
      <img
        src={logoSrc}
        alt="소셜 로그인 버튼"
        height={logoHeight}
        style={{ marginRight: `${logoMargin}` }}
      ></img>
      {loginSentence}
    </div>
  );
};

export default SocialLoginBtn;
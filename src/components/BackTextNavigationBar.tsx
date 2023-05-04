// Module import
import React, { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

// Style import
import { fontStyles } from '../styles/fontStyle';
import { colors } from '../styles/colors';

// Image import
import back from '../images/back.svg';

interface NavigationProps {
  innerText: string;
}

const BackTextNavigationBar: FC<NavigationProps> = ({
  innerText,
}: NavigationProps) => {

  const navigate = useNavigate();

  return (
    <StyledNavigation
      innerText={innerText}
    >
      <img src={back} alt='뒤로 가기' onClick={() => navigate(-1)}
        style={{ marginLeft: '8px', flex: '32' }} width='24px'
      ></img>
      <h1 style={{
        ...fontStyles.heading3Semibold, flex: '326', display: 'flex',
        justifyContent: 'center', alignItems: 'center', color: `${colors.grey100}`
      }}>{innerText}</h1>
      <div style={{ marginRight: '8px', flex: '32' }}></div>
    </StyledNavigation>
  );
};



const StyledNavigation = styled.div<NavigationProps>`
  width: 100%;
  max-width: 500px;
  height: 44px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export default BackTextNavigationBar;
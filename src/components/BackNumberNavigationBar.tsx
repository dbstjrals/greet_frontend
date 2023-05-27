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
  maxPage: number,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const BackNumberNavigationBar: FC<NavigationProps> = ({
  maxPage,
  currentPage,
  setCurrentPage,
}: NavigationProps) => {

  const navigate = useNavigate();

  return (
    <StyledNavigation>
      <div style={{ flex: '1', display: 'flex', marginLeft: '9px', justifyContent: 'left' }}>
        <img
          src={back}
          alt='뒤로 가기'
          onClick={() => {
            if (currentPage === 1) {
              navigate(-1);
            }
            else {
              setCurrentPage(currentPage-1);
            }
          }}
          width='24px'
          style={{ cursor: 'pointer' }}
        ></img>
      </div>
      <div style={{
        ...fontStyles.subheadingRegular, color: `${colors.textActive}`, flex: '1',
        display: 'flex', justifyContent: 'end', alignItems: 'center', marginRight: '14px'
      }}>{currentPage}/{maxPage}</div>
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

export default BackNumberNavigationBar;
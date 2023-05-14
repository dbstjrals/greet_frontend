import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface PopupProps {
  showPopup: boolean;
  onClose: () => void;
  onAdmit: () => void;
  popupTitle: string;
  popupContent: string;
}

interface PopupContainerProps {
  showPopup: boolean;
}

const Popup: FC<PopupProps> = ({
  showPopup,
  onClose,
  onAdmit,
  popupTitle,
  popupContent,
}: PopupProps) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div style={{
        position: 'absolute', borderRadius: '6px', margin: '0',
        maxWidth: '450px', width: 'calc(100% - 50px)', left: '50%', height: '135px', top: '50%',
        transform: 'translate(-50%, -50%)', backgroundColor: `${colors.bgInput}`,
      }}>
        <div style={{
          height: '88px', border: '6px', display: 'flex', justifyContent: 'center',
          alignItems: 'center', flexDirection: 'column'
        }}>
          <span style={{
            color: `${colors.textActive}`, height: '27px', fontSize: '16px', fontWeight: '700',
            lineHeight: '150%', marginBottom: '4px'
          }}>
            {popupTitle}
          </span>
          <span style={{
            color: 'rgba(255,255,255,0.70)', fontSize: '14px', fontWeight: '400', lineHeight: '150%'
          }}>
            {popupContent}
          </span>
        </div>
        <div

          style={{
            height: '47px', borderTop: `1px solid ${colors.bgInputBorder}`,
            fontSize: '14px', fontWeight: '500', color: `${colors.textDefault}`, display: 'flex',
            justifyContent: 'center', alignItems: 'center'
          }}
        >
          <div
            onClick={onClose}
            style={{
              flex: '1', borderRight: `1px solid ${colors.bgInputBorder}`, height: '47px',
              display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'
            }}>
            취소
          </div>
          <div
            onClick={onAdmit}
            style={{
              flex: '1', borderRight: `1px solid ${colors.bgInputBorder}`, height: '47px',
              display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'
            }}>
            확인
          </div>
        </div>
      </div>
    </div >
  );
};


const PopupContainer = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 40%;
  left: 10%;
  width: 80%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
`;

const PopupContent = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 24px;
`;

export default Popup;
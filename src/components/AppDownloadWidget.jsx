import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar, FaApple, FaGooglePlay, FaTimes } from 'react-icons/fa';

const WidgetWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: transparent;
  font-family: 'Inter', sans-serif;
  z-index: 1000;
  width: 320px;
  animation: slideUp 0.5s ease-out;
  filter: drop-shadow(0 4px 20px rgba(0,0,0,0.15));

  @keyframes slideUp {
    from { transform: translateY(100px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @media (max-width: 768px) {
    display: none; 
  }
`;

const Header = styled.div`
  background: #FF4F6C;
  color: white;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: fit-content;
  position: relative;
  top: 1px; /* Overlap slightly to avoid gap */
  z-index: 2;
`;

const Content = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  position: relative;
  background: white;
  border-radius: 12px;
  border-top-left-radius: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  
  &:hover {
    color: #333;
  }
`;

const QrSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const QrImage = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid #eee;
  padding: 4px;
`;

const ScanText = styled.span`
  font-size: 12px;
  color: #555;
`;

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 12px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: #FFB400;
    font-size: 12px;
  }
`;

const StatLabel = styled.div`
  font-size: 11px;
  color: #888;
`;

const StoreIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  span {
    font-size: 12px;
    color: #888;
  }

  svg {
    font-size: 18px;
    color: #555;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #00A5EC;
    }
  }
`;

const AppDownloadWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <WidgetWrapper>
      <Header>Download the App!</Header>
      <Content>
        <CloseButton onClick={() => setIsVisible(false)}><FaTimes /></CloseButton>

        <QrSide>
          <QrImage src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=InternshalaApp" alt="QR Code" />
          <ScanText>Scan the QR</ScanText>
        </QrSide>

        <InfoSide>
          <StatsRow>
            <StatItem>
              <StatValue>4.2 <FaStar /></StatValue>
              <StatLabel>39K Reviews</StatLabel>
            </StatItem>
            <div style={{ width: 1, height: 20, background: '#eee' }}></div>
            <StatItem>
              <StatValue>50L+ <span style={{ fontSize: 12 }}>⬇</span></StatValue>
              <StatLabel>Downloads</StatLabel>
            </StatItem>
          </StatsRow>

          <StoreIcons>
            <span>Available on</span>
            <FaApple title="App Store" />
            <FaGooglePlay title="Play Store" style={{ color: '#00d09c' }} />
          </StoreIcons>
        </InfoSide>
      </Content>
    </WidgetWrapper>
  );
};

export default AppDownloadWidget;

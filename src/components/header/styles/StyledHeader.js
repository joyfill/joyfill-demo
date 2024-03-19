import styled from 'styled-components';

// Styled component for the header container
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 20px 30px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#1E1E1F' : '#fcfcfc')}; // Background color based on theme
  border-bottom: 3px solid ${({ theme }) => (theme === 'dark' ? '#4a4a4b' : '#e2e2e2')}; // Border color based on theme
`;

// Styled component for the left container within the header
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#353535')}; // Text color based on theme
  font-size: 13px;
`;

// Styled component for the information container
export const InfoContainer = styled.div`
  display: flex;
  gap: 12px;
  font-size: 12px;
  height: 20px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => (theme === 'dark' ? '#d2d2d2' : '#8e8e8f')}; // Text color based on theme
`;

// Styled component for document information
export const InfoDoc = styled.div`
  font-size: 16px;
  font-weight: 200;
`;

// Styled component for button action container
export const ButtonActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 20px;
`;

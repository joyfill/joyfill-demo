import styled, { keyframes } from 'styled-components';

// Keyframe animation for fading in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for dropdown container
export const Dropdown = styled.div`
  width: 100px;
  margin: 100px auto;
  position: relative;
  user-select: none;
  z-index: 7; 
`;

// Styled component for dropdown button
export const DropdownButton = styled.div`
  margin: 15px 30px 15px 10px;
  font-weight: 100;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#353535')};
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 5px;
`;

// Styled component for dropdown content
export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  padding: 10px;
  background: ${({ theme }) => (theme === 'dark' ? '#1E1E1F' : '#fcfcfc')};
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 100;
  color: ${({ theme }) => (theme === 'dark' ? '#d2d2d2' : '#8e8e8f')};
  width: 70px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => (theme === 'dark' ? '#4a4a4b' : '#e2e2e2')};
  animation: ${fadeIn} 0.3s ease-in-out; // Applying fadeIn animation
`;

// Styled component for dropdown item
export const DropdownItem = styled.div`
  display: flex; 
  align-items: center; 
  gap: 15px; 
  height: 20px;
  padding: 5px;
  cursor: pointer;
  font-size: 11px;
  transition: all 0.2s;
  color: ${({ theme }) => (theme === 'dark' ? '#d2d2d2' : '#8e8e8f')};

  &:hover {
    color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#353535')};
    background: ${({ theme }) => (theme === 'dark' ? '#4a4a4b' : '#e2e2e2')};
    border-radius: 5px;
  }
`;

// Styled icon component
export const StyledIcon = styled.div`
`;

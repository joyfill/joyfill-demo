import styled from 'styled-components';
import * as PiIcons from 'react-icons/pi';

/* Sidebar Container */
export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 15px;
  box-sizing: border-box;
  border-right: 2px solid ${(props) => {
    switch (props.theme) {
      case 'dark':
        return '#4a4a4b'; // Dark theme border color
      case 'brand':
        return '#fb8d21'; // Brand theme border color
      default:
        return '#e2e2e2'; // Light theme border color
    }
  }};
  background-color: ${(props) => {
    switch (props.theme) {
      case 'dark':
        return '#1E1E1F'; // Dark theme background color
      case 'brand':
        return '#e57b0f'; // Brand theme background color
      default:
        return '#ffffff'; // Light theme background color
    }
  }};
`;

/* Sidebar Header */
export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

/* Product Name */
export const ProductName = styled.p`
  color: ${(props) => {
    switch (props.theme) {
      case 'dark':
        return 'white'; // Dark theme product name color
      case 'brand':
        return 'white'; // Brand theme product name color
      default:
        return '#212121'; // Light theme product name color
    }
  }};
  font-size: 15px;
`;

/* Sidebar Icon */
export const SidebarIcon = styled(PiIcons.PiCloudFill)`
  margin: 10px 0;
  padding-right: 10px;
  color: ${(props) => {
    switch (props.theme) {
      case 'dark':
        return '#3568cd'; // Dark theme sidebar icon color
      case 'brand':
        return '#fad30e'; // Brand theme sidebar icon color
      default:
        return '#2764d5'; // Light theme sidebar icon color
    }
  }};
`;

/* Sub Header */
export const SubHeader = styled.div`
  font-weight: 100;
  opacity: 1;
  transition: opacity 1s linear;
  font-size: 15px;
  margin-left: 10px;
  text-align: left;
  color: ${(props) => {
    switch (props.theme) {
      case 'dark':
        return '#53545d'; // Dark theme sub header color
      case 'brand':
        return '#ffc487'; // Brand theme sub header color
      default:
        return '#818188'; // Light theme sub header color
    }
  }};
`;

/* Sidebar List Container */
export const SidebarListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2rem 0rem;
  font-size: 15px;
  font-weight: 200;
  cursor: pointer;
`;

/* Sidebar List Item */
export const SidebarListItem = styled.div`
  color: ${(props) => {
    switch (props.theme) {
      case 'dark':
        return '#6f6f71'; // Dark theme sidebar list item color
      case 'brand':
        return '#fee2bb'; // Brand theme sidebar list item color
      default:
        return '#a0a1a4'; // Light theme sidebar list item color
    }
  }};
  border-radius: 7px;
  font-size: 13px;
  display: flex;
  padding: 10px 10px;
  align-items: center;
  cursor: pointer;
  gap: 15px;
  transition: background-color 0.3s ease, color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => {
      switch (props.theme) {
        case 'dark':
          return '#2b2d38'; // Dark theme sidebar list item hover background color
        case 'brand':
          return '#ffffff'; // Brand theme sidebar list item hover background color
        default:
          return '#2764d5'; // Light theme sidebar list item hover background color
      }
    }};
    color: ${(props) => {
      switch (props.theme) {
        case 'dark':
          return '#4b79d3'; // Dark theme sidebar list item hover text color
        case 'brand':
          return '#fa980e'; // Brand theme sidebar list item hover text color
        default:
          return '#ffffff'; // Light theme sidebar list item hover text color
      }
    }};
  }

  &.active-l {
    color: ${(props) => {
      switch (props.theme) {
        case 'dark':
          return '#3568cd'; // Dark theme sidebar list item active text color
        case 'brand':
          return '#fa980e'; // Brand theme sidebar list item active text color
        default:
          return '#ffffff'; // Light theme sidebar list item active text color
      }
    }};
    background-color: ${(props) => {
      switch (props.theme) {
        case 'dark':
          return '#2b2d38'; // Dark theme sidebar list item active background color
        case 'brand':
          return '#ffffff'; // Brand theme sidebar list item active background color
        default:
          return '#2764d5'; // Light theme sidebar list item active background color
      }
    }};
  }
`;

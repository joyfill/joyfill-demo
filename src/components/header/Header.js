import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import { Divider } from '@mui/material';
import ToggleMode from './ToggleMode';
import ToggleTheme from './ToggleTheme';

// Import styled components for Header styling
import {
  HeaderContainer,
  LeftContainer,
  InfoContainer,
  ButtonActionContainer,
  InfoDoc
} from './styles/StyledHeader';

const Header = () => {
  const { theme, mode, name } = useContext(ThemeContext);

  return (
    <HeaderContainer theme={theme}>
      {/* Left container with document/template information */}
      <LeftContainer theme={theme}>
        {/* Info container */}
        <InfoContainer>
          <InfoDoc>
          <p>{mode === 'fill' ? 'Document' : 'Template'}</p>
          </InfoDoc>
          <Divider
            color={theme === 'dark' ? '#d2d2d2' : '#a8a8a8'}
            orientation="vertical"
            flexItem
          />
          <p>{name}</p>
        </InfoContainer>
      </LeftContainer>
      {/* Container for theme and mode toggles */}
      <ButtonActionContainer>
        {/* Theme toggles */}
        <ToggleTheme />
        {/* Divider */}
        <Divider
          color={theme === 'dark' ? '#d2d2d2' : '#a8a8a8'}
          orientation="vertical"
          flexItem
        />
        {/* Mode toggles */}
        <ToggleMode />
      </ButtonActionContainer>
    </HeaderContainer>
  );
};

export default Header;

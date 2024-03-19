import React, { useContext } from 'react';
import * as PiIcons from 'react-icons/pi';
import { ThemeContext } from '../../App';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Function to handle theme toggling
  const handleTheme = (theme) => {
    toggleTheme(theme);
  };

  // Function to determine if a theme is currently active
  const isActive = (selectedTheme) => theme === selectedTheme;

  return (
    <>
      {/* Tooltip and IconButton for Light Theme */}
      <Tooltip title="Light Theme" onClick={() => handleTheme('light')}>
        <IconButton>
          {isActive('light')
            ? (
            <PiIcons.PiSunFill
              color={theme === 'dark' ? '#e6e6e8' : '#1E1E1F'}
              size="17px"
            />
              )
            : (
            <PiIcons.PiSun
              color={theme === 'dark' ? '#e6e6e8' : '#1E1E1F'}
              size="17px"
            />
              )}
        </IconButton>
      </Tooltip>

      {/* Tooltip and IconButton for Dark Theme */}
      <Tooltip title="Dark Theme" onClick={() => handleTheme('dark')}>
        <IconButton>
          {isActive('dark')
            ? (
            <PiIcons.PiMoonFill
              color={theme === 'dark' ? '#e6e6e8' : '#1E1E1F'}
              size="17px"
            />
              )
            : (
            <PiIcons.PiMoon
              color={theme === 'dark' ? '#e6e6e8' : '#1E1E1F'}
              size="17px"
            />
              )}
        </IconButton>
      </Tooltip>

      {/* Tooltip and IconButton for Brand Theme */}
      <Tooltip title="Brand Theme" onClick={() => handleTheme('brand')}>
        <IconButton>
          {isActive('brand')
            ? (
            <PiIcons.PiStarHalfFill
              color={theme === 'dark' ? '#e6e6e8' : '#1E1E1F'}
              size="17px"
            />
              )
            : (
            <PiIcons.PiStarHalf
              color={theme === 'dark' ? '#e6e6e8' : '#1E1E1F'}
              size="17px"
            />
              )}
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ToggleTheme;

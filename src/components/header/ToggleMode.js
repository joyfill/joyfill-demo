import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import {
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  StyledIcon
} from './styles/StyledToggleMode';
import { IconButton } from '@mui/material';
import * as PiIcons from 'react-icons/pi';

const ToggleMode = () => {
  const { toggleMode, theme } = useContext(ThemeContext);
  const [openDropdown, setOpenDropdown] = useState(false);

  // Function to handle mode toggling
  const handleMode = (newMode) => {
    toggleMode(newMode);
    setOpenDropdown(false);
  };

  return (
    <Dropdown>
      {/* Dropdown button */}
      <DropdownButton
        onClick={() => setOpenDropdown(!openDropdown)} // Toggling dropdown visibility
        theme={theme}
      >
        Modes
        <IconButton>
          {/* Icon for dropdown button */}
          <PiIcons.PiDotsThreeOutlineVerticalFill
            color={theme === 'dark' ? '#ffffff' : '#000000'}
            size="16px"
          />
        </IconButton>
      </DropdownButton>
      {/* Dropdown content */}
      {openDropdown && (
        <DropdownContent theme={theme}>
          {/* Dropdown items */}
          <DropdownItem onClick={() => handleMode('edit')} theme={theme}>
            <StyledIcon>
              {/* Icon for edit mode */}
              <PiIcons.PiNotePencil size='16px' />
            </StyledIcon>
            Edit
          </DropdownItem>
          <DropdownItem onClick={() => handleMode('fill')} theme={theme}>
            <StyledIcon>
              {/* Icon for fill mode */}
              <PiIcons.PiCircleDashed size='16px' />
            </StyledIcon>
            Fill
          </DropdownItem>
          <DropdownItem onClick={() => handleMode('readonly')} theme={theme}>
            <StyledIcon>
              {/* Icon for readonly mode */}
              <PiIcons.PiEye size='16px' />
            </StyledIcon>
            Read Only
          </DropdownItem>
        </DropdownContent>
      )}
    </Dropdown>
  );
};

export default ToggleMode;

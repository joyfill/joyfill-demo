import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FaIcons6 from 'react-icons/fa6';
import { ThemeContext } from '../../App';

// Import styled components for Sidebar styling
import {
  SidebarContainer,
  SidebarHeader,
  ProductName,
  SidebarIcon,
  SubHeader,
  SidebarListContainer,
  SidebarListItem
} from './styles/StyledSidebar';

const Sidebar = () => {
  // Retrieve theme and context from ThemeContext
  const { theme, setName, setDoc } = useContext(ThemeContext);

  // State for the currently active tab
  const [activetab, setActiveTab] = useState('templateOne');

  // Function to handle selection of a document template
  const handleActiveDoc = (active, name) => {
    setDoc(active);
    setActiveTab(active);
    setName(name);
  };

  return (
    // Sidebar container with dynamic theme styling
    <SidebarContainer theme={theme}>
      {/* Sidebar header with product name and icon */}
      <SidebarHeader>
        <SidebarIcon theme={theme} size="30px" />
        <ProductName theme={theme}>Acme Inc.</ProductName>
      </SidebarHeader>

      {/* Container for the list of templates */}
      <SidebarListContainer>
        {/* Subheader for the list of templates */}
        <SubHeader theme={theme}>Templates</SubHeader>

        {/* Individual sidebar items for each template */}
        <SidebarListItem
          className={activetab === 'templateOne' ? 'active-l' : ''}
          onClick={() => handleActiveDoc('templateOne', 'Cleaning Checklist')}
          theme={theme}
        >
          {/* Icon container for the template */}
          <div className="icon-container">
            <FaIcons.FaFile size={17} />
          </div>
          {/* Template name */}
          <span>Cleaning Checklist</span>
        </SidebarListItem>

        <SidebarListItem
          className={activetab === 'templateTwo' ? 'active-l' : ''}
          onClick={() => handleActiveDoc('templateTwo', 'Intake Form')}
          theme={theme}
        >
          <div className="icon-container">
            <FaIcons.FaFile size={17} />
          </div>
          <span>Intake Form</span>
        </SidebarListItem>

        <SidebarListItem
          className={activetab === 'templateThree' ? 'active-l' : ''}
          onClick={() =>
            handleActiveDoc('templateThree', 'Fire Pump Inspection')
          }
          theme={theme}
        >
          <div className="icon-container">
            <FaIcons.FaFile size={17} />
          </div>
          <span>Fire Pump Inspection</span>
        </SidebarListItem>

        <SidebarListItem
          className={activetab === 'templateFour' ? 'active-l' : ''}
          onClick={() =>
            handleActiveDoc('templateFour', 'Workers Compensation')
          }
          theme={theme}
        >
          <div className="icon-container">
            <FaIcons6.FaFilePdf size={17} />
          </div>
          <span>Workers Compensation</span>
        </SidebarListItem>
      </SidebarListContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

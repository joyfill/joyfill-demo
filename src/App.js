import React, { useState, createContext, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { JoyDoc } from '@joyfill/components';
import { data } from './data';
import { themes } from './themes';
import styled from 'styled-components';

// Create a context to manage theme and mode state
export const ThemeContext = createContext('null');

// Styled component for the main app container
const AppContainer = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  padding-left: 215px;
`;
// Styled component for the JoyDoc container
const JoyDocContainer = styled.div`
  margin: 20px;
`;

const App = () => {
  // State hooks for theme, mode, name, and selected document
  const [theme, setTheme] = useState('light');
  const [mode, setMode] = useState('edit');
  const [name, setName] = useState('Cleaning Checklist');
  const [doc, setDoc] = useState('templateOne');

  // Event handler to toggle mode
  const toggleMode = (mode) => {
    setMode(mode);
  };

  // Event handler to toggle theme
  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  // Update background color based on theme changes
  useEffect(() => {
    let backgroundColor;
    switch (theme) {
      case 'light':
      case 'brand': // Set brand theme background color to be the same as light theme
        backgroundColor = '#e8e8e8';
        break;
      default:
        backgroundColor = '#343435'; // Set dark theme background color
        break;
    }
    document.documentElement.style.backgroundColor = backgroundColor;
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ name, setName, mode, toggleMode, doc, setDoc, theme, toggleTheme }}
    >
      <AppContainer className="app">
        <Header />
        <Sidebar />
        <JoyDocContainer>
          <JoyDoc mode={mode} theme={themes[theme]} doc={data[doc]} />
        </JoyDocContainer>
      </AppContainer>
    </ThemeContext.Provider>

  );
};

export default App;

import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const mainTheme = {
  color: {
    background: 'blue',
    text: 'white',
  },
};

const GlobalStyles = createGlobalStyle`
 body {
  background: ${({ theme }) => theme.color.background};

 }

 `;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Normalize />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;

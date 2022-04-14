import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Header from './Header';
import Footer from './Footer';

const mainTheme = {
  color: {
    background: 'Blue',
    text: 'white',
  },
};

const StyledTitled = styled.h1`
  color: ${({ theme }) => theme.color.text};
`;

const GlobalStyles = createGlobalStyle`
 body {
  background: ${({ theme }) => theme.color.background};

 }

 `;

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Normalize />
      <Header />
      {/* <main>{children}</main> */}
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Theme;

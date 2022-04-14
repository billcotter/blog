import React from 'react';
// import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import { Normalize } from 'styled-normalize';
import Header from './Header';
import Footer from './Footer';

// const mainTheme = {
//   color: {
//     background: 'blue',
//     text: 'white',
//   },
// };

// const GlobalStyles = createGlobalStyle`
//  body {
//   background: ${({ theme }) => theme.color.background};

//  }

//  `;

const Layout = ({ children }) => {
  return (
    // <ThemeProvider theme={mainTheme}>
    //   <GlobalStyles />
    //   <Normalize />
    //  <Header />
    <main>{children}</main>
    // <Footer />
    // </ThemeProvider>
  );
};

export default Layout;

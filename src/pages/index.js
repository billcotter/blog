import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const StyledTitled = styled.h1`
  color: ${({ theme }) => theme.color.text};
`;

const Homepage = () => {
  return (
    <Layout>
      <StyledTitled>Home</StyledTitled>
    </Layout>
  );
};

export default Homepage;

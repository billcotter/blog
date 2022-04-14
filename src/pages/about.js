import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const StyledTitled = styled.h1`
  color: ${({ theme }) => theme.color.text};
`;

const about = () => {
  return (
    <Layout>
      <StyledTitled>About</StyledTitled>
    </Layout>
  );
};

export default about;

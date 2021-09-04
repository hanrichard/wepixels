import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 100px 0;
  color: #252f3f;
`;

const Service = () => {
  return (
   <Wrapper id="service">
    <Container>
      <h2>Services</h2>
    </Container>
   </Wrapper>
  );
}

export default Service;

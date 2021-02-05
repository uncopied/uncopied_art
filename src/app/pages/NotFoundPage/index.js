import React from 'react';
import styled from 'styled-components/macro';

export default function NotFound()
{
  return (
    <Wrapper>
      <Header>Sorry, page not found!!!</Header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 100px;
  text-align: center;
`;

const Header = styled.div`
  font-size: 40px
`;
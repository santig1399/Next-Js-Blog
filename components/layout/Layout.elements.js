import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  } 

  h1{
    font-size: 2.5rem;
  }

  h2{
    font-size: 2rem;

  }

  p{
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem 0rem;

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: ${({col})=>(col) ? `repeat(${col}, 1fr)` : 'repeat(2, 1fr)' };
  gap: 8rem;
  margin: 2rem auto;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 4rem;
    margin: 2rem 0rem;
  }
`;

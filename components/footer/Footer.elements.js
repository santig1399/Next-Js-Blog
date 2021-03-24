import styled from "styled-components";

export const Foot = styled.footer`
  width: 100%;
  background-color: #0d0504;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1rem 0rem;
`;
export const FooterContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FooterBrand = styled.h2`
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #6655ff;
    transition: ease 0.5s;
  }
`;
export const FooterLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;
export const LinkItem = styled.li`
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid white;
  }
`;
export const LinkText = styled.p`
  cursor: pointer;
  margin: 1rem;
  font-size: 18px;
`;

import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: #0d0504;
  display: flex;
  justify-content: center;
  color: white;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 1rem;
  @media screen and (max-width: 1200px) {
    padding: 1rem 2rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  pointer-events: none;
  @media screen and (max-width: 768px) {
    pointer-events: all;
    display: block;
    position: absolute;
    top: 20px;
    right: -0px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavbarContainer = styled.div`
  height: 80px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    padding: 0rem 0rem;
  }
`;

export const NavBrand = styled.h1`
  font-size: 2.5rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const NavLinkList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 110px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0d0504;
  }
`;
export const NavLinkItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
  margin-left: 2rem;
  padding: 0.5rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;

export const NavLinkText = styled.a``;

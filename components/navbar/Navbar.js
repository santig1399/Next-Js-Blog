import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  MobileIcon,
  NavbarContainer,
  NavBrand,
  NavLinkList,
  NavLinkItem,
  NavLinkText,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setClick(!click);
    }
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <Nav>
      <NavbarContainer>
        <Link href="/">
          <NavBrand onClick={closeMobileMenu}>Next Blog</NavBrand>
        </Link>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavLinkList onClick={handleClick} click={click}>
          <NavLinkItem>
            <Link href="/blog">
              <NavLinkText>Blog</NavLinkText>
            </Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link href="/about">
              <NavLinkText>About</NavLinkText>
            </Link>
          </NavLinkItem>
        </NavLinkList>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

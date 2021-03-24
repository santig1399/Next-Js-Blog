import Link from "next/link";
import {
  Foot,
  FooterContainer,
  FooterBrand,
  FooterLinks,
  LinkWrapper,
  LinkItem,
  LinkText,
} from "./Footer.elements";

const Footer = () => {
  return (
    <Foot>
      <FooterContainer>
        <FooterBrand>Next Blog</FooterBrand>
        <FooterLinks>
          <LinkWrapper>
            <LinkItem>
              <Link href="/blog">
                <LinkText>Blog</LinkText>
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href="/about">
                <LinkText>About</LinkText>
              </Link>
            </LinkItem>
          </LinkWrapper>
        </FooterLinks>
      </FooterContainer>
    </Foot>
  );
};

export default Footer;

import Link from "next/link";
import {
  Foot,
  FooterContainer,
  FooterBrand,
  FooterLinks,
  LinkWrapper,
  LinkItem,
  LinkText,
  ExternalLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <Foot>
      <FooterContainer>
        <FooterBrand>Next Blog</FooterBrand>
        <FooterLinks>
          <LinkWrapper>
            <LinkItem>
              <Link href="/">
                <LinkText>Blog</LinkText>
              </Link>
            </LinkItem>
            <LinkItem>
              <ExternalLink
                href="https://github.com/santig1399/Next-Js-Blog/blob/main/README.md"
                rel="noopener"
                target="_blank"
              >
                <LinkText>GitHub</LinkText>
              </ExternalLink>
            </LinkItem>
          </LinkWrapper>
        </FooterLinks>
      </FooterContainer>
    </Foot>
  );
};

export default Footer;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import ThemeSwitch from "./theme-switch";
/* ------------------ Icons ------------------ */
import Github from "../../images/icons/alt/github";
import Gmail from "../../images/icons/simple/gmail";
import Dev from "../../images/icons/simple/dev";
import { Theme } from "../../theme/types";
import { ThemeContext } from "../../theme/context";

const Interactions = styled.div`
  display: flexbox;
  flex-grow: 1;
  justify-content: flex-end;

  @media only screen and (max-width: 625px) {
    flex-direction: row;
    justify-content: unset;
  }
`;

const Container = styled.header<{ theme: Theme }>`
  width: 100%;
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderLine};
  margin-bottom: 1rem;

  @media only screen and (max-width: 625px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledTitleLink = styled(Link)<{ theme: Theme }>`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text} !important;
`;

const TitleRowContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 0.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  & img {
    border-radius: 3rem;
  }

  @media only screen and (max-width: 350px) {
    & .gatsby-image-wrapper {
      display: none !important;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  padding-left: 1rem;
  text-decoration: none;

  @media only screen and (max-width: 400px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 350px) {
    padding: 0;
  }
`;

const NavigationContainer = styled.div<{ showMobileMenu: boolean }>`
  display: flex;
  margin-left: 5rem;
  padding-top: 0.5rem;

  @media only screen and (max-width: 1000px) {
    margin: 0;
  }

  @media only screen and (max-width: 625px) {
    flex-direction: column;
    width: 100%;
    padding-top: 0;
    padding-left: 5rem;
  }

  @media only screen and (max-width: 350px) {
    padding-left: 0;
  }
`;

const Navigation = styled.nav<{ showMobileMenu: boolean; theme: Theme }>`
  display: flex;
  margin: 0;
  padding: 0;

  & > a,
  & > a:visited {
    color: ${(props) => props.theme.colors.link.text};
  }

  & > a:hover {
    color: ${(props) => props.theme.colors.link.textHover};
  }

  ${(props) =>
    !props.showMobileMenu
      ? `
        @media only screen and (max-width: 625px) {
          display: none;
        }
      `
      : `
        @media only screen and (max-width: 625px) {
          flex-direction: column;
          border-top: 1px solid ${props.theme.colors.borderLine};
          border-bottom: 1px solid ${props.theme.colors.borderLine};
          padding: 0.5rem 0 0.5rem 0;
          margin-bottom: 1rem;

          & > a {
            padding: 1rem 1rem 1rem 0;
          }
        }
      `}
`;

const NavigationLink = styled(Link)`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.5rem;
`;

const ActionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ThemeSwitchContainer = styled.div`
  @media only screen and (max-width: 625px) {
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-right: 0.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 4px;
`;

const MenuIconContainer = styled.div`
  display: none;

  @media only screen and (max-width: 625px) {
    display: flex;
    padding: 0 0.5rem 0 0.5rem;
  }
`;

const MenuIcon = styled.svg`
  height: 32px;
  width: 32px;
`;

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <TitleRowContainer>
        <StyledTitleLink to="/" theme={theme}>
          <TitleContainer>
            <StaticImage
              src="../../images/personal/portfolio.png"
              width={64}
              height={64}
              alt="erik carlson portfolio picture"
            />
            <Title>Erik Carlson</Title>
          </TitleContainer>
        </StyledTitleLink>
        <ActionContainer>
          <MenuIconContainer onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <MenuIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5 -7 24 24"
              width="32"
              fill={theme.colors.text}
            >
              <path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
            </MenuIcon>
          </MenuIconContainer>
        </ActionContainer>
      </TitleRowContainer>
      <NavigationContainer showMobileMenu={showMobileMenu}>
        <Navigation theme={theme} showMobileMenu={showMobileMenu}>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/experience">Experience</NavigationLink>
          <NavigationLink to="/blog">Blog</NavigationLink>
        </Navigation>
        <Interactions>
          <SocialContainer>
            <SocialLink
              href="#email"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <Gmail type="social" />
            </SocialLink>
            <SocialLink
              href="https://github.com/carlson-erik/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#151013" }}
            >
              <Github color="#FFFFFF" type="social" />
            </SocialLink>
            <SocialLink
              href="https://dev.to/br0sidan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#0a0a0a" }}
            >
              <Dev color="#FFFFFF" type="social" />
            </SocialLink>
          </SocialContainer>
          <ThemeSwitchContainer>
            <ThemeSwitch />
          </ThemeSwitchContainer>
        </Interactions>
      </NavigationContainer>
    </Container>
  );
};

export default Header;

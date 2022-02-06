import React, { useState } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
/* ------------------ Icons ------------------ */
import Github from "../images/icons/alt/github";
import Discord from "../images/icons/simple/discord";
import Gmail from "../images/icons/simple/gmail";
import Dev from "../images/icons/simple/dev";

const Container = styled.header`
  width: 100%;
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid #dadada;
  margin-bottom: 1rem;

  @media only screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledTitleLink = styled(Link)`
  text-decoration: none;
  color: black;
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

  @media only screen and (max-width: 1100px) {
    margin: 0;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    padding-top: 0;
    padding-left: 5rem;
  }

  @media only screen and (max-width: 350px) {
    padding-left: 0;
  }

  ${(props) =>
    props.showMobileMenu
      ? `
        @media only screen and (max-width: 700px) {
          gap: 1rem;
        }
      `
      : ""}
`;

const Navigation = styled.nav<{ showMobileMenu: boolean }>`
  display: flex;
  margin: 0;
  padding: 0;

  ${(props) =>
    !props.showMobileMenu
      ? `
        @media only screen and (max-width: 700px) {
          display: none;
        }
      `
      : `
        @media only screen and (max-width: 700px) {
          flex-direction: column;

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

  color: #1f5aff;

  &:visited {
    color: #1f5aff;
  }

  &:first-child {
    padding: 0.5rem 0.5rem 0.5rem 0;
  }

  &:hover {
    color: #0036cc;
  }
`;

const SocialContainer = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding-bottom: 0.5rem;

  @media only screen and (max-width: 700px) {
    flex-direction: row;
    justify-content: unset;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 4px;
`;

const MenuIconContainer = styled.div`
  display: none;

  @media only screen and (max-width: 700px) {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const MenuIcon = styled.svg`
  height: 32px;
  width: 32px;
`;

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <Container>
      <TitleRowContainer>
        <StyledTitleLink to="/">
          <TitleContainer>
            <StaticImage
              src="../images/header/portfolio.jpg"
              width={64}
              height={64}
              alt="erik carlson portfolio picture"
            />
            <Title>Erik Carlson</Title>
          </TitleContainer>
        </StyledTitleLink>
        <MenuIconContainer onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <MenuIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -7 24 24"
            width="32"
            fill="black"
          >
            <path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
          </MenuIcon>
        </MenuIconContainer>
      </TitleRowContainer>
      <NavigationContainer showMobileMenu={showMobileMenu}>
        <Navigation showMobileMenu={showMobileMenu}>
          <NavigationLink to="/projects">
            Projects
          </NavigationLink>
          <NavigationLink to="/experience">
            Experience
          </NavigationLink>
          <NavigationLink to="/blog">
            Blog
          </NavigationLink>
        </Navigation>
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
            href="https://discordapp.com/users/154788114953535488"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#5865F2" }}
          >
            <Discord color="#FFFFFF" type="social" />
          </SocialLink>
          <SocialLink
            href="https://dev.to/br0sidan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#0a0a0a" }}
          >
            <Dev color="#FFFFFF" type="social"/>
          </SocialLink>
        </SocialContainer>
      </NavigationContainer>
    </Container>
  );
};

export default Header;

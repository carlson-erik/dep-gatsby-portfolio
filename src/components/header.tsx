import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Container = styled.header`
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dadada;
  margin-bottom: 1rem;

  @media only screen and (max-width: 625px) {
    display: flex;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  & img { 
    border-radius: 3rem;
  }

  @media only screen and (max-width: 425px) {
    & .gatsby-image-wrapper {
      display: none !important;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  padding-left: 1rem;

  @media only screen and (max-width: 425px) {
    padding: 0;
    font-size: 2rem;
  }
`;

const NavigationContainer = styled.div`
  display:flex;
  margin-left: 5rem;
  padding-top: 0.5rem;

  @media only screen and (max-width: 900px) { 
    margin: 0;
  }

  @media only screen and (max-width: 625px) {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

const Navigation = styled.nav`
  display: flex;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 625px) {
    display: none;
  }
`;

const NavigationLink = styled.a`
  font-size: 0.75rem;
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
    color: #0036CC
  }
`;

const SocialContainer = styled.div`
  flex-grow: 1;
  display:flex;
  justify-content: flex-end;
  gap: 0.5rem;

  @media only screen and (max-width: 625px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
`;

const SocialIcon = styled.svg`
  height: 24px;
  width: 24px;
  color: #FFFFFF;
`;

const MobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 625px) {
    display: flex;
  }
`;

const MenuIcon = styled.svg`
  height: 32px;
  width: 32px;
`;

const Header = () => {
  return (
    <Container>
        <TitleContainer>
          <StaticImage 
            src='../images/portfolio.jpg'
            width={64}
            height={64}
            alt='erik carlson portfolio picture'
          />
          <Title>Erik Carlson</Title>
        </TitleContainer>
        <NavigationContainer>
          <Navigation>
            <NavigationLink href="#projects">
              Projects
            </NavigationLink>
            <NavigationLink href="#experience">
              Experience
            </NavigationLink>
            <NavigationLink href="#blog">
              Blog
            </NavigationLink>
          </Navigation>
          <SocialContainer>
            <SocialLink href="#email" target="_blank" rel="noopener noreferrer" style={{backgroundColor:'#FFFFFF'}} >
              <SocialIcon role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ea4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </SocialIcon>
            </SocialLink>
            <SocialLink href="https://github.com/carlson-erik/" target="_blank" rel="noopener noreferrer" style={{backgroundColor:'#151013'}}>
              <SocialIcon role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentcolor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </SocialIcon>
            </SocialLink>
            <SocialLink href="https://discordapp.com/users/154788114953535488" target="_blank" rel="noopener noreferrer" style={{backgroundColor:'#5865F2'}}>
              <SocialIcon role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentcolor" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </SocialIcon>
            </SocialLink>
            <SocialLink href="https://dev.to/br0sidan" target="_blank" rel="noopener noreferrer" style={{backgroundColor:'#0a0a0a'}}>
              <SocialIcon role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFFFFF" d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
              </SocialIcon>
            </SocialLink>
          </SocialContainer>
          <MobileMenu>
            <MenuIcon xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="32" fill="black">
              <path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
            </MenuIcon>
          </MobileMenu>
        </NavigationContainer>
      </Container>
  )
}

export default Header;
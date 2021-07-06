import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import logo from "../../images/Proinsights.png";

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/Navbar.js";
import { Link } from "react-scroll";

const NavbarContainer = styled.div(({ navbarScroll }) => [
  tw`z-30 pt-4 overflow-hidden fixed w-full top-0 left-0 pb-4 transition-all duration-300 ease-in-out`,
  navbarScroll &&
    tw`bg-white pt-2 transition-all duration-300 ease-in-out shadow-lg`,
]);

const StyledHeader = styled(Header)`
  ${tw`pt-4 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-gray-900 opacity-50`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-32 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;

const Heading = styled.h1`
  ${tw`text-3xl mt-10 text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 mr-3 text-sm sm:text-base sm:mt-16 sm:px-6 sm:py-3 border-2 text-gray-100 
font-bold rounded-full shadow transition duration-300 hover:bg-primary-500 hover:border-primary-500 hover:text-gray-100`;

export default () => {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const changeNavbarScroll = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", changeNavbarScroll);

  const navLinks = [
    <NavLinks key={1}>
      <NavLink className={navbarScroll && "navbarText"} href="">
        <Link
          to="about-scroll"
          smooth={true}
          duration={1000}
          spy={true}
          exact="true"
        >
          About
        </Link>
      </NavLink>
      <NavLink className={navbarScroll && "navbarText"} href="">
        <Link
          to="services-scroll"
          smooth={true}
          duration={1000}
          spy={true}
          exact="true"
          offset={-80}
        >
          Services
        </Link>
      </NavLink>
      <NavLink className={navbarScroll && "navbarText"} href="">
        <Link
          to="pricing-scroll"
          smooth={true}
          duration={1000}
          spy={true}
          exact="true"
          offset={-80}
        >
          Pricing
        </Link>
      </NavLink>
      <NavLink className={navbarScroll && "navbarText"} href="">
        <Link
          to="testimonial-scroll"
          smooth={true}
          duration={1000}
          spy={true}
          exact="true"
          offset={-80}
        >
          Testimonials
        </Link>
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <NavLink
        className={navbarScroll && "navbarText"}
        href="/#"
        tw="lg:ml-12!"
      >
        Log In
      </NavLink>
      <PrimaryLink css={tw`rounded-full`} href="/#">
        Sign Up
      </PrimaryLink>
    </NavLinks>,
  ];

  const logoLink = (
    <LogoLink className={navbarScroll && "navbarHeading"} href="/">
      <img src={logo} alt="logo" />
      <Link
        to="about-scroll"
        smooth={true}
        duration={1000}
        spy={true}
        exact="true"
      >
        ProInsights
      </Link>
    </LogoLink>
  );

  return (
    <Container>
      <OpacityOverlay />
      <NavbarContainer navbarScroll={navbarScroll}>
        <HeroContainer>
          <StyledHeader
            links={navLinks}
            logoLink={logoLink}
            navbarScroll={navbarScroll}
          />
        </HeroContainer>
      </NavbarContainer>
      <HeroContainer>
        <TwoColumn id="about-scroll">
          <LeftColumn>
            <Heading>
              <span>
                Success starts
                <br />
                with understanding
              </span>
              <br />
              <SlantedBackground>Your Customers.</SlantedBackground>
            </Heading>
            <Link
              to="business-scroll"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              <PrimaryAction>For Companies</PrimaryAction>
            </Link>
            <Link
              to="reviewer-scroll"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              <PrimaryAction>For Reviewers</PrimaryAction>
            </Link>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};

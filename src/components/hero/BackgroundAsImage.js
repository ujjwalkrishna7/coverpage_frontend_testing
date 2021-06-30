import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
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
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
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

const PrimaryAction = tw.button`px-8 py-3 mt-10 mr-3 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-primary-500 text-gray-100 
font-bold rounded-full shadow transition duration-300 hocus:bg-primary-800 hocus:text-gray-100 focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Services</NavLink>
      <NavLink href="#">Pricing</NavLink>
      <NavLink href="#">Testimonials</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink>
      <PrimaryLink href="/#">Sign Up</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
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
            <PrimaryAction>For Companies</PrimaryAction>
            <PrimaryAction>For Reviewers</PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};

import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/customer_dev.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import CustomerDiscovery from "../../images/customer_discovery.svg";
import CustomerDevelopement from "../../images/customer_dev.svg";
import ValueProposition from "../../images/value_proposition.svg";
import Mvp from "../../images/mvp.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-5 md:py-6`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/2 px-6 flex`}
`;

const Card = styled.div`
  ${tw`z-10 bg-white flex flex-col mx-auto max-w-xs items-center px-6 py-5 shadow-xl rounded-5xl mt-12`}
  .imageContainer {
    ${tw`text-center p-3 flex-shrink-0 relative`}
    img {
      ${tw`w-32 h-32`}
    }
  }

  .textContainer {
    ${tw`my-6 text-center`}
  }

  .title {
    ${tw`mt-2 text-left font-black text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`font-normal px-5 text-secondary-100 text-sm text-left leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`z-0 pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: CustomerDevelopement,
      title: "Customer Development",
      description:
        "ProInsights builds a four-step framework,to discover and validate that you have identified a need(s) that customers have,built the right product to satisfy that customer’s need(s),and deploy the right resources in the organization to meet the demand for the product.",
    },
    {
      imageSrc: CustomerDiscovery,
      title: "Customer Discovery",
      description:
        "We focus on four blocks of the lean canvas, developing assumptions, and turning those assumptions into hypotheses which founders will then go out and test.Through ProInsights you can locate and contact your potential users and validate your hypothesis with real people.",
    },
    {
      imageSrc: ValueProposition,
      title: "Value Propostion",
      description:
        "The value a company promises to deliver to customers should they choose to buy their product, Through a proper customer Discovery process you will be able to identify the real pain of the Customers",
    },
    {
      imageSrc: Mvp,
      title: "Test your MVP",
      description:
        "Get your MVP tested by real people and get insights on building products that people love. It is necessary to test and review MVP in-depth, so as to avoid wasting time and efforts in building a full-fledged product.",
    },
  ];

  return (
    <Container id="services-scroll">
      <ThreeColumnContainer>
        <Heading>
          Our <span tw="text-primary-500">Services</span>
        </Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
              </span>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <p className="description">
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};

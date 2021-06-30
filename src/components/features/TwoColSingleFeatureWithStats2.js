import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { SectionHeading } from "components/misc/Headings.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { Container as ContainerBase } from "components/misc/Layouts";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";

const Container = tw(
  ContainerBase
)`my-8 lg:my-10 bg-gray-900 text-gray-100 -mx-8 px-8`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-7/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-5/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight `;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-200 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-6 h-6 text-primary-200`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-200`;
const FeatureDescription = tw.div`mt-1 font-semibold text-base`;
const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-200 -z-10`,
]);

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-gray-800 opacity-50`;

export default ({
  heading = (
    <>
      For <wbr />
      <span tw="text-primary-200">Reviewer.</span>
    </>
  ),
  features = null,
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Get paid for your opinions",
      description:
        "Provide genuine insights on the product and help the founders come up with the best product(MVP)",
    },
    {
      Icon: MoneyIcon,
      title: "Get insights about great products",
      description:
        "Help the founder make a product which you as a customer would be lured in to buy",
    },
    {
      Icon: MoneyIcon,
      title: "Build a network",
      description:
        "Connect with people of similar mindsets and form your network and grow",
    },
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? (
            <Image imageSrc={imageSrc} css={imageCss} />
          ) : (
            <img src={imageSrc} css={imageCss} alt="" />
          )}
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>
                    {<feature.Icon />}
                  </FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureDescription>
                      {feature.description}
                    </FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
};

import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/business_chat.svg";
import { SectionDescription } from "components/misc/Typography";

const Container = tw.div`relative`;
const HeadingContainer = tw.div`text-center mx-auto pt-10 md:pt-12 pb-5`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-lg mx-auto pb-10 md:pb-12`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center mt-5 h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border-2 border-primary-500 text-primary-500 text-center rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center hover:bg-primary-500 hover:text-gray-100`}
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-primary-500`;
const FeatureDescription = tw.div`mt-1 font-semibold text-base`;

const MainHeading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const MainDescription = tw(
  SectionDescription
)` text-center mx-auto max-w-screen-md`;

export default ({
  subheading = "",
  heading = (
    <>
      For <span tw="text-primary-500">Businesses.</span>
    </>
  ),
  description = "",
  features = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: "fas fa-tasks",
      title: "Interview the right candidates",
      description:
        "The algorithm will connect the right reviewers to the right Product",
    },
    {
      Icon: "far fa-sun",
      title: "Get real insights",
      description: "Get genuine and valuable insights to your mvp",
    },
    {
      Icon: "fas fa-calendar-alt",
      title: "Schedule meetings",
      description:
        "Discuss over a Video Call or chat with the reviewer as per your suitability",
    },
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container>
      <HeadingContainer>
        <MainHeading>About Us</MainHeading>
        <MainDescription>
          We help you bring the right product to the market, test your
          hypothesis and get real insights for your ideas
        </MainDescription>
      </HeadingContainer>
      <TwoColumn id="business-scroll">
        <ImageColumn>
          <Image imageSrc={TeamIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>
                    <i class={feature.Icon}></i>
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
    </Container>
  );
};

import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import MainCover from "components/hero/BackgroundAsImage.js";
import Services from "components/features/DashedBorderSixFeatures";
import AboutReviewer from "components/features/TwoColSingleFeatureWithStats2.js";
import AboutBusiness from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Clients from "components/cta/Clients.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import Pricing from "components/pricing/ThreePlans.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/FiveColumnDark.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import GetStarted from "components/cta/GetStartedLight.js";

import testimonial1 from "images/Adwitiya.jpeg";
import testimonial2 from "images/Abhilasha.jpeg";
import testimonial3 from "images/Ekta.jpeg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage disabled>
      <MainCover />
      <AboutBusiness />
      <AboutReviewer />
      <Services />
      <FeatureStats />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        description={<>Choose the plan that’s right for you</>}
        plans={[
          {
            name: "Personal",
            price: "$4.99",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: ["text here", "text here", "text here", "text here"],
          },
          {
            name: "Business",
            price: "$29.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: ["text here", "text here", "text here", "text here"],
            featured: true,
          },
          {
            name: "Enterprise",
            price: "$99.99",
            duration: "Monthly",
            mainFeature: "For Large Companies",
            features: ["text here", "text here", "text here", "text here"],
          },
        ]}
      />
      <Testimonial
        subheading="Testimonials"
        heading={
          <>
            Our Clients <span tw="text-primary-100">Love Us.</span>
          </>
        }
        description="Here are what some of our amazing customers have to say about our services."
        testimonials={[
          {
            imageSrc: testimonial1,
            quote:
              "Talking to the customer saves you time, energy and effort. No doubt, ProInsights is the best platform for it.",
            customerName: "Adwitiya Mathur",
            customerTitle: "Founder at Tranquil",
          },
          {
            imageSrc: testimonial2,
            quote:
              "ProInsights enable you to understand the market need better. Market need being the one key thing determining the success of the product, there is no better platform than ProInsights for this.",
            customerName: "Abhilasha Gupta",
            customerTitle: "Publicist, Author",
          },
          {
            imageSrc: testimonial3,
            quote:
              "Saw a jump in revenue after talking to potential customers. ProInsights gave me one of the biggest return of investment for my product.",
            customerName: "Ekta Gupta",
            customerTitle: "Founder at Smartkits",
          },
        ]}
        textOnLeft={true}
      />

      <ContactUsForm />
      <Clients text={<>Our Clients</>} />
      <GetStarted />
      <SubscribeNewsLetterForm />
      <Footer />
    </AnimationRevealPage>
  );
};

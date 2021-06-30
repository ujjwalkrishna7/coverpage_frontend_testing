import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import LandingPage from "pages/ProInsightsLandingPage.js";

export default function App() {
  return <LandingPage />;
}

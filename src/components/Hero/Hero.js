import React from "react";
import { Form } from "../Base/Form";

import * as Styled from "./Hero.styles";

const Hero = ({ formContent }) => {
  return (
    <Styled.Section>
      <h2>Trouve les entreprises qui t'entoure</h2>
      <p>Accéssible en un click</p>
      <Form formContent={formContent} />
    </Styled.Section>
  );
};

export default Hero;

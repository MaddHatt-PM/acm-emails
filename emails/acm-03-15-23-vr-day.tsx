import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";

import * as React from 'react';
import ACMLogo from "./components/acm-logo/acm-logo";
import { body, container } from "./components/common.styles";
import Paragraph from "./components/paragraph/paragraph";

export default function Email() {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
          <ACMLogo />
          <Paragraph>
            {`Hey everyone,\n
              ...\n
              We hope to see you there!\n
              Patt Martin, Vice President`.replaceLineBreaks()}
          </Paragraph>
        </Container>
      </Body>
    </Html>
  )
}
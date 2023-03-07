import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Preview } from '@react-email/preview';
import { Body } from '@react-email/body';

import * as React from 'react';
import ACMLogo from './components/acm-logo/acm-logo';
import { body, container } from './components/common.styles';
import Paragraph from './components/paragraph/paragraph';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>ACM Talk with Dr. Sarah Van Wort: Examining Computing's Consequences and Mitigating Harms</Preview>
      <Body style={body}>
        <Container style={container}>

          <ACMLogo />

          <Paragraph>
            {`Hey everyone,\n
            We'll be having a meeting this Wednesday with a talk from Dr. Sarah Van Wart of our Computer Science Department. Join us for snacks and drinks at RRO212 for a talk on the ethical dilemna's that can come from Computer Science.\n
            We hope to see you there!`.replaceLineBreaks()}
          </Paragraph>

          <Text style={h1}>Computing's Consequences:<br/>Examining Harms and Mitigating Societal Impact</Text>
          <Text style={h2}>Abstract</Text>
          {[
            "Computing technologies shape our personal, social, and political lives in increasingly consequential ways - providing tremendous benefits (e.g. convenient access to information, connecting to one another across time and space) and harms (e.g. biased decision-making, mass surveillance, disinformation campaigns, and exclusion from critical material opportunities) that are important to examine and understand.",

            "In this talk, I will examine some well-documented societal harms that have been amplified by computer-mediated systems, and then consider how small choices - made by individuals and teams - can make a big difference in mitigating harm. Getting in the habit of thinking about these things early in your career is an important way that you, as computer science students, can contribute to building a more just and equitable computer-mediated society."
          ].map((o) => <Paragraph>{o}</Paragraph>)}

          <Text style={h2}>Bio</Text>
          {[
            "Sarah Van Wart is an Assistant Professor in the Department of Computer Science at the University of North Carolina Asheville.She holds a PhD in Information Science from the University of California Berkeley, a BA in Economics from Yale University, and has worked as a software developer for many different private, public, and non-profit organizations.",

            "Her research examines how data-intensive information systems can both amplify and disrupt historically-produced power asymmetries; and how educational interventions (at many different scales) can help to create a more just and equitable computer-mediated ecosystem. At the undergraduate level, she develops and studies ways of expanding engineering education to engage with social and ethical considerations. She also develops courses and educational materials that help undergraduates understand how their emerging computing literacies can impact (and are impacted by) society.",

            "Outside of the university, she works with youth and community organizations to help them learn about data and computation - for use in advocacy campaigns (e.g., access to clean air, clean water, safe neighborhoods, and vibrant public amenities) and for economic empowerment."
          ].map((o) => <Paragraph>{o}</Paragraph>)}

        </Container>
      </Body>
    </Html>
  )
}



const h1 = {
  color: '#0049ac',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '36px',
  textAlign: 'center' as const,
  margin: '30px 0',
  padding: '0',
};

const h2 = {
  color: '#3d4866',

  fontSize: '22px',
  fontWeight: '600',
  lineHeight: '8px',
  textAlign: 'left' as const,
  margin: '50px 0 -5px 0',
  padding: '0',
};

const paragraph = {
  color: '#343b4d',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};
import { Section } from '@react-email/section';
import { Img } from '@react-email/img';
import { Text } from '@react-email/text';
import { Column } from '@react-email/column';
import { Row } from '@react-email/row';

import * as React from 'react';
import { logo, subtitle, title, titleColumn } from './acm-logo.styles';

export default function ACMLogo() {
    return (
        <Section>
            <Column width="100">
                <Img
                    src={`https://raw.githubusercontent.com/MaddHatt-PM/acm-emails/master/emails/static/acm-logo-200px.png`}
                    width="100"
                    height="100"
                    alt="ACM Logo"
                    style={logo}
                />
            </Column>
            <Column style={titleColumn}>
                <Row>
                    <Text style={title}>ACM Meeting</Text>
                    <Text style={subtitle}>5:30-6:30 Wednesday at RRO212 </Text>
                </Row>
            </Column>
        </Section>
    )
}
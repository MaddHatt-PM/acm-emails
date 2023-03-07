import { Text } from '@react-email/text';
import * as React from 'react';
import { paragraph } from './paragraph.styles';

type Props = {
  children?: React.ReactNode;
}

export default function Paragraph({ children }: Props) {
  return (
    <Text style={paragraph}>
      {children}
    </Text>
  )
}
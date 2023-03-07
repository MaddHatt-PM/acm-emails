import * as React from 'react';

declare global {
  interface String {
    replaceLineBreaks(): React.ReactElement[];
  }
}
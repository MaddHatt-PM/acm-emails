import * as React from 'react';

String.prototype.replaceLineBreaks = function (): React.ReactElement[] {
  const lines = this.split(/\r?\n/);
  const elements: React.ReactElement[] = [];

  lines.forEach((line, index) => {
    elements.push(<span key={index}>{line}</span>);
    if (index < lines.length - 1) {
      elements.push(<br key={`br-${index}`} />);
    }
  });

  return elements;
};
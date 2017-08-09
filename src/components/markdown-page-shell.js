import React from 'react';
import PageShell from './page-shell';

export default function MarkdownPageShell(props) {
  return <PageShell {...props} proseContent={true} />;
}

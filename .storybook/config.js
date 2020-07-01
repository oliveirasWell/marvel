import { addDecorator, addParameters, configure } from '@storybook/react';
import React from 'react';
import { withOptions } from '@storybook/addon-options';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { overrides } from './themeGlobals';

withOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  name: 'Well Dev Playground - Storybook',
  url: 'https://github.com/oliveiraswell/well-dev-playground',
});

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

// const withThemeProvider = storyFn => (
//   <ThemeProvider variant="orange" overrides={overrides}>
//     {storyFn()}
//   </ThemeProvider>
// );

const req = require.context('../packages', true, /\.story\.(js|mdx)$/);

function loadStories() {
  return req
    .keys()
    .map(fname => req(fname))
    .filter(exp => !!exp.default);
}

configure(loadStories, module);

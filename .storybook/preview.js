import React from 'react';

import { GlobalStyle } from '../src/shared/global';

// Global decorator to apply the styles to all stories
// <> is not a typo, it's a React Fragment to avoid adding an unnecessary extra HTML tag to our output.
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
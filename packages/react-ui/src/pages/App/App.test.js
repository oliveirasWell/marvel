import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MockedProvidersTest } from '../../utils/test/MockThemeTest';

test('renders learn react link', () => {
  const { getByTestId } = render(
    <MockedProvidersTest>
      <App />
    </MockedProvidersTest>
  );
  const linkElement = getByTestId(/loading/i);

  expect(linkElement).toBeInTheDocument();
});

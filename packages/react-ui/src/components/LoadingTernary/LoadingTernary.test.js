import React from 'react';
import { render } from '@testing-library/react';
import { LoadingTernary } from './LoadingTernary';

test('renders loading', () => {
  const { getByTestId } = render(
    <LoadingTernary loading>
      <div>teste</div>
    </LoadingTernary>
  );
  const elementItem = getByTestId(/loading/i);

  expect(elementItem).toBeInTheDocument();
});

test('renders test', () => {
  const { getByText } = render(
    <LoadingTernary loading={false}>
      <div>teste</div>
    </LoadingTernary>
  );
  const elementItem = getByText(/teste/i);

  expect(elementItem).toBeInTheDocument();
});

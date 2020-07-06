import React from 'react';
import { getNodeText, render } from '@testing-library/react';
import { routes } from 'routes/routes';
import { Menu } from './Menu';
import { MockedProvidersTest } from '../../utils/test/MockThemeTest';

test('renders only menus item that `menu` field are true  ', () => {
  const expected = Object.values(routes)
    .filter(r => r.menu)
    .map(r => r.title);

  const { getAllByRole } = render(
    <MockedProvidersTest>
      <Menu />
    </MockedProvidersTest>
  );
  const menuItems = getAllByRole(/menuitem/i);
  const renderedItems = menuItems.map(i => getNodeText(i));

  expect(renderedItems).toEqual(expect.arrayContaining(expected));
});

test('not renders menus item that `menu` field are false', () => {
  const expected = Object.values(routes)
    .filter(r => !r.menu)
    .map(r => r.title);

  const { getAllByRole } = render(
    <MockedProvidersTest>
      <Menu />
    </MockedProvidersTest>
  );
  const menuItems = getAllByRole(/menuitem/i);
  const renderedItems = menuItems.map(i => getNodeText(i));

  expect(renderedItems).not.toEqual(expect.arrayContaining(expected));
});

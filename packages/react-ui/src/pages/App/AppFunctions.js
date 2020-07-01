export const getCurrentNavigation = location => {
  if (location.pathname === '/list') {
    return 0;
  }

  if (location.pathname === '/search') {
    return 1;
  }

  return -1;
};

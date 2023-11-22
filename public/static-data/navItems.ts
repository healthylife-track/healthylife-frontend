import routes from '../../lib/routes';

export const navItems = [
  {
    label: 'Home',
    href: routes.home(),
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];

export const navButtonLinks = [
  {
    label: 'Login',
    href: routes.login(),
  },
  {
    label: 'Sign Up',
    href: routes.signUp(),
  },
];

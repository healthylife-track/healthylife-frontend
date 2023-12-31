import { navItems, navButtonLinks } from '@/public/static-data/navItems';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../button/button';
import Logo from '../logo/logo';
import SvgIcon from '../svg-icon/svg-icon';
import {
  Headr,
  Nav,
  NavItem,
  NavItems,
  NavMenuButton,
  NavSubContainer,
  OverlayContainer,
} from './header.styles';
import ShowView from '../show-view/show-view';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleClose = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeComplete', handleClose);
    router.events.on('routeChangeError', handleClose);

    return () => {
      router.events.off('routeChangeComplete', handleClose);
      router.events.off('routeChangeError', handleClose);
    };
  }, [router]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  return (
    <Headr>
      <Nav>
        <Logo />

        <ShowView when={isOpen}>
          <OverlayContainer
            onClick={() => {
              isOpen && setIsOpen(false);
            }}
          />
        </ShowView>

        <NavSubContainer isOpen={isOpen}>
          <NavItems>
            {navItems.map(({ label, href }) => (
              <NavItem key={label} active={router.pathname === href}>
                <Link href={href}>{label}</Link>
              </NavItem>
            ))}
          </NavItems>

          <NavItems hasMarginTop>
            {navButtonLinks.map(({ label, href }) => (
              <NavItem key={label}>
                <Button
                  onClick={() => {
                    router.push(href);
                  }}
                  primary={label === 'Sign Up'}
                >
                  <p>{label}</p>

                  <ShowView when={label === 'Sign Up'}>
                    <SvgIcon name="arrow-right" />
                  </ShowView>
                </Button>
              </NavItem>
            ))}
            <NavItem></NavItem>
          </NavItems>
        </NavSubContainer>
        <NavMenuButton onClick={() => setIsOpen(!isOpen)}>
          <SvgIcon name={isOpen ? 'close' : 'hamburger-menu'} />
        </NavMenuButton>
      </Nav>
    </Headr>
  );
};

export default Header;

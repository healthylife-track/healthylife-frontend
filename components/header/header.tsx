import { navItems } from '@/public/static-data/navItems';
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
} from './header.styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

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

        <NavSubContainer isOpen={isOpen}>
          <NavItems>
            {navItems.map(({ label, href }) => (
              <NavItem key={label} active={router.pathname === href}>
                <Link href={href}>{label}</Link>
              </NavItem>
            ))}
          </NavItems>

          <NavItems hasMarginTop>
            <NavItem>
              <Button>
                <p>Login</p>
              </Button>
            </NavItem>

            <NavItem>
              <Button primary>
                <p>Sign Up</p>
                <SvgIcon name="arrow-right" />
              </Button>
            </NavItem>
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

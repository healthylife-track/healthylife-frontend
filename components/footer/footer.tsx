import Link from 'next/link';
import Logo from '../logo/logo';
import {
  FooterLinksContainer,
  FooterLogoContainer,
  FooterWrapper,
} from './footer.styles';
import routes from '@/lib/routes';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <FooterLogoContainer>
          <Logo secondary isLarger />
          <p>Unlock the power of digital health for a brighter future.</p>
        </FooterLogoContainer>

        <FooterLinksContainer>
          <li>
            <Link href={routes.about()}>About Us</Link>
          </li>
          <li>
            <Link href={routes.contact()}>Contact Us</Link>
          </li>
        </FooterLinksContainer>
      </div>
      <p>&#169; Copyright {new Date().getFullYear()}, All Rights Reserved</p>
    </FooterWrapper>
  );
};

export default Footer;

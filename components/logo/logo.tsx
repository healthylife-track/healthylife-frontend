import Image from 'next/image';
import { ILogoStyleProps, LogoContainer } from './logo.styles';
import getRemValue from '@/utils/getRemValue';
import routes from '@/lib/routes';

interface ILogoProps extends ILogoStyleProps {
  secondary?: boolean;
}

const Logo = ({ secondary, isLarger }: ILogoProps) => {
  return (
    <LogoContainer href={routes.home()} isLarger={isLarger}>
      <Image
        src={secondary ? '/assets/logo-white.png' : '/assets/logo.png'}
        placeholder="blur"
        blurDataURL="data:/assets/blurred-image.png"
        sizes={`${getRemValue(150)}`}
        alt="assignment-help-logo"
        fill
      />
    </LogoContainer>
  );
};

export default Logo;

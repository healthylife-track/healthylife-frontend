import Image from 'next/image';
import { LogoContainer } from './logo.styles';
import getRemValue from '@/utils/getRemValue';
import routes from '@/lib/routes';

const Logo = () => {
  return (
    <LogoContainer href={routes.home()}>
      <Image
        src="/assets/logo.png"
        placeholder="blur"
        blurDataURL="data:/assets/blurred-image.png"
        priority
        sizes={`${getRemValue(150)}`}
        alt="assignment-help-logo"
        fill
      />
    </LogoContainer>
  );
};

export default Logo;

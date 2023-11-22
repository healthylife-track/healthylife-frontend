import getRemValue from '@/utils/getRemValue';
import Link from 'next/link';
import styled from 'styled-components';

export interface ILogoStyleProps {
  isLarger?: boolean;
}

export const LogoContainer = styled(Link)<ILogoStyleProps>`
  max-width: ${getRemValue(170)};
  width: 100%;
  height: ${getRemValue(50)};
  position: relative;
  display: flex;

  ${({ isLarger }) =>
    isLarger &&
    `
    max-width: ${getRemValue(220)};
  `}

  & > img {
    object-fit: contain;
    justify-self: flex-start;
  }
`;

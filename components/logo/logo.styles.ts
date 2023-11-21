import getRemValue from '@/utils/getRemValue';
import Link from 'next/link';
import styled from 'styled-components';

export const LogoContainer = styled(Link)`
  max-width: ${getRemValue(170)};
  width: 100%;
  height: ${getRemValue(50)};
  position: relative;
  display: flex;

  & > img {
    object-fit: contain;
    justify-self: flex-start;
  }
`;

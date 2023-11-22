import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';
import { ICommonStyleProps, cardStyles } from './common.styles';

interface IContactStyleProps extends ICommonStyleProps {}

export const ContactPageWrapper = styled.div`
  padding: 3rem ${getRemValue(24)};
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const ContactPageSubContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  margin: 3rem 0;
`;

export const ContactCardContainer = styled.div<IContactStyleProps>`
  ${cardStyles}
`;

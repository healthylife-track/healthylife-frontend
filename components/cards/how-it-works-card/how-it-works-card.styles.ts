import { ICommonStyleProps, cardStyles } from '@/styles/common.styles';
import styled from 'styled-components';

export interface IHowItWorksCardStyleProps extends ICommonStyleProps {}

export const HowItWorksCardContainer = styled.div<IHowItWorksCardStyleProps>`
  ${cardStyles}
`;

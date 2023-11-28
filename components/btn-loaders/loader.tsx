import getRemValue from '@/utils/getRemValue';
import styled, { keyframes } from 'styled-components';

// Keyframes for animation
const bounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`;

// Styled components
const SpinnerContainer = styled.div`
  width: ${getRemValue(70)};
  text-align: center;
`;

const Bounce = styled.div`
  width: ${getRemValue(10)};
  height: ${getRemValue(10)};
  background-color: currentColor;
  border-radius: 100%;
  display: inline-block;
  animation: ${bounceDelay} 1.4s infinite ease-in-out both;

  &:nth-child(2) {
    animation-delay: -0.32s;
  }

  &:nth-child(3) {
    animation-delay: -0.16s;
  }
`;

const BtnLoader = () => {
  return (
    <SpinnerContainer>
      <Bounce></Bounce>
      <Bounce></Bounce>
      <Bounce></Bounce>
    </SpinnerContainer>
  );
};

export default BtnLoader;

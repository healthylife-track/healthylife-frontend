import styled from 'styled-components';
import { Content, Overlay, Trigger, Close } from '@radix-ui/react-dialog';
import getRemValue from '@/utils/getRemValue';

export const ModalTrigger = styled(Trigger)`
  border: none;
  margin: auto;
`;

export const ModalOverlay = styled(Overlay)`
  background-color: rgba(var(--color-black), 0.7);
  position: fixed;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 27.8125em) {
    padding: 0;
  }
`;

export const ModalContent = styled(Content)`
  padding: ${getRemValue(24)};
  min-width: ${getRemValue(500)};
  width: 100%;
  max-width: ${getRemValue(700)};
  margin: auto;
  position: relative;
  background: rgb(var(--color-white));
  border-radius: 0.8rem;

  @media screen and (max-width: 43.75em) {
    min-width: 80%;
    max-width: 93%;
  }
`;

export const ModalClose = styled(Close)`
  border: none;
  background: none;
  display: block;
  margin-left: auto;
  margin-bottom: 1rem;
  height: max-content;
  fill: rgb(var(--color-primary));
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

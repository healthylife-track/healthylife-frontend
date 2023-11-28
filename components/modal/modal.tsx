import {
  ReactNode,
  useState,
  forwardRef,
  useImperativeHandle,
  ForwardedRef,
} from 'react';
import { Root } from '@radix-ui/react-dialog';
import {
  ModalClose,
  ModalContent,
  ModalOverlay,
  ModalTrigger,
  TitleContainer,
} from './modal.styles';
import SvgIcon from '../svg-icon/svg-icon';

import { Title, Portal } from '@radix-ui/react-dialog';
import ShowView from '../show-view/show-view';

interface IModalProps {
  trigger: ReactNode;
  children: ReactNode | ((close: () => void) => ReactNode);
  hideCloseButton?: boolean;
  onClose?: () => void;
  disableEscapeDown?: boolean;
  disableOutsideClick?: boolean;
  title?: ReactNode;
}

export type ModalRefActions = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<unknown, IModalProps>(
  (
    {
      trigger,
      children,
      hideCloseButton,
      onClose,
      disableEscapeDown,
      disableOutsideClick,
      title,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
      onClose?.();

      setIsOpen(false);
    };

    useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
    }));
    return (
      <Root open={isOpen} onOpenChange={setIsOpen}>
        <ModalTrigger asChild>{trigger}</ModalTrigger>
        <Portal>
          <ModalOverlay>
            <ModalContent
              ref={ref as ForwardedRef<HTMLDivElement>}
              onPointerDownOutside={(e) =>
                disableOutsideClick && e.preventDefault()
              }
              onEscapeKeyDown={(e) => disableEscapeDown && e.preventDefault()}
            >
              <TitleContainer>
                <ShowView when={!!title}>
                  <Title>{title}</Title>
                </ShowView>
                <ShowView when={!hideCloseButton}>
                  <ModalClose>
                    <SvgIcon
                      fill="neutral5"
                      name="close"
                      width={20}
                      height={20}
                      onClick={closeModal}
                    />
                  </ModalClose>
                </ShowView>
              </TitleContainer>

              {typeof children === 'function' ? children(closeModal) : children}
            </ModalContent>
          </ModalOverlay>
        </Portal>
      </Root>
    );
  }
);

Modal.displayName = 'Modal';
export default Modal;

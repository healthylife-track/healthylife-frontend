import { Btn, IButtonStyleProps } from './button.styles';
import { ReactNode } from 'react';

interface IButtonProps extends IButtonStyleProps {
  children: ReactNode;
}
const Button = ({ children, primary, block }: IButtonProps) => {
  return (
    <Btn primary={primary} block={block}>
      {children}
    </Btn>
  );
};

export default Button;

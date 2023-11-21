import { Btn, IButtonStyleProps } from './button.styles';
import { ReactNode } from 'react';

interface IButtonProps extends IButtonStyleProps {
  children: ReactNode;
}
const Button = ({ children, primary }: IButtonProps) => {
  return <Btn primary={primary}>{children}</Btn>;
};

export default Button;

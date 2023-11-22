import { Btn, IButtonStyleProps } from './button.styles';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface IButtonProps
  extends IButtonStyleProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, primary, block, ...props }: IButtonProps) => {
  return (
    <Btn primary={primary} block={block} {...props}>
      {children}
    </Btn>
  );
};

export default Button;

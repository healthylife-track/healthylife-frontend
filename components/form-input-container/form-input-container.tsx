import { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import ShowView from '../show-view/show-view';
import SvgIcon from '../svg-icon/svg-icon';
import {
  Input,
  InputFlexContainer,
  InputFooterText,
  InputFormField,
  TogglePasswordBtn,
} from './form-input-container.styles';

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  label: string;
  isPasswordType?: boolean;
  description?: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  controller: UseControllerProps<any>;
}

const FormInputContainer: FC<IFormInputProps> = ({
  htmlFor,
  label,
  isPasswordType,
  description,
  controller,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController(controller);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const hidePasswordBack = setInterval(() => {
      if (showPassword) {
        setShowPassword(false);
      }
    }, 500);

    return () => {
      clearInterval(hidePasswordBack);
    };
  }, [showPassword]);

  return (
    <InputFormField>
      <label htmlFor={htmlFor}>{label}</label>
      <ShowView when={isPasswordType !== undefined}>
        <InputFlexContainer>
          <Input
            {...props}
            {...{ ...field }}
            type={showPassword ? 'text' : 'password'}
          />
          <TogglePasswordBtn
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword(!showPassword)}
          >
            <SvgIcon name={!showPassword ? 'eye-open' : 'eye-close'} />
          </TogglePasswordBtn>
        </InputFlexContainer>
      </ShowView>

      <ShowView when={!isPasswordType}>
        <Input {...props} {...{ ...field }} />
      </ShowView>

      <ShowView when={!!error}>
        <InputFooterText>{error?.message}</InputFooterText>
      </ShowView>

      <ShowView when={description !== '' && !error}>
        <InputFooterText noError>{description}</InputFooterText>
      </ShowView>
    </InputFormField>
  );
};

export default FormInputContainer;

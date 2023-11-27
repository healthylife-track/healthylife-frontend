import FormInputContainer from '@/components/form-input-container/form-input-container';
import ShowView from '@/components/show-view/show-view';
import SvgIcon from '@/components/svg-icon/svg-icon';
import GeneralLayout from '@/layout/general-layout';
import routes from '@/lib/routes';
import userTypes from '@/public/static-data/auth-page-data.json';
import {
  AuthCheckboxContainer,
  AuthContainer,
  AuthFooterContainer,
  AuthFormContainer,
  AuthHeaderText,
  AuthMainContainer,
  ForgotPassword,
  FormButton,
  UserSelectContainer,
  UserSelectWrapper,
} from '@/styles/auth.styles';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import { NextPageWithLayout } from './_app';
import { ISignInSchema } from '@/types/auth.type';
import useLogin from '@/server-store/mutations/useLogin';
import { useRouter } from 'next/router';

const Login: NextPageWithLayout = () => {
  const [userType, setUserType] = useState('');
  const router = useRouter();

  const defaultValues: ISignInSchema = {
    email: '',
    password: '',
    role: '',
  };

  const { handleSubmit, control, reset } = useForm<ISignInSchema>({
    defaultValues,
  });

  const { mutate: userLogin, isLoading: isLoading } = useLogin();

  const onSubmit: SubmitHandler<ISignInSchema> = async (data) => {
    const { email, password } = data;

    const payload: ISignInSchema = {
      email,
      password,
      role: userType,
    };
    const jsonData = JSON.stringify(payload);

    userLogin(payload, {
      onSuccess: async () => {
        reset();
        router.push(routes.dashboard());
      },
    });

    console.log('Signed In:', jsonData);

    // reset();
  };

  return (
    <AuthMainContainer>
      <AuthContainer>
        <AuthHeaderText>Login</AuthHeaderText>

        <ShowView when={!userType}>
          <UserSelectWrapper>
            {userTypes.map(({ icon, type }) => (
              <UserSelectContainer key={type} onClick={() => setUserType(type)}>
                <SvgIcon name={icon} />
                <div>
                  <p>{type}</p>
                  <p>Login as {type}</p>
                </div>
              </UserSelectContainer>
            ))}
          </UserSelectWrapper>
        </ShowView>

        <ShowView when={!!userType}>
          <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
            <FormInputContainer
              type="email"
              htmlFor="email"
              placeholder="Enter email address"
              label="Email"
              id="email"
              controller={{
                control,
                name: 'email',
                rules: {
                  required: `Please enter your email address`,
                  validate: {
                    isValidEmail: (value) =>
                      isEmail(value) || 'Please enter a valid email address',
                  },
                },
              }}
            />

            <FormInputContainer
              htmlFor="password"
              label="Password"
              isPasswordType
              placeholder={`Enter your password`}
              id="password"
              controller={{
                control,
                name: 'password',
                rules: {
                  required: 'Please enter your password',
                },
              }}
            />

            <AuthCheckboxContainer>
              <input type="checkbox" name="" id="" />
              <label htmlFor="checkbox">Remember me</label>
            </AuthCheckboxContainer>

            <FormButton disabled={isLoading}>
              <p>
                Login as <span>{userType}</span>
              </p>
              <SvgIcon name="arrow-right" />
            </FormButton>
          </AuthFormContainer>

          <ForgotPassword>Forgot Email/Password?</ForgotPassword>

          <AuthFooterContainer>
            <p>New user?</p>
            <Link href={routes.signUp()}>Sign Up</Link>
          </AuthFooterContainer>
        </ShowView>
      </AuthContainer>
    </AuthMainContainer>
  );
};

Login.getLayout = function getLayout(page) {
  return <GeneralLayout pageTitle="Login">{page}</GeneralLayout>;
};

export default Login;

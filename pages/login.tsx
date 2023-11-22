import GeneralLayout from '@/layout/general-layout';
import { NextPageWithLayout } from './_app';
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
import FormInputContainer from '@/components/form-input-container/form-input-container';
import isEmail from 'validator/lib/isEmail';
import { useForm } from 'react-hook-form';
import SvgIcon from '@/components/svg-icon/svg-icon';
import userTypes from '@/public/static-data/auth-page-data.json';
import { useState } from 'react';
import ShowView from '@/components/show-view/show-view';
import Link from 'next/link';
import routes from '@/lib/routes';

const Login: NextPageWithLayout = () => {
  const [userType, setUserType] = useState('');

  const { control } = useForm();
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
          <AuthFormContainer>
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

            <FormButton>
              <p>Login</p>
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

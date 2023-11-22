import FormInputContainer from '@/components/form-input-container/form-input-container';
import ShowView from '@/components/show-view/show-view';
import SvgIcon from '@/components/svg-icon/svg-icon';
import GeneralLayout from '@/layout/general-layout';
import routes from '@/lib/routes';
import userTypes from '@/public/static-data/auth-page-data.json';
import {
  AuthContainer,
  AuthFooterContainer,
  AuthFormContainer,
  AuthHeaderText,
  AuthMainContainer,
  FormButton,
  UserSelectContainer,
  UserSelectWrapper,
} from '@/styles/auth.styles';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { NextPageWithLayout } from './_app';

const SignUp: NextPageWithLayout = () => {
  const [userType, setUserType] = useState('');

  const { control, watch } = useForm();

  const watchedPassword = watch('password');
  return (
    <AuthMainContainer>
      <AuthContainer>
        <AuthHeaderText>Sign Up</AuthHeaderText>

        <ShowView when={!userType}>
          <UserSelectWrapper>
            {userTypes.map(({ icon, type }) => (
              <UserSelectContainer key={type} onClick={() => setUserType(type)}>
                <SvgIcon name={icon} />
                <div>
                  <p>{type}</p>
                  <p>Sign up as a {type}</p>
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
              htmlFor="phone-number"
              label="Company Phone No."
              type="text"
              id="phone-number"
              placeholder={`Enter company email`}
              controller={{
                control,
                name: 'contactNo',
                rules: {
                  required: 'Please enter your phone number',
                  validate: {
                    isValid: (val) =>
                      isMobilePhone(val, 'any', { strictMode: true }) ||
                      'Please enter a valid phone number',
                  },
                },
              }}
            />

            <FormInputContainer
              type="bloodGroup"
              htmlFor="blood-group"
              placeholder="Enter email address"
              label="Blood Group"
              id="blood-group"
              controller={{
                control,
                name: 'email',
                rules: {
                  required: `Please enter your blood group`,
                },
              }}
            />

            <ShowView when={userType === 'doctor'}>
              <FormInputContainer
                type="license"
                htmlFor="license"
                placeholder="Enter License number"
                label="License Number"
                id="license"
                controller={{
                  control,
                  name: 'license',
                  rules: {
                    required: `Please enter your license number`,
                  },
                }}
              />
            </ShowView>

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
                  required: 'Please enter a password',
                  validate: {
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      'Password must contain at least one uppercase letter',
                    hasLowercase: (value) =>
                      /[a-z]/.test(value) ||
                      'Password must contain at least one lowercase letter',
                    hasSpecialChar: (value) =>
                      /[\W_]/.test(value) ||
                      'Password must contain at least one special character',
                    hasNumber: (value) =>
                      /\d/.test(value) ||
                      'Password must contain at least one number',
                    hasLength: (value) =>
                      value.length >= 6 ||
                      'Password must be at least 6 characters long',
                  },
                },
              }}
            />

            <FormInputContainer
              htmlFor="confirmPassword"
              label="Confirm Password"
              isPasswordType
              placeholder={`Confirm password`}
              controller={{
                control,
                name: 'confirmPassword',
                rules: {
                  required: 'Please confirm your password',
                  validate: {
                    isValid: (value) =>
                      watchedPassword === value || 'Password mismatch',
                  },
                },
              }}
            />

            <FormButton>
              <p>
                Sign up as <span>{userType}</span>
              </p>
              <SvgIcon name="arrow-right" />
            </FormButton>
          </AuthFormContainer>

          <AuthFooterContainer>
            <p>Already have an account?</p>
            <Link href={routes.login()}>Sign In</Link>
          </AuthFooterContainer>
        </ShowView>
      </AuthContainer>
    </AuthMainContainer>
  );
};

SignUp.getLayout = function getLayout(page) {
  return <GeneralLayout pageTitle="Sign Up">{page}</GeneralLayout>;
};

export default SignUp;

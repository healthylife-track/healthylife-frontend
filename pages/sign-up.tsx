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
import { SubmitHandler, useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isAlpha from 'validator/lib/isAlpha';
import { NextPageWithLayout } from './_app';
import { ISignUpSchema } from '@/types/auth.type';
import useSignUp from '@/server-store/mutations/useSIgnUp';

const SignUp: NextPageWithLayout = () => {
  const [userType, setUserType] = useState('');

  const defaultValues: ISignUpSchema = {
    email: '',
    role: userType,
    firstName: '',
    lastName: '',
    phoneNo: '',
    bloodGroup: '',
    genotype: '',
    medicalCondition: '',
    LicenseNo: '',
    password: '',
    confirmPassword: '',
  };

  const { handleSubmit, control, reset, watch } = useForm<ISignUpSchema>({
    defaultValues,
  });

  const { mutate: userSignUp, isLoading: isLoading } = useSignUp();

  const validLastName = (value: string) => {
    return /^[A-Za-z]+(?:-[A-Za-z]+)?$/.test(value);
  };

  const onSubmit: SubmitHandler<ISignUpSchema> = async (data) => {
    const payload: ISignUpSchema = {
      ...data,
      role: userType,
    };

    userSignUp(payload, {
      onSuccess: () => {
        reset();
      },
    });

    const jsonData = JSON.stringify(data);
    console.log('SU Data:', jsonData);
    console.log('da', payload);
    // reset();
  };

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
          <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
            <FormInputContainer
              htmlFor="first-name"
              label="First Name"
              type="text"
              id="first-name"
              placeholder={`Enter your first name`}
              controller={{
                control,
                name: 'firstName',
                rules: {
                  required: 'Please enter your first name',
                  validate: {
                    isValid: (value) =>
                      isAlpha(value) ||
                      'First name must consist of letters only, no special characters allowed.',
                  },
                },
              }}
            />

            <FormInputContainer
              htmlFor="last-name"
              label="Last Name"
              type="text"
              id="last-name"
              placeholder={`Enter your last name`}
              controller={{
                control,
                name: 'lastName',
                rules: {
                  required: 'Please enter your last name',
                  validate: {
                    isValid: (value) =>
                      validLastName(value) ||
                      'Last name must consist of letters only, and may include a hyphen.',
                  },
                },
              }}
            />

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
              label="Phone No."
              type="tel"
              id="phone-number"
              placeholder={`Enter company email`}
              controller={{
                control,
                name: 'phoneNo',
                rules: {
                  required: 'Please enter your phone number',
                  validate: {
                    isValid: (val) =>
                      isMobilePhone(val, 'any', { strictMode: true }) ||
                      'Please enter phone number in international format e.g(+23481xxxxxxxx)',
                  },
                },
              }}
            />

            <ShowView when={userType === 'patient'}>
              <FormInputContainer
                type="text"
                htmlFor="blood-group"
                placeholder="Enter your blood group"
                label="Blood Group"
                id="blood-group"
                controller={{
                  control,
                  name: 'bloodGroup',
                  rules: {
                    required: `Please enter your blood group`,
                  },
                }}
              />

              <FormInputContainer
                type="text"
                htmlFor="genotype"
                placeholder="Enter your genotype"
                label="Genotype"
                id="genotype"
                controller={{
                  control,
                  name: 'genotype',
                  rules: {
                    required: `Please enter your genotype`,
                  },
                }}
              />

              <FormInputContainer
                type="text"
                htmlFor="medical-condition"
                placeholder="Enter your medical condition"
                label="Medical Condition"
                id="medical-condition"
                controller={{
                  control,
                  name: 'medicalCondition',
                  rules: {
                    required: `Please enter your medical condition`,
                  },
                }}
              />
            </ShowView>

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

            <FormButton disabled={isLoading}>
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

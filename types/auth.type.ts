export interface ISignInSchema {
  email: string;
  password: string;
  role: string;
}

export interface ISignUpSchema extends ISignInSchema {
  firstName: string;
  lastName: string;
  phoneNo: string;
  bloodGroup: string;
  genotype: string;
  medicalCondition: string;
  LicenseNo: string;
  password: string;
  confirmPassword: string;
}

export interface ISignInSchema {
  email: string;
  password: string;
  role: string;
}

export interface IUserTypes extends ISignInSchema {
  firstname: string;
  lastname: string;
  phoneNo: string;
  bloodGroup: string;
  genotype: string;
  medicalCondition: string;
  LicenseNo: string;
}

export interface ISignUpSchema extends IUserTypes {
  password: string;
  confirmPassword: string;
}

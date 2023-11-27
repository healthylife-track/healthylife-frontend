import ReactQueryKeys from '../keys';
import { useMutation } from 'react-query';
import { api } from '../utils';
import { ISignUpSchema } from '@/types/auth.type';

interface ISIgnUpResponse {}
const signUp = async (data: ISignUpSchema): Promise<ISIgnUpResponse> => {
  const response = await api.post('/register/', data);

  return response.data;
};

const useSignUp = () => {
  return useMutation([ReactQueryKeys.CREATE_PROFILE], signUp);
};

export default useSignUp;

import ReactQueryKeys from '../keys';
import { useMutation } from 'react-query';
import { api } from '../utils';
import { ISignInSchema } from '@/types/auth.type';

interface ILoginResponse {}
const login = async (data: ISignInSchema): Promise<ILoginResponse> => {
  const response = await api.post('/login/', data);

  return response.data;
};

const useLogin = () => {
  return useMutation([ReactQueryKeys.LOGIN], login);
};

export default useLogin;

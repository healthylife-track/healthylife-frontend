import { ISignInSchema } from '@/types/auth.type';
import { useMutation } from 'react-query';
import ReactQueryKeys from '../keys';
import { api } from '../utils';

interface ILoginResponse {
  id: number;
  msg: string;
}
const login = async (data: ISignInSchema): Promise<ILoginResponse> => {
  const response = await api.post('/login/', data);

  return response.data;
};

const useLogin = () => {
  return useMutation([ReactQueryKeys.LOGIN], login);
};

export default useLogin;

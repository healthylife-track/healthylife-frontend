import ReactQueryKeys from '../keys';
import { useMutation } from 'react-query';
import { api } from '../utils';

interface ILogOutResponse {}
const logOut = async (): Promise<ILogOutResponse> => {
  const response = await api.post('/logout/');

  return response.data;
};

const useLogOut = () => {
  return useMutation([ReactQueryKeys.LOGOUT], logOut);
};

export default useLogOut;

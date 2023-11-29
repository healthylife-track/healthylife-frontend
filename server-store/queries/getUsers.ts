import ReactQueryKeys from '../keys';
import { useQuery } from 'react-query';
import { api } from '../utils';

interface IUserTypes {}
const getUser = async (): Promise<IUserTypes> => {
  const response = await api.get(`/dashboard/`);

  return response.data;
};

const useGetUser = () => {
  return useQuery([ReactQueryKeys.GET_CURRENT_USER], getUser);
};

export default useGetUser;

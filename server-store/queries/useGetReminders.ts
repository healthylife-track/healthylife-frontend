import ReactQueryKeys from '../keys';
import { useQuery } from 'react-query';
import { api } from '../utils';

interface IGetRemindersResponse {
  reminders: [];
}
const getReminders = async (userID: string): Promise<IGetRemindersResponse> => {
  const response = await api.get(`/reminder/${userID}/`);

  return response.data;
};

const useGetReminders = (userID: string) => {
  return useQuery<IGetRemindersResponse, Error>(
    [ReactQueryKeys.GET_REMINDERS, userID],
    () => getReminders(userID)
  );
};

export default useGetReminders;

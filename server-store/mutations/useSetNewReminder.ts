import { ICreateNewReminderSchema } from '@/types/set-reminder-types';
import { useMutation } from 'react-query';
import ReactQueryKeys from '../keys';
import { api } from '../utils';

interface ICreateNewReminderResponse {}
const createReminder = async (
  data: ICreateNewReminderSchema
): Promise<ICreateNewReminderResponse> => {
  const response = await api.post('/set_reminder/', data);

  return response.data;
};

const useSetNewReminder = () => {
  return useMutation([ReactQueryKeys.LOGIN], createReminder);
};

export default useSetNewReminder;

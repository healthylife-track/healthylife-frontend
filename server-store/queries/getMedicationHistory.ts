import ReactQueryKeys from '../keys';
import { useQuery } from 'react-query';
import { api } from '../utils';

interface IMedHistorySchema {
  date: string;
  dayInterval: string;
  drugDosage: string;
  drugName: string;
  id: number;
  time: string;
  timeInterval: string;
  usage: string;
}

interface IGetMedicationHistoryResponse {
  history: IMedHistorySchema[];
}
const getMedicationHistory = async (
  userID: number
): Promise<IGetMedicationHistoryResponse> => {
  const response = await api.get(`/medical_history/${userID}/`);

  return response.data;
};

const useGetMedicationHistory = (userID: number) => {
  return useQuery<IGetMedicationHistoryResponse, Error>(
    [ReactQueryKeys.GET_MEDICATION_HISTORY, userID],
    () => getMedicationHistory(userID)
  );
};

export default useGetMedicationHistory;

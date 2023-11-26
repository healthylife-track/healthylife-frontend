import Counter from '@/components/counter/counter';
import FormInputContainer from '@/components/form-input-container/form-input-container';
import {
  InputFooterText,
  InputFormField,
} from '@/components/form-input-container/form-input-container.styles';
import SvgIcon from '@/components/svg-icon/svg-icon';
import { FormButton } from '@/styles/auth.styles';
import { ICreateNewReminderSchema } from '@/types/set-reminder-types';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  IntervalsContainer,
  SelectIntervalButton,
  SetReminderFormContainer,
  SetReminderWrapper,
} from './set-reminder-card.styles';

const intervals = [2, 4, 6, 8, 12, 24];

const defaultValues: ICreateNewReminderSchema = {
  drug_name: '',
  drug_dosage: '',
  frequency: 0,
  start_time: '',
  days: '',
};

const SetReminder = () => {
  const [selectedInterval, setSelectedInterval] = useState(0);
  const [days, setDays] = useState(1);
  const { handleSubmit, control, reset } = useForm<ICreateNewReminderSchema>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<ICreateNewReminderSchema> = async (data) => {
    console.log('submit', data);
    reset;
  };

  return (
    <SetReminderWrapper>
      <p>Set Reminder</p>
      <p>Let’s get you set up.</p>

      <SetReminderFormContainer onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormInputContainer
            type="text"
            htmlFor="drug-name"
            label="Drug Name"
            id="drug-name"
            controller={{
              control,
              name: 'drug_name',
              rules: {
                required: `Please enter drug name`,
              },
            }}
          />

          <FormInputContainer
            type="text"
            htmlFor="drug-dosage"
            label="Drug Dosage"
            id="drug-dosage"
            controller={{
              control,
              name: 'drug_dosage',
              rules: {
                required: `Please enter drug dosage`,
              },
            }}
          />
        </div>

        <div style={{ gridArea: 'intervals' }}>
          <FormInputContainer
            type="time"
            htmlFor="drug-dosage"
            label="Time"
            description="Time when the first dose was taken."
            id="drug-dosage"
            controller={{
              control,
              name: 'time',
              rules: {
                required: `Please enter the time when the first dose was taken.`,
              },
            }}
          />
          <InputFormField>
            <label>Hourly Interval</label>

            <IntervalsContainer>
              {intervals.map((interval) => (
                <SelectIntervalButton
                  key={interval}
                  isSelected={selectedInterval === interval}
                  onClick={() => setSelectedInterval(interval)}
                  type="button"
                >
                  {interval}
                </SelectIntervalButton>
              ))}
            </IntervalsContainer>
          </InputFormField>

          <InputFormField>
            <label htmlFor="days">Days</label>
            <Counter number={days} name="days" setNumber={setDays} id="days" />
            <InputFooterText noError hasSpace>
              Duration of the medication cycle.
            </InputFooterText>
          </InputFormField>
        </div>

        <FormButton style={{ gridArea: 'button' }}>
          <p>Create Reminder</p>
          <SvgIcon name="arrow-right" />
        </FormButton>
      </SetReminderFormContainer>
    </SetReminderWrapper>
  );
};

export default SetReminder;

import { Dispatch, SetStateAction } from 'react';
import SvgIcon from '../svg-icon/svg-icon';
import {
  CounterButtonsContainer,
  CounterContainer,
  ICounterStyleProps,
} from './counter.styles';

interface ICounterProps extends ICounterStyleProps {
  number: number;
  name: string;
  setNumber: Dispatch<SetStateAction<number>>;
  min?: number;
  id?: string;
}

const Counter = ({
  number,
  name,
  setNumber,
  isSecondary,
  min,
  id,
}: ICounterProps) => {
  return (
    <CounterContainer isSecondary={isSecondary}>
      <input
        name={name}
        type="number"
        value={number}
        id={id}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <CounterButtonsContainer isSecondary={isSecondary}>
        <button
          onClick={() => setNumber((prev) => (prev -= 1))}
          type="button"
          disabled={number <= (min || 0)}
        >
          <SvgIcon name="minus" />
        </button>

        <button onClick={() => setNumber((prev) => (prev += 1))} type="button">
          <SvgIcon name="plus" />
        </button>
      </CounterButtonsContainer>
    </CounterContainer>
  );
};

export default Counter;

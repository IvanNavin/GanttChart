import { useEffect, useState } from 'react';
import Select from 'react-select';

import { useTypedSelector } from '../../store/store';
import { EDateType, IOption } from '../../types/types';
import { useActions } from '../../utils/useActions';

import s from './DateSelect.module.sass'

const options: IOption[] = [
  { value: EDateType.DAYS, label: EDateType.DAYS },
  { value: EDateType.MONTH, label: EDateType.MONTH },
]

export const DateSelect = () => {
  const [ value, setValue ] = useState<null | IOption>(null);
  const { updateDateType } = useActions();
  const {
    dateType,
  } = useTypedSelector((state) => state.gridReducer);

  const onChange = (value: any) => {
    // setValue(value)
    updateDateType(value)
  }
  console.count('render')
  useEffect(() => {
    dateType && setValue(dateType)
  }, [dateType])

  return (
    <div className={s.wrapper}>
      <Select
        value={value}
        options={options as IOption[]}
        onChange={onChange}
      />
    </div>
  );
};
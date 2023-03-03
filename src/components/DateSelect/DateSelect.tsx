import { useEffect, useState } from 'react'
import Select from 'react-select'
import { OnChangeValue } from 'react-select/dist/declarations/src/types'

import { useTypedSelector } from '../../store/store'
import { IOption, ViewMode } from '../../types/types'
import { useActions } from '../../utils/useActions'

import s from './DateSelect.module.sass'

const options: IOption[] = [
  { value: ViewMode.Day, label: ViewMode.Day },
  { value: ViewMode.Month, label: ViewMode.Month },
]

export const DateSelect = () => {
  const [value, setValue] = useState<null | IOption>(null)
  const { updateDateType } = useActions()
  const { dateType } = useTypedSelector((state) => state.gridReducer)

  const onChange = (value: OnChangeValue<IOption, false>) => {
    value && updateDateType(value)
  }

  useEffect(() => {
    dateType && setValue(dateType)
  }, [dateType])

  return (
    <div className={s.wrapper}>
      <Select<IOption> value={value} options={options} onChange={onChange} />
    </div>
  )
}

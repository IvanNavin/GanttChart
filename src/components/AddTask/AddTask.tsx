import { format } from 'date-fns'
import { ChangeEvent, useState } from 'react'
import DatePicker from 'react-datepicker'

import { Button, FormControl, InputBase, InputLabel, Slider, TextField } from '@mui/material'

import { useActions } from '../../utils/useActions'

import 'react-datepicker/dist/react-datepicker.css'

import s from './AddTask.module.sass'

const styles = {
  w224: {
    width: '224px',
    minWidth: '224px',
    maxWidth: '224px',
  },
  input: {
    borderRadius: '4px',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    padding: '0 8px',
    height: '56px',
  },
  mb12: {
    transform: 'translateY(-16px)',
  },
  h60: {
    height: '60px',
  },
}

export const AddTask = () => {
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [progress, setProgress] = useState(0)
  const { addTask } = useActions()

  const onName = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setName(value)
  }

  const onChange = (dates: (Date | null) | [Date | null, Date | null]) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates

      setStartDate(start)
      setEndDate(end)
    }
  }

  const onProgress = (_e: Event, n: number | number[]) => {
    typeof n === 'number' && setProgress(n)
  }

  const onSubmit = () => {
    addTask({
      id: name,
      name,
      start: startDate ? format(startDate, 'yyyy-MM-dd') : undefined,
      end: endDate ? format(endDate, 'yyyy-MM-dd') : undefined,
      progress,
      dependencies: '',
    })
    setName('')
    setStartDate(null)
    setEndDate(null)
    setProgress(0)
  }

  return (
    <div className={s.AddTask}>
      <div>
        <TextField
          onChange={onName}
          id='outlined-basic'
          label='Name'
          variant='outlined'
          sx={styles.w224}
          value={name}
        />
        <FormControl id='progress' variant='standard' sx={styles.w224}>
          <InputLabel shrink htmlFor='progress' sx={styles.mb12}>
            Progress: <b>{progress}</b>
          </InputLabel>
          <Slider id='progress' onChange={onProgress} aria-label='Progress' value={progress} />
        </FormControl>
      </div>
      <div>
        <DatePicker
          id='date'
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          placeholderText='Select date range'
          customInput={<InputBase sx={{ ...styles.w224, ...styles.input }} />}
          onChange={onChange}
          autoComplete='off'
          monthsShown={2}
          selectsRange
          withPortal
        />
        <Button
          onClick={onSubmit}
          variant='outlined'
          sx={{ ...styles.h60, ...styles.w224 }}
          disabled={!(name && startDate && endDate)}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

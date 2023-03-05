import { format } from 'date-fns'
import { Moment } from 'moment/moment'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mockData } from '../../__mock__/mockData'
import { IOption, ViewMode } from '../../types/types'
import { Task } from '../../utils/Task'

interface IGridSlice {
  data: Partial<Task>[]
  dateType: IOption
}

const initialState: IGridSlice = {
  data: mockData.map((x) => new Task(x)),
  dateType: { value: ViewMode.Month, label: ViewMode.Month },
}

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    updateDateType(state: IGridSlice, { payload }: PayloadAction<IOption>) {
      state.dateType = payload
    },
    updateDate(
      state: IGridSlice,
      {
        payload: { name, start, end },
      }: PayloadAction<{ name: string; start: Moment; end: Moment }>,
    ) {
      state.data = state.data.map((task) => {
        if (task.name === name) {
          task.start = format(new Date(start as unknown as string), 'yyyy-MM-dd')
          task.end = format(new Date(end as unknown as string), 'yyyy-MM-dd')

          return task
        }

        return task
      })
    },
    updateProgress(
      state: IGridSlice,
      { payload: { name, progress } }: PayloadAction<{ name: string; progress: number }>,
    ) {
      state.data = state.data.map((task) => {
        if (task.name === name) {
          task.progress = progress

          return task
        }

        return task
      })
    },
    addTask(state: IGridSlice, { payload }: PayloadAction<Partial<Task>>) {
      state.data.push(new Task(payload))
    },
    resetGrid: () => initialState,
  },
})

const { reducer, actions } = gridSlice

export default reducer
export const { updateDateType, updateDate, updateProgress, addTask, resetGrid } = actions

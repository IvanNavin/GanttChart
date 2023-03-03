import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mockData } from '../../__mock__/mockData'
import { IFrapeGanttTask, IOption, ViewMode } from '../../types/types'

interface IGridSlice {
  data: IFrapeGanttTask[]
  dateType: IOption
}

const initialState: IGridSlice = {
  data: mockData,
  dateType: { value: ViewMode.Month, label: ViewMode.Month },
}

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    updateDateType(state: IGridSlice, { payload }: PayloadAction<IOption>) {
      state.dateType = payload
    },
    resetGrid: () => initialState,
  },
})

const { reducer, actions } = gridSlice

export default reducer
export const { updateDateType, resetGrid } = actions

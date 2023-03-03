import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { mockData } from '../../__mock__/mockData';
import { EDateType,IGanttTask, IOption } from '../../types/types';



interface IGridSlice {
  data: IGanttTask[]
  dateType: IOption
}

const initialState: IGridSlice = {
  data: mockData,
  dateType: { value: EDateType.DAYS, label: EDateType.DAYS },
}

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    updateDateType(state: IGridSlice, { payload }: PayloadAction<IOption>) {
      state.dateType = payload;
    },
    resetGrid: () => initialState, 
  }
});

const { reducer, actions } = gridSlice;

export default reducer;
export const { updateDateType, resetGrid } = actions;
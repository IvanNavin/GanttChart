import { useDispatch } from 'react-redux'

import { bindActionCreators } from '@reduxjs/toolkit'

import {
  addTask,
  resetGrid,
  updateDate,
  updateDateType,
  updateProgress,
} from '../store/reducers/gridSlice'
import { AppDispatch } from '../store/store'

const actions = {
  updateDateType,
  updateDate,
  updateProgress,
  addTask,
  resetGrid,
}

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()
  return bindActionCreators(actions, dispatch)
}

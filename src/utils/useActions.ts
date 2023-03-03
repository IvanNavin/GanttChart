import { useDispatch } from "react-redux";

import { bindActionCreators } from '@reduxjs/toolkit';

import { resetGrid, updateDateType } from "../store/reducers/gridSlice";
import { AppDispatch } from "../store/store";

const actions = {
  updateDateType,
  resetGrid,
}

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actions, dispatch);
};
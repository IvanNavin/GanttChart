export interface IGanttTask {
  name: string,
  start_date: string,
  end_date: string,
};

export interface IFrapeGanttTask {
  id: string,
  name: string,
  start: string,
  end: string,
  progress: number,
  dependencies: string
}

export enum EDateType {
  DAYS = 'Days',
  MONTH = 'Months',
}

export interface IOption {
  value: EDateType,
  label: EDateType,
}
export interface IGanttTask {
  name: string
  start_date: string
  end_date: string
}

export enum ViewMode {
  QuarterDay = 'Quarter Day',
  HalfDay = 'Half Day',
  Day = 'Day',
  Week = 'Week',
  Month = 'Month',
}

export interface IFrapeGanttTask {
  id: string
  name: string
  start: string
  end: string
  progress: number
  dependencies: string
}

export interface IOption {
  value: ViewMode
  label: ViewMode
}

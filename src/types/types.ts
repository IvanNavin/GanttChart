export enum ViewMode {
  QuarterDay = 'Quarter Day',
  HalfDay = 'Half Day',
  Day = 'Day',
  Week = 'Week',
  Month = 'Month',
}

export interface IOption {
  value: ViewMode
  label: ViewMode
}

import { IGanttTask } from "../types/types";

export const dataToTasks = (data: IGanttTask[]) => data.map(({name, start_date, end_date}) => ({
  id: "name",
  name: "name",
  start: start_date,
  end: end_date,
  progress: 50,
  dependencies: ""
}));
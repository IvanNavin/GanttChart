import { FrappeGantt } from 'frappe-gantt-react';
import { useEffect, useState } from 'react';

import { useTypedSelector } from '../../store/store';
import { IFrapeGanttTask } from '../../types/types';
import { dataToTasks } from '../../utils/dataToTasks';

export const TimeTable = () => {
  const [ tasks, setTasks ] = useState<null | IFrapeGanttTask[]>(null);

  const { data } = useTypedSelector((state) => state.gridReducer);
  
  useEffect(() => {
    setTasks(dataToTasks(data));
  })
  
  return (
    <>
      <FrappeGantt
        tasks={tasks}
        viewMode={}
        onClick={task => console.log(task)}
        onDateChange={(task, start, end) => console.log(task, start, end)}
        onProgressChange={(task, progress) => console.log(task, progress)}
        onTasksChange={tasks => console.log(tasks)}
      />
    </>
  );
};
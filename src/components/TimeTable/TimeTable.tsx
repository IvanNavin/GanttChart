import { FrappeGantt } from 'frappe-gantt-react'
import { Task } from 'frappe-gantt-react/typings/Task'
import { useEffect, useState } from 'react'

import { useTypedSelector } from '../../store/store'
import { ViewMode } from '../../types/types'

import s from './TimeTable.module.sass'

export const TimeTable = () => {
  const [viewMode, setViewMode] = useState(ViewMode.Month)
  const { data, dateType } = useTypedSelector((state) => state.gridReducer)

  useEffect(() => {
    setViewMode(Object.values(dateType)[0])
  }, [dateType])

  return (
    <div className={s.wrapper}>
      {data && (
        <FrappeGantt
          tasks={data as Task[]}
          viewMode={viewMode}
          onClick={(task) => console.log(task)}
          onDateChange={(task, start, end) => console.log(task, start, end)}
          onProgressChange={(task, progress) => console.log(task, progress)}
          onTasksChange={(tasks) => console.log(tasks)}
        />
      )}
    </div>
  )
}

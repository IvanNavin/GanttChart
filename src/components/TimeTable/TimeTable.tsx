import { FrappeGantt } from 'frappe-gantt-react'
import { Task } from 'frappe-gantt-react/typings/Task'
import { useEffect, useState } from 'react'

import { useTypedSelector } from '../../store/store'
import { ViewMode } from '../../types/types'

import s from './TimeTable.module.sass'

const makeToday = (str: string) => {
  const arr = str.split(' ')
  const halfCell = 18
  const topOffset = 80
  let x = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('x=')) {
      arr[i] = arr[i].substring(0, arr[i].length - 1)
      arr[i] = arr[i].substring(3, arr[i].length)
      x = +arr[i] + halfCell
      arr[i] = `x="${Number(arr[i]) + halfCell}"`
    } else if (arr[i].startsWith('y=')) {
      arr[i] = `y="${topOffset}"`
    } else if (arr[i].startsWith('height=')) {
      arr[i] = arr[i].substring(0, arr[i].length - 1)
      arr[i] = arr[i].substring(8, arr[i].length)
      arr[i] = `height="${Number(arr[i]) - topOffset}"`
    } else if (arr[i].startsWith('class=')) {
      arr[i] = 'fill="black"'
    } else if (arr[i].startsWith('width')) {
      arr[i] = `width="2"`
    }
  }

  const date = new Date().toLocaleDateString('en-US')
  const text = `<text x="${x - 24}" y="${topOffset - 5}" fill="black" >${date}</text>`

  return text + arr.join(' ') + '></rect>'
}

export const TimeTable = () => {
  const [viewMode, setViewMode] = useState(ViewMode.Month)
  const { data, dateType } = useTypedSelector((state) => state.gridReducer)

  useEffect(() => {
    const vm = Object.values(dateType)[0]

    setViewMode(Object.values(dateType)[0])

    if (vm === ViewMode.Day) {
      setTimeout(() => {
        const todayColumn = document.querySelector('.today-highlight')
        const gantt = document.querySelector('.gantt')

        if (gantt && todayColumn) {
          const line = makeToday(todayColumn.outerHTML)
          gantt.insertAdjacentHTML('beforeend', line)
        }
      })
    }
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

import s from './Tasks.module.sass'

interface IProps {
  taskName: string
}

export const Task = ({ taskName }: IProps) => {
  return (
    <div className={s.Task}>
      <span
        className={s.circle}
        style={{ background: `#${Math.random().toString(16).substring(-6)}` }}
      />
      <span>{taskName}</span>
      <span className={s.arrow} />
    </div>
  )
}

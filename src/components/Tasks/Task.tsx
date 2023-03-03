import s from './Tasks.module.sass';

interface IProps {
  taskName: string;
};

export const Task = ({taskName}: IProps) => {
  return (
    <div className={s.Task}>
      { taskName }
    </div>
  );
};
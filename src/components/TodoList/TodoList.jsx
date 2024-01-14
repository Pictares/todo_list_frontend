import { TodoItem } from '../TodoItem/TodoItem'
import s from './TodoList.module.css'

export const TodoList = ({ todos }) => {
  if (!todos.length)
    return <h3 className={s.exceptiion}>Задачи отсутствуют </h3>
  return (
    <div className={s.todo_list}>
      <h1>Todo list</h1>
      <div>
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </div>
    </div>
  )
}

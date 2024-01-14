import { useDispatch } from 'react-redux'
import s from './TodoItem.module.css'
import { changeStatus, deleteTodo, updateTodo } from '../../redux/reducer'
import { useState } from 'react'
import { MyButton } from '../UI/MyButton/MyButton'
import { MyInput } from '../UI/MyInput/MyInput'

export const TodoItem = ({ todo }) => {
  const [editMode, setEditMode] = useState(false)
  const [editTodo, setEditTodo] = useState({
    id: todo.id,
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
  })
  const dispatch = useDispatch()

  const onChangeStatus = (status, id) => {
    dispatch(changeStatus(status, id))
  }

  const onSaveChange = () => {
    if (editTodo.title.length == 0 || editTodo.description.length == 0) return
    dispatch(updateTodo(editTodo))
    setEditMode(false)
  }

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className={s.todo_item}>
      <div className={s.todo_desc}>
        {editMode ? (
          <MyInput
            value={editTodo.title}
            onChange={(e) =>
              setEditTodo({ ...editTodo, title: e.target.value })
            }
            type="text"
          />
        ) : (
          <strong>{todo.title}</strong>
        )}
        {editMode ? (
          <MyInput
            value={editTodo.description}
            onChange={(e) =>
              setEditTodo({ ...editTodo, description: e.target.value })
            }
            type="text"
          />
        ) : (
          <p>{todo.description}</p>
        )}
        <div>
          <span>Завершено: </span>
          <input
            onChange={() => onChangeStatus(!todo.completed, todo.id)}
            checked={todo.completed}
            disabled={editMode}
            type="checkbox"
          />
        </div>
      </div>
      <div className={s.todo_btns}>
        <div>
          {editMode ? (
            <MyButton mod={true} onClick={onSaveChange}>
              Save
            </MyButton>
          ) : (
            <MyButton mod={true} onClick={() => setEditMode(true)}>
              Edit
            </MyButton>
          )}
        </div>
        <div>
          {!editMode ? (
            <MyButton mod={true} onClick={() => onDeleteTodo(todo.id)}>
              Delete
            </MyButton>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

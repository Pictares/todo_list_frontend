import { useState } from 'react'
import s from './TodoForm.module.css'
import { useDispatch } from 'react-redux'
import { createTodo } from '../../redux/reducer'
import { MyInput } from '../UI/MyInput/MyInput'
import { MyButton } from '../UI/MyButton/MyButton'

export const TodoForm = (props) => {
  const [newTodo, setNewTodo] = useState({ title: '', description: '' })

  const dispatch = useDispatch()

  const onCreateNewTask = (e) => {
    e.preventDefault()
    if (newTodo.title.length == 0 || newTodo.description.length == 0) return
    dispatch(createTodo(newTodo.title, newTodo.description))
    setNewTodo({ title: '', description: '' })
  }

  return (
    <form className={s.todo_form}>
      <div>
        <MyInput
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          placeholder="title"
          type="text"
        />
      </div>
      <div>
        <MyInput
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
          placeholder="description"
          type="text"
        />
      </div>
      <MyButton className={s.mini_btn} onClick={onCreateNewTask}>
        Add task
      </MyButton>
    </form>
  )
}

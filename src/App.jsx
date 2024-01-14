import { useDispatch, useSelector } from 'react-redux'
import s from './App.module.css'
import { useEffect } from 'react'
import { getTodos } from './redux/reducer'
import { TodoList } from './components/TodoList/TodoList'
import { TodoForm } from './components/TodoForm/TodoForm'

export const App = (props) => {
  const state = useSelector((state) => state.main)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <div className={s.app}>
      <TodoForm />
      <TodoList todos={state.todos} />
    </div>
  )
}

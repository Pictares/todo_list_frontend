import { todoAPI } from '../API/todoAPI'

const SET_TODOS = 'SET_TODOS'
const SET_TODO = 'SET_TODO'
const UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS'
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'

const initialState = {
  todos: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos,
      }

    case SET_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      }

    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.todo.id) {
            return { ...action.todo }
          }
          return t
        }),
      }

    case UPDATE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.id) {
            return { ...t, completed: action.status }
          }
          return t
        }),
      }

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos.filter((t) => t.id !== action.id)],
      }

    default:
      return state
  }
}

// AC
const setTodos = (todos) => ({
  type: SET_TODOS,
  todos,
})

const setTodo = (todo) => ({
  type: SET_TODO,
  todo,
})

const updateTodoStatus = (status, id) => ({
  type: UPDATE_TODO_STATUS,
  status,
  id,
})

const deleteTodoSuccess = (id) => ({
  type: DELETE_TODO_SUCCESS,
  id,
})

const udpateTodoSuccess = (todo) => ({
  type: UPDATE_TODO_SUCCESS,
  todo,
})

// THUNK

export const createTodo = (title, description) => (dispatch) => {
  todoAPI.createTodo(title, description).then((res) => {
    dispatch(setTodo(res.data))
  })
}

export const getTodos = () => (dispatch) => {
  todoAPI.getTodo().then((res) => {
    dispatch(setTodos(res.data))
  })
}

export const updateTodo = (todo) => (dispatch) => {
  todoAPI.updateTodo(todo).then((res) => {
    dispatch(udpateTodoSuccess(res.data))
  })
}

export const changeStatus = (status, id) => (dispatch) => {
  todoAPI.updateTodoStatus(status, id).then((res) => {
    dispatch(updateTodoStatus(status, id))
  })
}

export const deleteTodo = (id) => (dispatch) => {
  todoAPI.deleteTodo(id).then((res) => {
    dispatch(deleteTodoSuccess(id))
  })
}

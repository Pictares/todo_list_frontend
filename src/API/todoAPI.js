import axios from 'axios'

const instance = axios.create()

export const todoAPI = {
  async createTodo(title, description) {
    return instance.post('http://localhost:5000/api/todo', {
      title,
      description,
    })
  },

  async getTodo() {
    return instance.get('http://localhost:5000/api/todo')
  },

  async updateTodo({ id, title, description, completed }) {
    return instance.put('http://localhost:5000/api/todo', {
      id,
      title,
      description,
      completed,
    })
  },

  async updateTodoStatus(status, id) {
    return instance.patch(`http://localhost:5000/api/todo/${id}`, {
      completed: status,
    })
  },

  async deleteTodo(id) {
    return instance.delete(`http://localhost:5000/api/todo/${id}`)
  },
}

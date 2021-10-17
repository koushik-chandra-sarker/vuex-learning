import axios from "axios";

export const getAllTodos = async ({commit})=> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('setTodos', response.data)
}
export const  addTodo  = async ({commit}, title) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
        {
            title, completed: false
        }
    )
    commit("newTodo", response.data)
}
export const  deleteTodo  = async ({commit}, id) =>{
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`,)
    commit('removeTodo', id)
}
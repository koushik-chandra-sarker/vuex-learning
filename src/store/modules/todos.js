// import axios from "axios";

import axios from "axios";

const state = {
    data: [
        {
            id: 1,
            title: "delectus aut autem",
        },
        {
            id: 2,
            title: "quis ut nam facilis et officia qui",
        },
        {
            id: 3,
            title: "fugiat veniam minus",
        }
    ]
};

const getters = {
    allTodos: (state) => state.data
};

const actions = {
    async getAllTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data)
    },
    async addTodo({commit}, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
            {
                title, completed: false
            }
        )
        commit("newTodo", response.data)
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`,)
        commit('removeTodo', id)
    }
};
const mutations = {
    setTodos: (state, todos) => {
        state.data = todos
    },
    newTodo: (state, todo) =>{
        state.data.unshift(todo)
    },
    removeTodo: (state, id) =>{
        state.data = state.data.filter(todo=>todo.id !== id)
    }
};

export default {
    state, getters, actions, mutations
}
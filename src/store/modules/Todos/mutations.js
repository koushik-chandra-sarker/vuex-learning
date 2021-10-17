export const setTodos = (state, todos) => {
    state.data = todos
}
export const newTodo = (state, todo) => {
    state.data.unshift(todo)
}
export const removeTodo = (state, id) => {
    state.data = state.data.filter(todo => todo.id !== id)
}

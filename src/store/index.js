import { createStore } from 'vuex'
// import Vuex from 'vuex'
// import  todos  from "./modules/todos";
import todos from './modules/Todos'

export default createStore({
  modules: {
    todos:todos
  }

})

// export default new Vuex.Store({
//   modules: {
//     todos
//   }
// })

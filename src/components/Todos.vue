<template>
  <div class="container">

<!--    addTodo-->
    <div class="row gy-4">
      <div class="col-12"><h3>Add Todo</h3></div>
      <div class="col-12">
        <form @submit="onSubmit">
          <div class="input-group mb-3">
            <input type="text" v-model="title" class="form-control" placeholder="Title" aria-label="Title" >
            <button class="btn btn-outline-secondary" type="submit" id="add">submit</button>
          </div>
        </form>
      </div>
    </div>

<!--    Todos-->
    <div class="alert alert-primary text-center" role="alert">
      <h2>Todos</h2>
    </div>


    <div class="row g-4">
      <div class="col-md-3 "
           v-for="todo in allTodos" :key="todo.id"
      >
        <div class="card">
          <div class="card-body">
            {{todo.id}}. {{todo.title}}
          </div>
            <button @click="remove(todo.id)" type="button" class="btn btn-danger from-control">Delete</button>

        </div>
      </div>
    </div>
  </div>
<!--  <div v-for="todo in allTodos" :key="todo.id">{{todo.title}}</div>-->
</template>

<script>
import {mapGetters, mapActions} from  "vuex"
export default {
  name: 'Todos',
  data(){
    return{
      title:null,
    }
  },
  props: {
  },
  methods: {
    ...mapActions(['getAllTodos','addTodo','deleteTodo']),
    onSubmit(e){
      e.preventDefault()
      this.addTodo(this.title)
    },
    remove(id){
      this.deleteTodo(id)
    }

  },
  computed: mapGetters(['allTodos']),
  created(){
    this.getAllTodos();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

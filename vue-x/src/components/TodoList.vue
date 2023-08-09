<template>
  <div>
    <!-- directly used getter method -->
    <h3>Todos List (Done: {{doneListCount}})</h3>
    <ul>
        <!-- display list from comp method -->
        <li v-for="todo in todosList" :key="todo.id"> 
         {{todo.text}}-({{todo.done ? 'Done' : 'Not Done'}})
        </li>
    </ul>
    <!-- displaying getteers inside getters method  -->
    <h3>Completed todos</h3>
     <ul>
        <!-- display list from comp method -->
        <li v-for="todo in doneTodos" :key="todo.id"> 
         {{todo.text}}-({{todo.done ? 'Done' : 'Not Done'}})
        </li>
    </ul>
    <h3>selected todos</h3>
    <ul>
        <!-- display list from comp method -->
        <li v-for="todo in todosList" :key="todo.id"> 
   
            <a href='#' @click.prevent="onTodoSelected(todo.id)">
         {{todo.text}}-({{todo.done ? 'Done' : 'Not Done'}})
            </a>
        </li>
    </ul>
    <div v-if="todo">
       <div>Id: {{todo.id}} </div>
       <div>Text: {{todo.text}}</div>
       <div>Done:{{todo.done}}</div> 
    </div>
     </div>
</template>

<script>
export default {
data(){
    return{
selectedId : ''
    };
},
computed:{
    todosList(){
        return this.$store.state.todos;// comp method
    },
    doneListCount(){
return this.$store.getters.doneTodosListCount;// comp method (accesing gettermethod[which consists of specific logic])
    },
    doneTodos(){
        return this.$store.getters.doneTodos//getters inside getters ,comp method (accesing gettermethod[which consists of specific logic])
    },
    todo(){
         return this.$store.getters.getTodoById(this.selectedId);
    }
    },
methods:{
   onTodoSelected(id){
    this.selectedId = id;
   }
}
}


</script>

<style>
/* getters working(not involved in changing state only involved in getting data) */
/* method is def inside getters */
/* access getter method by def it in computed */
/* displaying in template by comp method name */
</style>
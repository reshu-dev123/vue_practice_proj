<template>
  <div>
    <h3><mark>display done count by mapgetters</mark></h3>
    <h3>Todos List (Done: {{doneListCount}})</h3>   
     <ul>
   <h3><mark>display todolist by mapstate</mark></h3>
        <li v-for="todo in todosList" :key="todo.id"> 
         {{todo.text}}-({{todo.done ? 'Done' : 'Not Done'}})
        </li>
    </ul>
     </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
data(){
    return{
selectedId : ''
    };
},
computed:{
    ...mapState({
        todosList : state => state.todos,
    }),
    ...mapGetters({
        doneListCount :'doneTodosListCount',
    })
} ,
  
methods:{
  
}
}


</script>

<style>
/* getters working(not involved in changing state only involved in getting data) */
/* method is def inside getters */
/* access getter method by def it in computed */
/* displaying in template by comp method name */
</style>
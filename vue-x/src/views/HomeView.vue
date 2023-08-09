<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <counter-app/>
    <h3>Homeview counter</h3>
       <h3>{{count}}</h3>
       <todo-list :style="{textAlign:'left'}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CounterApp from '@/components/CounterApp.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CounterApp,
    TodoList
  },
   computed:{
        count(){
         return this.$store.state.count;//step 2 : affected value
        }
       },
}
</script>

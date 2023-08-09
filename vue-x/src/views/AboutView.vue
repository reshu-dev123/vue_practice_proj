<template>
  <div class="about">
    <h3 :class = "'heading'">Understanding mapState,mapgetters,mapActions,mapmutations </h3>
    <CounterMap/>
    <TodoListMap/>
  </div>
</template>
<script>
import CounterMap from '@/components/CounterMap.vue'
import TodoListMap from '@/components/TodoListMap.vue'
export default {
  name: 'AboutView',
  components: {
  CounterMap,
  TodoListMap
  }
}
</script>
<style>
.heading {
  color : red
}
</style>
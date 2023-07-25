<template>
<div>
 <pre>
      {{JSON.stringify(inputValue,null,2)}}
    </pre>
</div>
<div>
  <h1>Using v-model to bind custom component (input)</h1>
  <Input 
  type="text" id="inp2"
  v-model="inputValue.name"
  />
  </div>
</template>

<script>
import Input from './Input.vue';
  export default {
   components:{ Input },
   data(){
   return{
   inputValue:{
   name : ''
   }
   }
   },
   methods: {
  
   }
   }
    
</script>

<style scoped>

</style>
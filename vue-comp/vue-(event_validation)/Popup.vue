<template>
  <div :style="{borderStyle : 'solid',margin : 20 +'px',textAlign:'center', backgroundColor: 'yellow'}">
  <h1>i am pop up component</h1>
  <input type="text" v-model="name">
  <button @click="$emit('close',name)">close</button>
  </div>
</template>

<script>
  export default {
   name : "Popup",
   emits : {
   close: (name) => {
   if (!name){ return false}
   else {return true}
   }
   
   },

   data(){
   return{
   name : ''
   }
   }
    }
</script>

<style scoped>

</style>3
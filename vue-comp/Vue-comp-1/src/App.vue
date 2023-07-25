<template>
comp props (static & dynamic)
  <div>
<greetMsg name = "Mahesh" movie= "Pokiri"/>
  </div>
</template>

<script>
import greetMsg from './greetMsg.vue';
  export default {
   components:{ greetMsg }
    }
</script>

<style scoped>

</style>3
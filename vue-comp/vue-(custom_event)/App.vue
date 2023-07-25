<template>
  <div>
  <button @click="showPopup = true">Show Popup</button>
  <Popup v-show="showPopup" @close = "showPopup = false" />
  </div>
</template>

<script>
import Popup from './Popup.vue';
  export default {
   components:{Popup },
   data(){
   return{
   showPopup : false,
   }
   }
    }
</script>

<style scoped>

</style>3
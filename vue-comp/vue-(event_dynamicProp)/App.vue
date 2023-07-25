<template>
  <div>
  <button @click="showPopup = true">Show Popup</button>
  <Popup v-show="showPopup" @close = "Closepopup" />
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
   },
   methods: {
   Closepopup(name){
   this.showPopup = false
   console.log('name',name)
   }
   }
    }
</script>

<style scoped>

</style>3
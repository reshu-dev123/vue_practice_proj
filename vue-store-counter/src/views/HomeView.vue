<template>
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png">
 <counter />
  <counterSquare />
  <actionButtons />
  <colorCode />
  
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  
  components:{
    'counter' : require('@/components/Counter.vue').default,
    'counterSquare' : require('@/components/CounterSquare.vue').default,
    'actionButtons' : require('@/components/Buttons.vue').default,
    'colorCode' : require('@/components/ColorCode.vue').default,
    
  }
  

}
</script>

<style>
div{
  margin-bottom:10px;
}
.counter{
  font-size:80px;
}
.buttons button{
  font-size:30px;
  width:70px;
  margin:4px;
}
</style>

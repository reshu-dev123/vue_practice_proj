<template>
  // eslint-disable-next-line
  <!-- Evenet Hnadling(basic) 
 <button @click="count += 1">+</button>
 <button @click="count -=1">-</button> -->

  <!-- Event Handling(effective way) -->
  <div :style="{display:'flex'}" >
  <div :class="'bg'" :style="{width:10 +'%',textAlign:'center',borderStyle :'solid',marginRight:8 +'px'}">
    <h1 :style="{fontSize:25 +'px'}">counter-C1</h1>
    <h1 :class="''">{{count}}</h1>
   <button :class="'pad-1 mar-1'" @click="incrementC1">+</button>
   <button :class="'pad-1 mar-1'" @click="decrementC1">-</button>
  </div>
  <div :class="'bg'" :style="{width:10 +'%',textAlign:'center',borderStyle :'solid'}">
    <h1 :style="{fontSize:25 +'px'}">counter-C2</h1>
    <h1 :class="''">{{c2}}</h1>
   <button :class="'pad-1 mar-1'" @click="incrementNum(1)">+</button>
   <button :class="'pad-1 mar-1'" @click="decrementNum(1)">-</button>
   <button :class="'pad-1 mar-1'" @click="incrementNum(5)">5+</button>
   <button :class="'pad-1 mar-1'" @click="decrementNum(5)">5-</button>
  </div>
  </div>

   <!-- Uses of Event Handling -->
   <div :style="{marginTop:'15px'}">
   <button @click="changeName">{{name}}</button> 

   </div>

</template>
<script>
export default {
  data() {
    return {
     count : 0,
     c2:0,
     name: 'Vishwas'

    };
  },
  methods: {
    changeName(event){
     this.name ='Reshu'
     console.log('change name event',event)// printing event obj in console
    },
  incrementC1(){
     this.count += 1
  },
  decrementC1(){
     this.count -= 1
  },
  incrementNum(num){
      this.c2 += num
  },
   decrementNum(num){
      this.c2 -= num
  }
  },
};
</script>
<style>
.promoted {
  font-style: italic;
}
.new {
  font-style: normal;
  color: rgb(23, 177, 23);
}
.soldOut {
  color: gray;
}
#dynamicId {
  color: red;
  background-color: rgb(240, 202, 152);
  font-weight: 500;
}
.Underline {
  text-decoration: Underline;
}
.text-color {
  color: blue;
}
.bg {
  background-color: yellow;
  font-weight: 500;
}
.pad-1{
  padding: 4px 8px;
}
.mar-1{
  margin: 6px;
}
</style>
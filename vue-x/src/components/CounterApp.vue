<template>
<div>
<h3>accesing variable from store </h3>
<h3>{{$store.state.count}}</h3>
<h3>accesing variable from computed method</h3>
    <h3>{{count}}</h3>
<button @click.prevent="onIncrement">+</button>
<button @click.prevent="incByThree">M3</button>
<button @click.prevent="customInc">CustomM4</button>
<button @click.prevent="customIncAction">ActionM5</button>
<button @click.prevent="customIncActPromise">actPromise(+)</button>
<button @click.prevent="customIncActInAct">actinact(+)</button>

</div>
</template>

<script>
    export default 
    {
    data(){
    return {
        
        }
       },
//.Get the store data using computed properties. Update the state in store
       computed:{
        count(){
         return this.$store.state.count;//step 2 : affected value
        }
       },
       methods : {
        onIncrement(){
            return this.$store.state.count++;//step 1 : functioning method
        },
// Implement mutation to setstore
        incByThree(){
            return this.$store.commit('increment');// accesing mutation by commit
        },
        customInc(){
            this.$store.commit('customInc',{value : 4});//obj style commit 
           // this.$store.commit('customInc',4);commit with payload(param)
        },
         customIncAction(){
            this.$store.dispatch('customInc',{value : 5});//calling actions >> action calling mutation 
           // this.$store.commit('customInc',4);commit with payload(param)
        },
        customIncActPromise(){
            // this.$store.dispatch('actionA');
            this.$store.dispatch('actionA').then((response) => {
                console.log('calling  then success');
                console.log(response);
                })
        },
        customIncActInAct(){
           this.$store.dispatch('actionB')
        }
       }
    }
</script>

<style scoped>
/* Mutations working(changing state data)*/
/*  */
</style>
<template>
<div>
<h3><mark>accesing variable from mapstate</mark></h3>
    <h3>{{count}}</h3>
<h3><mark>accesing btn fn from mapactions</mark></h3>
<button @click.prevent="incByThree">M3</button>
<button @click.prevent="customInc({value : 4})">CustomM4</button>
<button @click.prevent="customIncAction({value : 5})">ActionM5</button>
<button @click.prevent="customIncActInAct">actinact(+)</button>

</div>
</template>

<script>
import {mapState, mapGetters,mapActions,mapMutations} from 'vuex';
    export default 
    {
    data(){
    return {
        
        }
       },
//.Get the store data using computed properties. Update the state in store
       computed:{
        ...mapState({
            count : state => state.count,
        }),
       },
       methods : {
        ...mapActions({
            customIncAction : 'customInc',
            customIncActInAct : 'actionB'
        }),
        ...mapMutations({
            incByThree : 'increment',
            customInc : 'customInc'
        })
     
       }
    }
</script>

<style scoped>
/* Mutations working(changing state data)*/
/*  */
</style>
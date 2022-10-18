import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter:0,
    colorCode:'blue'
  },
  /* grab some data from state and apply some logic*/ 
  getters: {
    counterSquared(state){
      return state.counter * state.counter
    }
  },
  mutations: {
    
      decreaseCounter(state,randomNumber){
        state.counter-= randomNumber
      },
      increaseCounter(state,randomNumber){
        state.counter+= randomNumber
      },
     setColorCode(state, newValue){
      state.colorCode = newValue
     }
  },
  /*will dispatch action instead of commiting mutation*/
  actions: {
    increaseCounter({commit}){/*inorder to commit action to mutation pass it as object*/
     axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    .then(response =>{
      commit('increaseCounter',response.data)
    })
  },
      decreaseCounter({commit}){/*inorder to commit action to mutation pass it as object*/
     axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    .then(response =>{
      commit('decreaseCounter',response.data)
    })
    },
    setColorCode({commit},newValue){
    commit('setColorCode',newValue)
    }
  },
  modules: {
  }
})

import { Promise } from 'core-js';
import { createStore } from 'vuex'
export default createStore({
  state: {
    count : 2,
    todos:[
      {id:1,text:'wakeup early',done:true},
      {id:2,text:'do breakfast',done:true},
      {id:3,text:'go to school',done:false},
      {id:4,text:'sleep early',done:false}
    ],

  },
  getters: // to display any extra info about existing methods (comp)
   { 
    getTodoById: (state) => (id) => {
          return state.todos.find(todo => todo.id === id);
    },
   doneTodos(state) {
    return state.todos.filter((todo) => todo.done);
   },
    doneTodosListCount(state,getters){
      // return state.todos.filter((todo) => todo.done).length;
      return getters.doneTodos.length;// using getter inside another getter
    }
  },
  //Implement mutation to set store (update value in store)
  mutations: {
increment(state){
state.count+=3;
},
//mutation working according to custom input 
customInc(state,payload){
 // state.count = state.count + payload;
  state.count = state.count + payload.value;
},

  },
  actions: {
    customInc(context,payload){
      // context.commit('customInc',payload);
      console.log(context);
      setTimeout( () => {
        context.commit('customInc',payload);
      }, 2000 );
    },
    actionA(context){
      return new Promise((resolve) => {
        setTimeout(() => {context.commit('customInc',{value:1});resolve('reshma web dev');},2000);
      });
    },
    //using action inside other action
    actionB(context){
    context.dispatch('actionA').then((response) => {
       console.log(response);
       console.log('calling success from actionB')
    }
    )
    },
  },
  modules: {
  }
})

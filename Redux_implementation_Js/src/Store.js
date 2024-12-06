import {createStore} from 'redux'
const initialState = {
    fullname : '',
    balance : 0,
    mobile : null
}

const accountReducer=(state=initialState,action)=>{   // reducer function is uded to modify state
    switch(action.type){
        case 'deposit':
        return{...state,balance: state.balance + action.payload }
        case 'withdraw':
        return{...state,balance: state.balance - action.payload}
        case 'mobileUpdate':
        return{...state,mobile: action.payload}
        case 'nameUpdate':
        return{...state,fullname: action.payload}
        default :
        return state;
    }
}
const store = createStore(accountReducer);
console.log(store.getState())
store.dispatch({type:"deposit",payload:1000}) // dispatch function is used to call reducer function internally
console.log(store.getState())
store.dispatch({type:"withdraw",payload:100})// dispatch fn param passes as second param to reducer fn i.e as action
console.log(store.getState())
store.dispatch({type:"nameUpdate",payload:'Reshma'}) // createstore provide some inbult methods eg: getstate 
console.log(store.getState())
store.dispatch( {type:"mobileUpdate",payload:9784564667})  //getstate calls updated state
console.log(store.getState())

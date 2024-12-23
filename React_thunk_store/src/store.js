import {  applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"

const initialState = {
    userState:{}
        
}

const userReducer =(state = initialState,action)=>{
switch(action.type){
    case 'add':
    return {...state,userState:action.payload}
    default:
    return state
}
}

const store = createStore(userReducer,applyMiddleware(thunk));

export default store
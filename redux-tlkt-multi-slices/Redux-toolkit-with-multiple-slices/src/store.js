import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";

const state = {
  balance: 0,
  fullName: "",
  mobile: null,
};

const transactions = [];
const userSlice = createSlice({
  name: "user",
  initialState: state,
  reducers: {
    updateMobile: (state, action) => {
      state.mobile = action.payload;
    },
    updateName: (state, action) => {
      state.fullName = action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
    deposit: (state, action) => {
      state.balance += +action.payload;
    },
    reset: (state) => {
      return {
        balance: 0,
        fullName: "",
        mobile: null,
      };
    },
  },
});
const transactionSlice = createSlice({
  name: "transaction",
  initialState: transactions,
  reducers: {
    addTransaction: (state, action) => {
      //{date:"",type:"debit/credit",accountname:''}
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    transaction: transactionSlice.reducer,
  },
});

export default store;

export const { updateMobile, updateName, withdraw, deposit, reset } =
  userSlice.actions;

export const { addTransaction } = transactionSlice.actions;

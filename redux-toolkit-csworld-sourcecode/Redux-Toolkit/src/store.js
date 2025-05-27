import { createSlice, configureStore } from "@reduxjs/toolkit";

const state = {
  balance: 0,
  fullName: "",
  mobile: null,
};

const userSlice = createSlice({   // create reducer and gen action creators
  name: "user",
  initialState: state,
  reducers: {
    updateMobile: (state, action) => {
      state.mobile = action.payload;//update state without (...)
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

const store = configureStore({
  reducer: {
    user: userSlice.reducer, // reducer fn of slice is configured here  (used to modify state)
  },
});

export default store;

export const { updateMobile, updateName, withdraw, deposit, reset } =
  userSlice.actions;

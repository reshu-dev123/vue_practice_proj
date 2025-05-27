import { useState } from "react";
import { deposit, withdraw, updateName, updateMobile, reset } from "./store";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");

  let dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h2>Account Form</h2>
        <div className="row">
          <div className="col-5 col-lg-5 ">
            <input
              type="number"
              className="form-control"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                let data = e.target.value;
                setAmount(data);
              }}
            />
          </div>
          <button
            className="btn btn-danger col-lg-1 col-3 mx-2"
            onClick={() => {
              dispatch(withdraw(amount));
              setAmount("");
            }}
          >
            Withdraw
          </button>
          <button
            className="btn btn-primary col-lg-1 col-3"
            onClick={() => {
              dispatch(deposit(amount));
              setAmount("");
            }}
          >
            Deposit
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-8 col-lg-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={fullName}
              onChange={(e) => {
                let data = e.target.value;
                setFullName(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-lg-1 col-4"
            onClick={() => {
              dispatch(updateName(fullName));
              setFullName("");
            }}
          >
            Update
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-8 col-lg-5">
            <input
              type="number"
              className="form-control"
              placeholder="Enter mobile"
              value={mobile}
              onChange={(e) => {
                let data = e.target.value;
                setMobile(data);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-lg-1 col-4"
            onClick={() => {
              dispatch(updateMobile(mobile));
              setMobile("");
            }}
          >
            Update
          </button>
        </div>
      </div>
      <div className="mt-2">
        <button
          className="btn btn-danger ccol-lg-1 col-2"
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

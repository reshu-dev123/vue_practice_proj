import { useSelector } from "react-redux";

export default function Account() {
  let data = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  return (
    <>
      <div className="container">
        <h2 className="text-primary">Account Details</h2>
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>Balance</th>
              <th>Full Name</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.balance}</td>
              <td>{data.fullName}</td>
              <td>{data.mobile}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

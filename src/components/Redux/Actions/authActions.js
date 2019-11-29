import axios from "axios";

//Login Customers
export const loginCustomer = (email, password) => {
  let data = {
    email,
    password
  };
  console.log(email, password);
  return dispatch => {
    axios
      .post("http://ogbuifymark-001-site2.btempurl.com/customers/login", data)
      .then(res => {
        console.log(res, "i am the res");
      })
      .catch(err => {
        console.log(err, "i am the err");
      });
  };
};

import axios from "axios";

//Login Customers
export const loginCustomer = (email, password) => {
  let bodyFormData = new FormData();
  bodyFormData.set("email", email);
  bodyFormData.set("password", password);
  console.log(bodyFormData, email, password, "200")
  return dispatch => {
    // Am performing a post requst..
    axios
      .post(
        "http://ogbuifymark-001-site2.btempurl.com/customers/login",
        bodyFormData
      )
      .then(response => {
        // Handle the success.
        console.log(response, "i am the response 1");
      })
      .catch(error => {
        // Handle the erro.
        console.log(error, "i am the error 1");
      });
  };
};


// Register Customers
export const registerCustomer = (firstName, email, password) => {
  let bodyFormData = new FormData();
  bodyFormData.set("name", firstName);
  bodyFormData.set("email", email);
  bodyFormData.set("password", password);
  return dispatch => {
    // performing a post requst
    axios
      .post("http://ogbuifymark-001-site2.btempurl.com/customers", bodyFormData)
      .then(response => {
        // Handle the success
        console.log(response, "i am res 2");
      })
      .catch(erro => {
        // Handle the erro
        console.log(erro, "i am the err 2");
      });
  };
};

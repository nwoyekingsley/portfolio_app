import axios from "axios";
import {apiUrl} from './../../Script/config'

//Login Customers
export const loginCustomer = (email, password) => {
  let bodyFormData = new FormData();
  bodyFormData.set("email", email);
  bodyFormData.set("password", password);
  return dispatch => {
    axios
      .post(apiUrl +
        "customers/login",
        bodyFormData
      )
      .then(response => {
      
        console.log(response, "i am the response 1");
      })
      .catch(error => {
    
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
      .post(apiUrl+"customers", bodyFormData)
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

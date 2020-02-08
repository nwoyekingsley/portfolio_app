import axios from "axios";
import {apiUrl} from './../../Script/config'
import Swal from "sweetalert2";


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
        console.log(response)
        localStorage.setItem('loginAbuchiUser', JSON.stringify(response.data));
        Swal.fire({
          title: "Error",
          text: "logged in successfully",
          icon: "success",
          showCancelButton: false,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "COUTINUE",
          cancelButtonText: ""
        }).then(result => {
          
        });
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
  console.log({firstName}, {email}, {password})
  return dispatch => {
    // performing a post requst
    axios
      .post(apiUrl+"customers", bodyFormData)
      .then(response => {
        if (response.Status == 200){
          loginCustomer(email,password )
        }
        else{
         
        }
        
        // Handle the success
        console.log(response, "i am res 2");
      })
      .catch(erro => {
        // Handle the erro
        Swal.fire({
          title: "Error",
          text: erro.response.data.Message,
          icon: "success",
          showCancelButton: false,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "COUTINUE",
          cancelButtonText: ""
        }).then(result => {
          
        });
        console.log(erro.response, "i am the err 2");
      });
  };
};

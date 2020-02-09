import axios from "axios";
import {apiUrl} from './../../Script/config'
import {LOGIN_SUCCESS} from './Types'
import Swal from "sweetalert2";


//Login Customers
export const loginCustomer = (email, password) => {
  let bodyFormData = new FormData();
  bodyFormData.append("email", email);
  bodyFormData.append("password", password);
  console.log({bodyFormData})
  return dispatch => {
    axios
      .post(apiUrl +
        "customers/login",
        bodyFormData
      )
      .then(response => {
       
        localStorage.setItem('loginAbuchiUser', JSON.stringify(response.data));
        Swal.fire({
          title: "Success",
          text: "logged in successfully",
          icon: "success",
          showCancelButton: false,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "COUTINUE",
          cancelButtonText: ""
        }).then(result => {
          
        });
       
        var data = response.data.Customer
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.AccessToken;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: true
        })
        // dispatch(updateCustomer(data, password))
      })
      .catch(error => {
        Swal.fire({
          title: "error",
          text: error.response.data.Message,
          icon: "error",
          showCancelButton: false,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "COUTINUE",
          cancelButtonText: ""
        }).then(result => {
          
        });
        console.log(error.response, "i am the error 1");
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
    axios
      .post(apiUrl+"customers", bodyFormData)
      .then(response => {
        if (response.Status == 200){
          loginCustomer(email,password )
        }
        else{
         
        }
        var data = response.data.Customer
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.AccessToken;
        dispatch(updateCustomer(data, password))
        
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

//Update a customer
export const updateCustomer = (data, password) => {
  let bodyFormData = new FormData();
  bodyFormData.set("name", data.Name);
  bodyFormData.set("email", data.Email);
 
  return dispatch => {
    axios
      .put(apiUrl +
        `customer?password=${password}&mob_phone=${data.MobPhone}`,
        bodyFormData
      )
      .then(response => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: true
        })
      })
      .catch(error => {
    
        console.log(error, "i am the error 1");
      });
  };
};

//Get Customer address
export const customerAddress = (address_1, address_2, city, region, postal_code, country, shipping_region_id = 2, user ) => {
  let bodyFormData = new FormData();
  bodyFormData.set("Address_1", address_1);
  bodyFormData.set("address_2", address_2);
  bodyFormData.set("city", city);
  bodyFormData.set("region", region);
  bodyFormData.set("postal_code", postal_code);
  bodyFormData.set("country", country);
  bodyFormData.set("shipping_region_id", shipping_region_id );
  const options = {
    headers: {'Authorization': 'Bearer '+user.AccessToken}
  };


  return dispatch => {
    axios
      .put(apiUrl +
        `customers/address`,
        bodyFormData, options
      )
      .then(response => {
        Swal.fire({
          title: "Successful",
          text: "Address saved successfully",
          icon: "success",
          confirmButtonColor: "#3085d6",
        })
      })
      .catch(error => {
    
        console.log(error, "i am the error 1");
      });
  };
};

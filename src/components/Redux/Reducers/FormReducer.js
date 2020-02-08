import { GET_FORM_DETAIL } from '../Actions/Types'

const initialState = {
  firstName: "",
  loginEmail:'',
  loginPassword:'',
  email: "",
  password: "",
  repeatPassword: "",
  Address_1:"",
  city:"",
  region:"",
  postal_code:"",
  country:"",
  shipping_region_id:"",
  mob_phone:"",
  eve_phone:""
};

// function repeatPassword() {

//   let password;
//   let repeatPassword;
//   if (re === repeatPassword) {
//     console.log(repeatPassword);
//   } else {
//     return (null)
//   }
// }

const FormReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_FORM_DETAIL:

      return { ...state, [action.payload.props]: action.payload.value }

    default:
      return state;
  }
};

export default FormReducer;

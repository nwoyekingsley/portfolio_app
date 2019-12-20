import { GET_FORM_DETAIL } from '../Actions/Types'

const initialState = {
  firstName: "",
  email: "",
  password: "",
  repeatPassword: "",
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

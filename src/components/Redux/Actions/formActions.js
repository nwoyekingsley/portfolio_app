import { GET_FORM_DETAIL } from './Types'

export const getFormData = (payload) => {
    return (dispatch) => {
        dispatch({
            type: GET_FORM_DETAIL,
            payload

        })
    }
}
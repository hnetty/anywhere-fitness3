import { axiosWithAuth } from '../utils/axiosWithAuth';

export const ADD_CLASS_START = 'ADD_CLASS_START';
export const ADD_CLASS_SUCCESS = 'ADD_CLASS_SUCCESS';
export const ADD_CLASS_FAIL = 'ADD_CLASS_FAIL';




export const addClass = ( state ) => dispatch => {
    dispatch({type:ADD_CLASS_START})
   
   
    axiosWithAuth()
    .post('/api/instructor/classes', state)
    .then(res=>{
        
       dispatch({type:ADD_CLASS_SUCCESS, payload:  state})
    })

    .catch(err=>{
     dispatch({type: ADD_CLASS_FAIL, payload: err})
    })
}
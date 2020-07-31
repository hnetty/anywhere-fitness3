import { axiosWithAuth } from '../utils/axiosWithAuth'

export const EDIT_CLASS_START = 'EDIT_CLASS_START'
export const EDIT_CLASS_SUCCESS = 'EDIT_CLASS_SUCCESS'
export const EDIT_CLASS_FAIL = 'EDIT_CLASS_FAIL'



export const editClass = (newClass, classID) => dispatch => {
    dispatch({ type: EDIT_CLASS_START, payload: newClass})
    axiosWithAuth()
    .put(`api/instructor/classes/${classID}`, newClass)
    .then(res => {
        
        dispatch({type: EDIT_CLASS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: EDIT_CLASS_FAIL, payload: err})
    })

}
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const DELETE_CLASS_START = 'DELETE_CLASS_START'
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS'
export const DELETE_CLASS_FAIL = 'DELETE_CLASS_FAIL'



export const deleteClass = (classID) => dispatch => {
    dispatch({ type: DELETE_CLASS_START})

    axiosWithAuth()
    .delete(`api/instructor/classes/${classID}`)
    .then(res => {
        console.log('i deleted the class!')
        dispatch({type: DELETE_CLASS_SUCCESS, payload:classID})
    
    })
    .catch(err => {
        dispatch({type: DELETE_CLASS_FAIL, payload: err})
    })

}

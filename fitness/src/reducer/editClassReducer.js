import {
    EDIT_CLASS_START,
    EDIT_CLASS_SUCCESS,
    EDIT_CLASS_FAIL
} from '../actions/editClass'

const initalState = {
    classes: {},
    error: '',
    isFetching: false
}

export const editClassReducer = ( state=initalState, action) => {
    switch(action.type){
        case EDIT_CLASS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case EDIT_CLASS_SUCCESS:
            return {
                ...state,
                classes: action.payload,
                isFetching: false,
                error: ''
            };
        case EDIT_CLASS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}